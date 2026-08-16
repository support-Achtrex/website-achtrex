'use server';

import { 
  getMemberByEmail, 
  createPortalMember, 
  createPortalProject, 
  getMemberProjects, 
  getProjectById, 
  getProjectUpdates, 
  addProjectUpdate, 
  updateProjectStatus, 
  updateProjectCartItems, 
  updateProjectArchitecture,
  updateProjectDetails,
  deleteProject,
  AVAILABLE_ADDONS,
  ScopeCartItem,
  ArchitectureNode
} from '@/lib/portal-db';
import { 
  hashPassword, 
  verifyPassword, 
  setMemberSessionCookie, 
  clearMemberSessionCookie, 
  getCurrentMember 
} from '@/lib/portal-auth';
import { sendPortalSignupAndProjectEmail } from '@/lib/portal-email';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function memberSignUpAction(formData: FormData) {
  try {
    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim().toLowerCase();
    const password = (formData.get('password') as string || '').trim();
    const company = (formData.get('company') as string || '').trim();
    const phone = (formData.get('phone') as string || '').trim();
    
    const projectTitle = (formData.get('projectTitle') as string || '').trim();
    const serviceType = (formData.get('serviceType') as string || 'Custom Software Development').trim();
    const budget = (formData.get('budget') as string || 'Custom Scope').trim();
    const description = (formData.get('description') as string || '').trim();

    if (!name || !email || !password) {
      return { error: 'Please provide your full name, email, and password.' };
    }

    if (!projectTitle || !description) {
      return { error: 'Please provide your project title and project description / requirements.' };
    }

    // Check if user already exists
    const existing = await getMemberByEmail(email);
    if (existing) {
      return { error: 'An account with this email already exists. Please log in instead.' };
    }

    // Hash password & create member
    const passwordHash = hashPassword(password);
    const member = await createPortalMember({
      name,
      email,
      password_hash: passwordHash,
      company,
      phone
    });

    // Create project
    const project = await createPortalProject({
      member_id: member.id,
      title: projectTitle,
      service_type: serviceType,
      description,
      budget
    });

    // Send emails asynchronously
    sendPortalSignupAndProjectEmail({
      memberName: name,
      memberEmail: email,
      memberCompany: company,
      memberPhone: phone,
      projectTitle,
      serviceType,
      budget,
      description
    }).catch(err => console.error('Email error:', err));

    // Set session cookie
    await setMemberSessionCookie(member.id);

    return { success: true, redirectUrl: '/portal/dashboard' };
  } catch (error: any) {
    console.error('memberSignUpAction error:', error);
    return { error: error.message || 'Failed to complete registration. Please try again.' };
  }
}

export async function memberLoginAction(formData: FormData) {
  try {
    const email = (formData.get('email') as string || '').trim().toLowerCase();
    const password = (formData.get('password') as string || '').trim();

    if (!email || !password) {
      return { error: 'Please enter both your email and password.' };
    }

    const member = await getMemberByEmail(email);
    if (!member) {
      return { error: 'Invalid email or password. Please try again.' };
    }

    const isMatch = verifyPassword(password, member.password_hash);
    if (!isMatch) {
      return { error: 'Invalid email or password. Please try again.' };
    }

    await setMemberSessionCookie(member.id);
    return { success: true, redirectUrl: '/portal/dashboard' };
  } catch (error: any) {
    console.error('memberLoginAction error:', error);
    return { error: error.message || 'Login failed. Please try again.' };
  }
}

export async function memberLogoutAction() {
  await clearMemberSessionCookie();
  redirect('/portal');
}

export async function memberCreateNewProjectAction(formData: FormData) {
  try {
    const member = await getCurrentMember();
    if (!member) {
      return { error: 'You must be logged in to create a project.' };
    }

    const title = (formData.get('title') as string || '').trim();
    const service_type = (formData.get('service_type') as string || 'Custom Software Development').trim();
    const budget = (formData.get('budget') as string || 'Custom Scope').trim();
    const description = (formData.get('description') as string || '').trim();

    if (!title || !description) {
      return { error: 'Project title and description are required.' };
    }

    const project = await createPortalProject({
      member_id: member.id,
      title,
      service_type,
      description,
      budget
    });

    // Send email notification
    sendPortalSignupAndProjectEmail({
      memberName: member.name,
      memberEmail: member.email,
      memberCompany: member.company,
      memberPhone: member.phone,
      projectTitle: title,
      serviceType: service_type,
      budget,
      description
    }).catch(err => console.error('Email error:', err));

    revalidatePath('/portal/dashboard');
    return { success: true, projectId: project.id };
  } catch (error: any) {
    console.error('memberCreateNewProjectAction error:', error);
    return { error: error.message || 'Failed to submit project request.' };
  }
}

export async function memberToggleAddonAction(projectId: number, addonId: string) {
  try {
    const member = await getCurrentMember();
    if (!member) {
      return { error: 'Authentication required' };
    }

    const project = await getProjectById(projectId);
    if (!project || project.member_id !== member.id) {
      return { error: 'Project not found' };
    }

    const currentCart: ScopeCartItem[] = project.cart_items || [];
    const exists = currentCart.find(item => item.id === addonId);

    let updatedCart: ScopeCartItem[];
    if (exists) {
      // Remove if addon
      updatedCart = currentCart.filter(item => item.id !== addonId);
    } else {
      const addonToAdd = AVAILABLE_ADDONS.find(a => a.id === addonId);
      if (!addonToAdd) return { error: 'Addon not found' };
      updatedCart = [...currentCart, { ...addonToAdd, status: 'addon_requested' }];
    }

    await updateProjectCartItems(projectId, updatedCart);

    // Add automated progress update
    await addProjectUpdate({
      project_id: projectId,
      title: exists ? 'Scope Adjustment: Add-on Removed' : 'Scope Expansion: Add-on Requested',
      content: `Client updated their project scope cart (${exists ? 'Removed' : 'Added'}: ${addonId}). Our architecture team will adjust milestone specifications accordingly.`,
      stage: 'Scope Management',
      author_name: 'Achtrex System'
    });

    revalidatePath('/portal/dashboard');
    return { success: true, cart: updatedCart };
  } catch (error: any) {
    console.error('memberToggleAddonAction error:', error);
    return { error: error.message || 'Failed to update scope cart.' };
  }
}

