'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { HeroDB, HeroSlide, HeroConfig } from '@/lib/hero-db';

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
    const filename = `hero-${Date.now()}-${cleanName}`;
    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);
    return `/uploads/${filename}`;
  } catch (err) {
    console.error('File upload error in hero action:', err);
    return null;
  }
}

export async function setHeroModeAction(mode: 'single' | 'slider', activeSlideId?: string) {
  try {
    const updated = HeroDB.setMode(mode, activeSlideId);
    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');
    return { success: true, config: updated };
  } catch (err: any) {
    console.error('Error setting hero mode:', err);
    return { success: false, error: err.message || 'Failed to update hero mode' };
  }
}

export async function setActiveSlideAction(slideId: string) {
  try {
    const updated = HeroDB.setActiveSlide(slideId);
    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');
    return { success: true, config: updated };
  } catch (err: any) {
    console.error('Error setting active hero slide:', err);
    return { success: false, error: err.message || 'Failed to set active slide' };
  }
}

export async function toggleSlideEnabledAction(slideId: string, enabled?: boolean) {
  try {
    const slide = HeroDB.toggleSlideEnabled(slideId, enabled);
    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');
    return { success: true, slide };
  } catch (err: any) {
    console.error('Error toggling slide enabled:', err);
    return { success: false, error: err.message || 'Failed to toggle slide' };
  }
}

export async function updateHeroSlideAction(formData: FormData) {
  try {
    const id = formData.get('id') as string;
    if (!id) {
      return { success: false, error: 'Slide ID is required' };
    }

    const current = HeroDB.getSlideById(id);
    if (!current) {
      return { success: false, error: `Slide with id ${id} not found` };
    }

    const titleLinesRaw = (formData.get('titleLines') as string) || '';
    const titleLines = titleLinesRaw
      ? titleLinesRaw.split('\n').map((l) => l.trim()).filter(Boolean)
      : current.titleLines;

    const linkLabel = (formData.get('linkLabel') as string) || current.linkLabel;
    const linkHref = (formData.get('linkHref') as string) || current.linkHref;
    const mediaType = (formData.get('mediaType') as 'image' | 'video') || current.mediaType;
    const directUrl = (formData.get('directUrl') as string) || '';
    const enabled = formData.has('enabled') ? formData.get('enabled') === 'true' : current.enabled;

    let mediaSrc = current.mediaSrc;
    if (directUrl.trim()) {
      mediaSrc = directUrl.trim();
    }

    const mediaFile = formData.get('mediaFile') as File | null;
    const uploadedMedia = await saveUploadedFile(mediaFile);
    if (uploadedMedia) {
      mediaSrc = uploadedMedia;
    }

    const posterFile = formData.get('posterFile') as File | null;
    const uploadedPoster = await saveUploadedFile(posterFile);
    let posterSrc = current.posterSrc;
    if (uploadedPoster) {
      posterSrc = uploadedPoster;
    }

    const updated = HeroDB.updateSlide(id, {
      titleLines: titleLines.length > 0 ? titleLines : current.titleLines,
      linkLabel,
      linkHref,
      mediaType,
      mediaSrc,
      posterSrc,
      enabled,
    });

    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');

    return { success: true, slide: updated };
  } catch (err: any) {
    console.error('Error updating hero slide:', err);
    return { success: false, error: err.message || 'Failed to update slide' };
  }
}

export async function createHeroSlideAction(formData: FormData) {
  try {
    const titleLinesRaw = (formData.get('titleLines') as string) || '';
    const titleLines = titleLinesRaw
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (titleLines.length === 0) {
      return { success: false, error: 'At least one title line is required' };
    }

    const linkLabel = (formData.get('linkLabel') as string) || 'Explore';
    const linkHref = (formData.get('linkHref') as string) || '/projects';
    const mediaType = (formData.get('mediaType') as 'image' | 'video') || 'image';
    const directUrl = (formData.get('directUrl') as string) || '';
    const enabled = formData.get('enabled') === 'true';

    let mediaSrc = directUrl.trim();
    const mediaFile = formData.get('mediaFile') as File | null;
    const uploadedMedia = await saveUploadedFile(mediaFile);
    if (uploadedMedia) {
      mediaSrc = uploadedMedia;
    }

    if (!mediaSrc) {
      mediaSrc = mediaType === 'video'
        ? '/hero-videos/after-dark-cover.mp4'
        : '/hero-videos/hero-innovation.jpg';
    }

    const posterFile = formData.get('posterFile') as File | null;
    const posterSrc = await saveUploadedFile(posterFile) || undefined;

    const customId = (formData.get('id') as string) || `slide-${Date.now()}`;

    const newSlide = HeroDB.addSlide({
      id: customId,
      titleLines,
      linkLabel,
      linkHref,
      mediaType,
      mediaSrc,
      posterSrc,
      enabled,
      order: 99,
    });

    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');

    return { success: true, slide: newSlide };
  } catch (err: any) {
    console.error('Error creating hero slide:', err);
    return { success: false, error: err.message || 'Failed to create slide' };
  }
}

export async function deleteHeroSlideAction(slideId: string) {
  try {
    const success = HeroDB.deleteSlide(slideId);
    if (!success) {
      return { success: false, error: 'Cannot delete the only slide in Hero' };
    }

    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');

    return { success: true };
  } catch (err: any) {
    console.error('Error deleting hero slide:', err);
    return { success: false, error: err.message || 'Failed to delete slide' };
  }
}

export async function updateHeroConfigAction(formData: FormData) {
  try {
    const mode = (formData.get('mode') as 'single' | 'slider') || 'single';
    const activeSlideId = (formData.get('activeSlideId') as string) || '';
    const durationInput = formData.get('slideDurationMs') as string;
    const slideDurationMs = durationInput ? parseInt(durationInput, 10) : 8900;

    const current = HeroDB.getConfig();
    const updated = HeroDB.saveConfig({
      ...current,
      mode,
      activeSlideId: activeSlideId || current.activeSlideId,
      slideDurationMs: isNaN(slideDurationMs) ? 8900 : slideDurationMs,
    });

    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');

    return { success: true, config: updated };
  } catch (err: any) {
    console.error('Error updating hero config:', err);
    return { success: false, error: err.message || 'Failed to update hero configuration' };
  }
}
