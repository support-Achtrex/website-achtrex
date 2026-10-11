'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { ServicesDB } from '@/lib/services-db';
import { ServiceItem } from '@/data/studio-data';

// Helper to save uploaded file to public/uploads
async function saveUploadedFile(file: File | null): Promise<string | null> {
  if (!file || file.size === 0 || typeof file.name !== 'string') return null;

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${Date.now()}-${cleanName}`;
    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);
    return `/uploads/${filename}`;
  } catch (err) {
    console.error('File upload error in services action:', err);
    return null;
  }
}

export async function updateServiceAction(formData: FormData) {
  try {
    const slug = (formData.get('slug') as string) || '';
    if (!slug) {
      return { success: false, error: 'Service slug is required' };
    }

    const current = ServicesDB.getBySlug(slug);
    if (!current) {
      return { success: false, error: `Service with slug "${slug}" not found` };
    }

    const title = (formData.get('title') as string) || current.title;
    const number = (formData.get('number') as string) || current.number;
    const subtitle = (formData.get('subtitle') as string) || current.subtitle;
    const headline = (formData.get('headline') as string) || current.headline;
    const description = (formData.get('description') as string) || current.description;
    const philosophy = (formData.get('philosophy') as string) || current.philosophy;
    const whyItMatters = (formData.get('whyItMatters') as string) || current.whyItMatters;

    // Direct URLs (if text input changed or cleared)
    let heroImage = (formData.get('heroImage') as string) ?? current.heroImage;
    let secondaryImage = (formData.get('secondaryImage') as string) ?? current.secondaryImage;

    // Handle file uploads if provided
    const heroImageFile = formData.get('heroImageFile') as File | null;
    const uploadedHero = await saveUploadedFile(heroImageFile);
    if (uploadedHero) {
      heroImage = uploadedHero;
    }

    const secondaryImageFile = formData.get('secondaryImageFile') as File | null;
    const uploadedSecondary = await saveUploadedFile(secondaryImageFile);
    if (uploadedSecondary) {
      secondaryImage = uploadedSecondary;
    }

    // Parse capabilities & deliverables from comma or newline separated strings
    const capabilitiesRaw = formData.get('capabilities') as string;
    const capabilities = capabilitiesRaw 
      ? capabilitiesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean)
      : current.capabilities;

    const deliverablesRaw = formData.get('deliverables') as string;
    const deliverables = deliverablesRaw
      ? deliverablesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean)
      : current.deliverables;

    const updated = ServicesDB.update(slug, {
      title,
      number,
      subtitle,
      headline,
      description,
      philosophy,
      whyItMatters,
      heroImage,
      secondaryImage,
      capabilities,
      deliverables,
    });

    // Revalidate paths
    revalidatePath('/');
    revalidatePath('/services');
    revalidatePath(`/services/${slug}`);
    revalidatePath('/admin/services');

    return { success: true, service: updated };
  } catch (err: any) {
    console.error('Error in updateServiceAction:', err);
    return { success: false, error: err.message || 'Failed to update service' };
  }
}

export async function deleteServiceAction(slug: string) {
  try {
    const success = ServicesDB.delete(slug);
    revalidatePath('/');
    revalidatePath('/services');
    revalidatePath('/admin/services');
    return { success };
  } catch (err: any) {
    console.error('Error in deleteServiceAction:', err);
    return { success: false, error: err.message || 'Failed to delete service' };
  }
}

export async function createServiceAction(formData: FormData) {
  try {
    const title = (formData.get('title') as string) || '';
    if (!title.trim()) {
      return { success: false, error: 'Service title is required' };
    }

    const slug =
      (formData.get('slug') as string) ||
      title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const number = (formData.get('number') as string) || '07';
    const subtitle = (formData.get('subtitle') as string) || '';
    const headline = (formData.get('headline') as string) || title;
    const description = (formData.get('description') as string) || '';
    const philosophy = (formData.get('philosophy') as string) || '';
    const whyItMatters = (formData.get('whyItMatters') as string) || '';

    let heroImage = (formData.get('heroImage') as string) || '/studio-assets/service-experience-design.jpg';
    let secondaryImage = (formData.get('secondaryImage') as string) || '';

    const heroImageFile = formData.get('heroImageFile') as File | null;
    const uploadedHero = await saveUploadedFile(heroImageFile);
    if (uploadedHero) heroImage = uploadedHero;

    const secondaryImageFile = formData.get('secondaryImageFile') as File | null;
    const uploadedSecondary = await saveUploadedFile(secondaryImageFile);
    if (uploadedSecondary) secondaryImage = uploadedSecondary;

    const capabilitiesRaw = (formData.get('capabilities') as string) || '';
    const capabilities = capabilitiesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);

    const deliverablesRaw = (formData.get('deliverables') as string) || '';
    const deliverables = deliverablesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);

    const newService: ServiceItem = {
      id: slug,
      slug,
      number,
      title,
      subtitle,
      headline,
      description,
      philosophy,
      whyItMatters,
      capabilities,
      deliverables,
      techStack: ['Next.js 15', 'Three.js', 'Tailwind CSS'],
      industryApplications: [],
      process: [],
      heroImage,
      secondaryImage,
      galleryImages: [],
      featuredCaseSlug: '',
      featuredCaseTitle: '',
      relatedProjectSlugs: [],
    };

    const created = ServicesDB.add(newService);

    revalidatePath('/');
    revalidatePath('/services');
    revalidatePath(`/services/${slug}`);
    revalidatePath('/admin/services');

    return { success: true, service: created };
  } catch (err: any) {
    console.error('Error in createServiceAction:', err);
    return { success: false, error: err.message || 'Failed to create service' };
  }
}