export async function adminPostProjectUpdateAction(formData: FormData) {
  try {
    const projectId = parseInt(formData.get('projectId') as string, 10);
    const title = (formData.get('title') as string || '').trim();
    const content = (formData.get('content') as string || '').trim();
    const stage = (formData.get('stage') as string || 'Engineering Update').trim();
    const author_name = (formData.get('author_name') as string || 'Achtrex Engineering Team').trim();
    const status = (formData.get('status') as string || '').trim();
    const progress_percent = parseInt(formData.get('progress_percent') as string || '-1', 10);

    if (!projectId || !title || !content) {
      return { error: 'Title and update content are required.' };
    }

    await addProjectUpdate({
      project_id: projectId,
      title,
      content,
      stage,
      author_name
    });

    if (status && progress_percent >= 0) {
      await updateProjectStatus(projectId, status, progress_percent);
    }

    revalidatePath('/portal/dashboard');
    revalidatePath(`/admin/projects/${projectId}`);
    revalidatePath('/admin/projects');

    return { success: true };
  } catch (error: any) {
    console.error('adminPostProjectUpdateAction error:', error);
    return { error: error.message || 'Failed to post update.' };
  }
}

export async function adminUpdateArchitectureAction(projectId: number, nodes: ArchitectureNode[]) {
  try {
    const project = await getProjectById(projectId);
    if (!project) return { error: 'Project not found' };

    const newArchitectureData = {
      ...project.architecture_data,
      nodes
    };

    await updateProjectArchitecture(projectId, newArchitectureData);
    
    await addProjectUpdate({
      project_id: projectId,
      title: 'System Architecture Diagram Updated',
      content: 'Our solutions architect has updated your interactive system topology, component pipelines, and cloud specifications.',
      stage: 'Architecture Design',
      author_name: 'Lead Solutions Architect'
    });

    revalidatePath('/portal/dashboard');
    revalidatePath(`/admin/projects/${projectId}`);
    return { success: true };
  } catch (error: any) {
    console.error('adminUpdateArchitectureAction error:', error);
    return { error: error.message || 'Failed to update architecture.' };
  }
}

export async function adminUpdateProjectDetailsAction(formData: FormData) {
  try {
    const projectId = parseInt(formData.get('projectId') as string, 10);
    const title = (formData.get('title') as string || '').trim();
    const service_type = (formData.get('service_type') as string || '').trim();
    const budget = (formData.get('budget') as string || '').trim();
    const description = (formData.get('description') as string || '').trim();
    const status = (formData.get('status') as string || '').trim();
    const progress_percent = parseInt(formData.get('progress_percent') as string || '0', 10);

    if (!projectId || !title) {
      return { error: 'Project ID and title are required.' };
    }

    await updateProjectDetails(projectId, {
      title,
      service_type,
      budget,
      description,
      status,
      progress_percent
    });

    revalidatePath('/portal/dashboard');
    revalidatePath(`/admin/projects/${projectId}`);
    revalidatePath('/admin/projects');

    return { success: true };
  } catch (error: any) {
    console.error('adminUpdateProjectDetailsAction error:', error);
    return { error: error.message || 'Failed to update project details.' };
  }
}

export async function adminUpdateCartAction(projectId: number, cart_items: ScopeCartItem[]) {
  try {
    if (!projectId) return { error: 'Project ID required' };
    await updateProjectCartItems(projectId, cart_items);

    revalidatePath('/portal/dashboard');
    revalidatePath(`/admin/projects/${projectId}`);
    return { success: true };
  } catch (error: any) {
    console.error('adminUpdateCartAction error:', error);
    return { error: error.message || 'Failed to update scope deliverables cart.' };
  }
}

export async function adminDeleteProjectAction(projectId: number) {
  try {
    if (!projectId) return { error: 'Project ID required' };
    await deleteProject(projectId);

    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error: any) {
    console.error('adminDeleteProjectAction error:', error);
    return { error: error.message || 'Failed to delete project.' };
  }
}

export async function memberSubmitArchitectureInquiryAction(projectId: number, nodeId: string, note: string) {
  try {
    const member = await getCurrentMember();
    if (!member) return { error: 'Authentication required' };

    const project = await getProjectById(projectId);
    if (!project || project.member_id !== member.id) return { error: 'Project not found' };

    await addProjectUpdate({
      project_id: projectId,
      title: `Client Architecture Inquiry: [${nodeId}]`,
      content: `Client inquiry on module "${nodeId}":\n\n"${note}"\n\nOur engineering team will review specs and provide feedback.`,
      stage: 'Architecture Design',
      author_name: member.name
    });

    revalidatePath('/portal/dashboard');
    revalidatePath(`/admin/projects/${projectId}`);
    return { success: true };
  } catch (error: any) {
    console.error('memberSubmitArchitectureInquiryAction error:', error);
    return { error: error.message || 'Failed to submit architecture inquiry.' };
  }
}
