'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { ProjectsDB } from '@/lib/projects-db';
import { ConceptExperienceItem } from '@/data/studio-data';

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
    console.error('File upload error in projects action:', err);
    return null;
  }
}

export async function updateProjectAction(formData: FormData) {
  try {
    const slug = (formData.get('slug') as string) || '';
    if (!slug) {
      return { success: false, error: 'Project slug is required' };
    }

    const current = ProjectsDB.getBySlug(slug);
    if (!current) {
      return { success: false, error: `Project with slug "${slug}" not found` };
    }

    const title = (formData.get('title') as string) || current.title;
    const subtitle = (formData.get('subtitle') as string) || current.subtitle;
    const badge = ((formData.get('badge') as any) || current.badge) as 'ACHTREX CONCEPT' | 'CONCEPT EXPERIENCE';
    const category = (formData.get('category') as string) || current.category;
    const industry = (formData.get('industry') as string) || current.industry;
    const serviceId = (formData.get('serviceId') as string) || current.serviceId;
    const year = (formData.get('year') as string) || current.year;

    const shortDescription = (formData.get('shortDescription') as string) || current.shortDescription;
    const challenge = (formData.get('challenge') as string) || current.challenge;
    const conceptArchitecture = (formData.get('conceptArchitecture') as string) || current.conceptArchitecture;
    const interactiveExperience = (formData.get('interactiveExperience') as string) || current.interactiveExperience;
    const creativeDirection = (formData.get('creativeDirection') as string) || current.creativeDirection;
    const sceneMode = ((formData.get('sceneMode') as any) || current.sceneMode);

    // Direct URLs (if text input changed or cleared)
    let heroImage = (formData.get('heroImage') as string) ?? current.heroImage;
    let heroVideo = (formData.get('heroVideo') as string) ?? current.heroVideo;
    let secondaryImage = (formData.get('secondaryImage') as string) ?? current.secondaryImage;

    // Handle single file uploads
    const heroImageFile = formData.get('heroImageFile') as File | null;
    const uploadedHeroImg = await saveUploadedFile(heroImageFile);
    if (uploadedHeroImg) heroImage = uploadedHeroImg;

    const heroVideoFile = formData.get('heroVideoFile') as File | null;
    const uploadedHeroVid = await saveUploadedFile(heroVideoFile);
    if (uploadedHeroVid) heroVideo = uploadedHeroVid;

    const secondaryImageFile = formData.get('secondaryImageFile') as File | null;
    const uploadedSecondary = await saveUploadedFile(secondaryImageFile);
    if (uploadedSecondary) secondaryImage = uploadedSecondary;

    // Gallery images: JSON array or newline separated
    let galleryImages = current.galleryImages || [];
    const galleryImagesRaw = formData.get('galleryImages') as string;
    if (galleryImagesRaw) {
      try {
        galleryImages = JSON.parse(galleryImagesRaw);
      } catch (_) {
        galleryImages = galleryImagesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
      }
    }

    // New gallery file upload
    const newGalleryFile = formData.get('newGalleryFile') as File | null;
    const uploadedGalleryImg = await saveUploadedFile(newGalleryFile);
    if (uploadedGalleryImg) {
      galleryImages.push(uploadedGalleryImg);
    }

    // Parse technicalCapabilities & techStack
    const technicalCapabilitiesRaw = formData.get('technicalCapabilities') as string;
    const technicalCapabilities = technicalCapabilitiesRaw
      ? technicalCapabilitiesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean)
      : current.technicalCapabilities;

    const techStackRaw = formData.get('techStack') as string;
    const techStack = techStackRaw
      ? techStackRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean)
      : current.techStack;

    const updated = ProjectsDB.update(slug, {
      title,
      subtitle,
      badge,
      category,
      industry,
      serviceId,
      year,
      shortDescription,
      challenge,
      conceptArchitecture,
      interactiveExperience,
      creativeDirection,
      heroImage,
      heroVideo,
      secondaryImage,
      galleryImages,
      technicalCapabilities,
      techStack,
      sceneMode,
    });

    // Revalidate paths
    revalidatePath('/');
    revalidatePath('/projects');
    revalidatePath(`/projects/${slug}`);
    revalidatePath('/admin/projects');

    return { success: true, project: updated };
  } catch (err: any) {
    console.error('Error in updateProjectAction:', err);
    return { success: false, error: err.message || 'Failed to update project' };
  }
}

export async function deleteProjectAction(slug: string) {
  try {
    const success = ProjectsDB.delete(slug);
    revalidatePath('/');
    revalidatePath('/projects');
    revalidatePath('/admin/projects');
    return { success };
  } catch (err: any) {
    console.error('Error in deleteProjectAction:', err);
    return { success: false, error: err.message || 'Failed to delete project' };
  }
}

export async function createProjectAction(formData: FormData) {
  try {
    const title = (formData.get('title') as string) || '';
    if (!title.trim()) {
      return { success: false, error: 'Project title is required' };
    }

    const slug =
      (formData.get('slug') as string) ||
      title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const subtitle = (formData.get('subtitle') as string) || '';
    const badge = 'ACHTREX CONCEPT';
    const category = (formData.get('category') as string) || 'Interactive & Real-Time 3D';
    const industry = (formData.get('industry') as string) || 'Technology';
    const serviceId = (formData.get('serviceId') as string) || 'product-configurators';
    const year = (formData.get('year') as string) || '2025';

    const shortDescription = (formData.get('shortDescription') as string) || title;
    const challenge = (formData.get('challenge') as string) || '';
    const conceptArchitecture = (formData.get('conceptArchitecture') as string) || '';
    const interactiveExperience = (formData.get('interactiveExperience') as string) || '';
    const creativeDirection = (formData.get('creativeDirection') as string) || '';
    const sceneMode = ((formData.get('sceneMode') as any) || 'general');

    let heroImage = (formData.get('heroImage') as string) || '/studio-assets/project-aura.jpg';
    let heroVideo = (formData.get('heroVideo') as string) || '';
    let secondaryImage = (formData.get('secondaryImage') as string) || '';

    const heroImageFile = formData.get('heroImageFile') as File | null;
    const uploadedHeroImg = await saveUploadedFile(heroImageFile);
    if (uploadedHeroImg) heroImage = uploadedHeroImg;

    const heroVideoFile = formData.get('heroVideoFile') as File | null;
    const uploadedHeroVid = await saveUploadedFile(heroVideoFile);
    if (uploadedHeroVid) heroVideo = uploadedHeroVid;

    const technicalCapabilitiesRaw = (formData.get('technicalCapabilities') as string) || '';
    const technicalCapabilities = technicalCapabilitiesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);

    const techStackRaw = (formData.get('techStack') as string) || '';
    const techStack = techStackRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);

    const newProject: ConceptExperienceItem = {
      slug,
      title,
      subtitle,
      badge,
      category,
      industry,
      serviceId,
      year,
      heroImage,
      heroVideo,
      secondaryImage,
      galleryImages: [],
      shortDescription,
      challenge,
      conceptArchitecture,
      interactiveExperience,
      creativeDirection,
      technicalCapabilities,
      techStack,
      sceneMode,
      featuredOnHome: true,
      gridSpan: 'two-thirds',
    };

    const created = ProjectsDB.add(newProject);

    revalidatePath('/');
    revalidatePath('/projects');
    revalidatePath(`/projects/${slug}`);
    revalidatePath('/admin/projects');

    return { success: true, project: created };
  } catch (err: any) {
    console.error('Error in createProjectAction:', err);
    return { success: false, error: err.message || 'Failed to create project' };
  }
}
