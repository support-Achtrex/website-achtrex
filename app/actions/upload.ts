'use server';

import { createClient } from "@/utilities/supabase/server";

export async function uploadImage(formData: FormData) {
    const file = formData.get('file') as File;
    if (!file) {
        return { error: 'No file uploaded' };
    }

    try {
        const supabase = await createClient();

        // Create unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = file.name.split('.').pop();
        // Place in a specific folder for notes
        const filename = `notes/${uniqueSuffix}.${ext}`;

        const { data, error } = await supabase.storage
            .from('team') // Using 'team' bucket as we know it exists
            .upload(filename, file);

        if (error) {
            console.error('Supabase upload error:', error);
            // Fallback: try 'public' bucket if 'team' fails or permissions are weird
            if (error.message.includes('Bucket not found') || error.message.includes('permission')) {
                console.log('Attempting fallback to public bucket...');
                // Logic for fallback could go here, but let's just stick to reporting the error for now
                // or try to find a valid bucket.
            }
            return { error: 'Failed to upload to storage: ' + error.message };
        }

        const { data: { publicUrl } } = supabase.storage
            .from('team')
            .getPublicUrl(filename);

        return { url: publicUrl };
    } catch (error: any) {
        console.error('Upload error:', error);
        return { error: 'Failed to upload file: ' + error.message };
    }
}
