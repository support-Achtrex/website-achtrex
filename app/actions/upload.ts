'use server';

import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function uploadImage(formData: FormData) {
    const file = formData.get('file') as File;
    if (!file) {
        return { error: 'No file uploaded' };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = file.name.split('.').pop();
    const filename = `image-${uniqueSuffix}.${ext}`;

    // Ensure directory exists
    const relativeUploadDir = '/uploads';
    const uploadDir = join(process.cwd(), 'public', relativeUploadDir);

    try {
        await mkdir(uploadDir, { recursive: true });
        await writeFile(join(uploadDir, filename), buffer);
        return { url: `${relativeUploadDir}/${filename}` };
    } catch (error) {
        console.error('Upload error:', error);
        return { error: 'Failed to upload file' };
    }
}
