'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { MediaDB, MediaItem, MediaSpec } from '@/lib/media-db';

async function saveUploadedFile(file: File | null): Promise<string | null> {
  if (!file || file.size === 0 || typeof file.name !== 'string' || !file.name.trim()) {
    return null;
  }
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
    console.error('File upload error:', err);
    return null;
  }
}

export async function createMediaAction(formData: FormData) {
  try {
    const title = (formData.get('title') as string) || '';
    const subtitle = (formData.get('subtitle') as string) || '';
    const category = (formData.get('category') as any) || 'STORIES';
    const dateInput = (formData.get('date') as string) || '';
    const summary = (formData.get('summary') as string) || '';
    const content = (formData.get('content') as string) || '';
    const mediaType = (formData.get('mediaType') as 'image' | 'video') || 'image';
    const directUrl = (formData.get('directUrl') as string) || '';
    const featured = formData.get('featured') === 'true';

    if (!title.trim()) {
      return { success: false, error: 'Title is required' };
    }

    // Determine primary media URL
    let mediaUrl = directUrl.trim();
    const file = formData.get('file') as File | null;
    const uploadedMedia = await saveUploadedFile(file);
    if (uploadedMedia) {
      mediaUrl = uploadedMedia;
    }

    if (!mediaUrl) {
      mediaUrl = mediaType === 'video'
        ? '/case/roadster/roadster-loop.mp4'
        : '/studio-assets/service-experience-design.jpg';
    }

    // Hero video
    let heroVideo = (formData.get('heroVideo') as string) || '';
    const heroVideoFile = formData.get('heroVideoFile') as File | null;
    const uploadedHeroVid = await saveUploadedFile(heroVideoFile);
    if (uploadedHeroVid) heroVideo = uploadedHeroVid;

    // Secondary image
    let secondaryImage = (formData.get('secondaryImage') as string) || '';
    const secondaryImageFile = formData.get('secondaryImageFile') as File | null;
    const uploadedSecondaryImg = await saveUploadedFile(secondaryImageFile);
    if (uploadedSecondaryImg) secondaryImage = uploadedSecondaryImg;

    // Gallery images: array from JSON or newline-separated string
    let galleryImages: string[] = [];
    const galleryImagesRaw = formData.get('galleryImages') as string;
    if (galleryImagesRaw) {
      try {
        galleryImages = JSON.parse(galleryImagesRaw);
      } catch (_) {
        galleryImages = galleryImagesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
      }
    }

    // Multiple file uploads for gallery images
    const galleryFiles = formData.getAll('newGalleryFiles') as File[];
    for (const gFile of galleryFiles) {
      const uploadedG = await saveUploadedFile(gFile);
      if (uploadedG) galleryImages.push(uploadedG);
    }
    const singleGFile = formData.get('newGalleryFile') as File | null;
    if (singleGFile) {
      const uploadedSG = await saveUploadedFile(singleGFile);
      if (uploadedSG) galleryImages.push(uploadedSG);
    }

    // Gallery videos: array from JSON or newline-separated string
    let galleryVideos: string[] = [];
    const galleryVideosRaw = formData.get('galleryVideos') as string;
    if (galleryVideosRaw) {
      try {
        galleryVideos = JSON.parse(galleryVideosRaw);
      } catch (_) {
        galleryVideos = galleryVideosRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
      }
    }

    // Multiple file uploads for gallery videos
    const galleryVidFiles = formData.getAll('newGalleryVideoFiles') as File[];
    for (const vFile of galleryVidFiles) {
      const uploadedV = await saveUploadedFile(vFile);
      if (uploadedV) galleryVideos.push(uploadedV);
    }
    const singleVFile = formData.get('newGalleryVideoFile') as File | null;
    if (singleVFile) {
      const uploadedSV = await saveUploadedFile(singleVFile);
      if (uploadedSV) galleryVideos.push(uploadedSV);
    }

    // Specs
    let specs: MediaSpec[] | undefined = undefined;
    const specsRaw = formData.get('specs') as string;
    if (specsRaw) {
      try {
        specs = JSON.parse(specsRaw);
      } catch (_) {}
    }

    // Generate unique slug
    const cleanTitle = title.replace(/[“”"']/g, '').trim().toLowerCase();
    let slug = cleanTitle
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (!slug) slug = `media-${Date.now()}`;

    const existing = MediaDB.getBySlug(slug);
    if (existing) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    const date = dateInput.trim() || new Date().toLocaleDateString('en-GB');

    const newItem = MediaDB.add({
      slug,
      title,
      subtitle,
      category,
      date,
      summary: summary || subtitle || title,
      content: content || summary || subtitle || title,
      mediaType,
      mediaUrl,
      featured,
      heroVideo: heroVideo || undefined,
      secondaryImage: secondaryImage || undefined,
      galleryImages: galleryImages.length > 0 ? galleryImages : undefined,
      galleryVideos: galleryVideos.length > 0 ? galleryVideos : undefined,
      specs,
    });

    revalidatePath('/');
    revalidatePath('/media');
    revalidatePath(`/media/${slug}`);
    revalidatePath('/admin/media');

    return { success: true, item: newItem };
  } catch (err: any) {
    console.error('Error in createMediaAction:', err);
    return { success: false, error: err?.message || 'Failed to create media release' };
  }
}

export async function updateMediaAction(formData: FormData) {
  try {
    const id = (formData.get('id') as string) || (formData.get('slug') as string) || '';
    if (!id) {
      return { success: false, error: 'Media ID or slug is required' };
    }

    const current = MediaDB.getById(id) || MediaDB.getBySlug(id);
    if (!current) {
      return { success: false, error: 'Media release not found' };
    }

    const title = (formData.get('title') as string) || current.title;
    const subtitle = (formData.get('subtitle') as string) ?? current.subtitle;
    const category = (formData.get('category') as any) || current.category;
    const dateInput = (formData.get('date') as string) || current.date;
    const summary = (formData.get('summary') as string) || current.summary;
    const content = (formData.get('content') as string) || current.content;
    const mediaType = (formData.get('mediaType') as 'image' | 'video') || current.mediaType;
    const directUrl = formData.get('directUrl') as string | null;
    const featured = formData.has('featured') ? formData.get('featured') === 'true' : current.featured;

    let mediaUrl = current.mediaUrl;
    if (typeof directUrl === 'string' && directUrl.trim()) {
      mediaUrl = directUrl.trim();
    }

    const file = formData.get('file') as File | null;
    const uploadedFile = await saveUploadedFile(file);
    if (uploadedFile) {
      mediaUrl = uploadedFile;
    }

    // Hero video
    let heroVideo = (formData.get('heroVideo') as string) ?? current.heroVideo;
    const heroVideoFile = formData.get('heroVideoFile') as File | null;
    const uploadedHeroVid = await saveUploadedFile(heroVideoFile);
    if (uploadedHeroVid) heroVideo = uploadedHeroVid;

    // Secondary image
    let secondaryImage = (formData.get('secondaryImage') as string) ?? current.secondaryImage;
    const secondaryImageFile = formData.get('secondaryImageFile') as File | null;
    const uploadedSecondaryImg = await saveUploadedFile(secondaryImageFile);
    if (uploadedSecondaryImg) secondaryImage = uploadedSecondaryImg;

    // Gallery images
    let galleryImages = current.galleryImages ? [...current.galleryImages] : [];
    const galleryImagesRaw = formData.get('galleryImages') as string;
    if (galleryImagesRaw) {
      try {
        galleryImages = JSON.parse(galleryImagesRaw);
      } catch (_) {
        galleryImages = galleryImagesRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
      }
    }

    // Multiple file uploads for gallery images
    const galleryFiles = formData.getAll('newGalleryFiles') as File[];
    for (const gFile of galleryFiles) {
      const uploadedG = await saveUploadedFile(gFile);
      if (uploadedG) galleryImages.push(uploadedG);
    }
    const singleGFile = formData.get('newGalleryFile') as File | null;
    if (singleGFile) {
      const uploadedSG = await saveUploadedFile(singleGFile);
      if (uploadedSG) galleryImages.push(uploadedSG);
    }

    // Gallery videos
    let galleryVideos = current.galleryVideos ? [...current.galleryVideos] : [];
    const galleryVideosRaw = formData.get('galleryVideos') as string;
    if (galleryVideosRaw) {
      try {
        galleryVideos = JSON.parse(galleryVideosRaw);
      } catch (_) {
        galleryVideos = galleryVideosRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
      }
    }

    // Multiple file uploads for gallery videos
    const galleryVidFiles = formData.getAll('newGalleryVideoFiles') as File[];
    for (const vFile of galleryVidFiles) {
      const uploadedV = await saveUploadedFile(vFile);
      if (uploadedV) galleryVideos.push(uploadedV);
    }
    const singleVFile = formData.get('newGalleryVideoFile') as File | null;
    if (singleVFile) {
      const uploadedSV = await saveUploadedFile(singleVFile);
      if (uploadedSV) galleryVideos.push(uploadedSV);
    }

    // Specs
    let specs = current.specs;
    const specsRaw = formData.get('specs') as string;
    if (specsRaw) {
      try {
        specs = JSON.parse(specsRaw);
      } catch (_) {}
    }

    const updated = MediaDB.update(current.id, {
      title,
      subtitle,
      category,
      date: dateInput,
      summary,
      content,
      mediaType,
      mediaUrl,
      featured,
      heroVideo: heroVideo || undefined,
      secondaryImage: secondaryImage || undefined,
      galleryImages: galleryImages.length > 0 ? galleryImages : undefined,
      galleryVideos: galleryVideos.length > 0 ? galleryVideos : undefined,
      specs,
    });

    revalidatePath('/');
    revalidatePath('/media');
    revalidatePath(`/media/${current.slug}`);
    revalidatePath('/admin/media');

    return { success: true, item: updated };
  } catch (err: any) {
    console.error('Error in updateMediaAction:', err);
    return { success: false, error: err?.message || 'Failed to update media release' };
  }
}

export async function deleteMediaAction(id: string) {
  try {
    const success = MediaDB.delete(id);
    if (success) {
      revalidatePath('/');
      revalidatePath('/media');
      revalidatePath('/admin/media');
      return { success: true };
    }
    return { success: false, error: 'Item not found' };
  } catch (err: any) {
    console.error('Error in deleteMediaAction:', err);
    return { success: false, error: err?.message || 'Failed to delete media release' };
  }
}
