'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { MediaDB, MediaItem } from '@/lib/media-db';

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

    // Determine media URL
    let mediaUrl = directUrl.trim();
    const file = formData.get('file') as File | null;

    if (file && file.size > 0 && typeof file.name === 'string') {
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
        mediaUrl = `/uploads/${filename}`;
      } catch (uploadErr: any) {
        console.error('File upload error:', uploadErr);
        if (!mediaUrl) {
          return { success: false, error: 'Failed to process media file upload' };
        }
      }
    }

    if (!mediaUrl) {
      // Fallback default placeholder
      mediaUrl = mediaType === 'video' 
        ? 'https://www.youtube.com/embed/dQw4w9WgXcQ' 
        : '/studio-assets/service-experience-design.jpg';
    }

    // Generate slug
    const cleanTitle = title.replace(/[“”"']/g, '').trim().toLowerCase();
    let slug = cleanTitle
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (!slug) slug = `media-${Date.now()}`;

    // Ensure unique slug
    const existing = MediaDB.getBySlug(slug);
    if (existing) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    // Default date if none provided
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
    });

    // Revalidate website paths
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
    if (file && file.size > 0 && typeof file.name === 'string' && file.name.trim()) {
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
        mediaUrl = `/uploads/${filename}`;
      } catch (uploadErr: any) {
        console.error('File upload error during media update:', uploadErr);
      }
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

