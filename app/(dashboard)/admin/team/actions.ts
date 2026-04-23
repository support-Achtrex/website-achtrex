'use server'

import { createClient } from "@/utilities/supabase/server";
import { revalidatePath } from "next/cache";
import { uploadImageToTeamBucketServer, deleteImageFromTeamBucketServer, getPublicURLServer } from "@/utilities/supabase/team-storage";

export async function createTeamMember(formData: FormData) {
    try {
        const supabase = await createClient();
        
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const role = formData.get('role') as string;
        const imageFile = formData.get('image') as File;
        
        if (!name || !email || !role) {
            return { success: false, message: 'Name, email, and role are required' };
        }
        
        let imageUrl = null;
        
        if (imageFile && imageFile.size > 0) {
            // Upload image
            const { data, error: uploadError } = await uploadImageToTeamBucketServer(imageFile);
            
            if (uploadError) {
                console.error('Error uploading image:', uploadError);
                return { success: false, message: 'Failed to upload image' };
            }
            
            // Get public URL
            if (data?.path) {
                const { data: urlData } = await getPublicURLServer(data.path);
                imageUrl = urlData.publicUrl;
            }
        }
        
        // Insert into database
        const { error: insertError } = await supabase
            .from('teams')
            .insert({
                name,
                email,
                role,
                image: imageUrl
            });
            
        if (insertError) {
            console.error('Error creating team member:', insertError);
            return { success: false, message: insertError.message };
        }
        
        revalidatePath('/admin/team');
        revalidatePath('/about-us');
        return { success: true };
        
    } catch (error) {
        console.error('Unexpected error:', error);
        return { success: false, message: 'An unexpected error occurred' };
    }
}

export async function updateTeamMember(formData: FormData) {
    try {
        const supabase = await createClient();
        
        const id = formData.get('id') as string;
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const role = formData.get('role') as string;
        const imageFile = formData.get('image') as File;
        
        if (!id || !name || !email || !role) {
            return { success: false, message: 'ID, name, email, and role are required' };
        }
        
        const updates: any = {
            name,
            email,
            role,
            updated_at: new Date().toISOString()
        };
        
        if (imageFile && imageFile.size > 0) {
            // Upload new image
            const { data, error: uploadError } = await uploadImageToTeamBucketServer(imageFile);
            
            if (uploadError) {
                console.error('Error uploading image:', uploadError);
                return { success: false, message: 'Failed to upload image' };
            }
            
            // Get public URL
            if (data?.path) {
                const { data: urlData } = await getPublicURLServer(data.path);
                updates.image = urlData.publicUrl;
            }
        }
        
        // Update database
        const { error: updateError } = await supabase
            .from('teams')
            .update(updates)
            .eq('id', id);
            
        if (updateError) {
            console.error('Error updating team member:', updateError);
            return { success: false, message: updateError.message };
        }
        
        revalidatePath('/admin/team');
        revalidatePath('/about-us');
        return { success: true };
        
    } catch (error) {
        console.error('Unexpected error:', error);
        return { success: false, message: 'An unexpected error occurred' };
    }
}

export async function deleteTeamMember(id: string) {
    try {
        const supabase = await createClient();
        
        // 1. Fetch member to get image URL
        const { data: member, error: fetchError } = await supabase
            .from('teams')
            .select('image')
            .eq('id', id)
            .single();
            
        if (fetchError) {
            console.error('Error fetching member for deletion:', fetchError);
            // Proceed to delete anyway? Or return error? 
            // Better to try deleting record even if fetch fails, but let's be safe.
            return { success: false, message: fetchError.message };
        }
        
        // 2. Delete image from storage if it exists
        if (member?.image) {
            try {
                // Extract filename from URL
                // Format: .../storage/v1/object/public/team/filename.jpg
                const imageUrl = member.image;
                const filename = imageUrl.split('/').pop();
                
                if (filename) {
                    const { error: deleteStorageError } = await deleteImageFromTeamBucketServer(filename);
                    if (deleteStorageError) {
                        console.error('Error deleting image from storage:', deleteStorageError);
                        // We continue to delete the record even if image deletion fails
                        // to avoid "zombie" records that can't be deleted.
                    }
                }
            } catch (e) {
                console.error('Error processing image deletion:', e);
            }
        }
        
        // 3. Delete record from database
        const { error } = await supabase
            .from('teams')
            .delete()
            .eq('id', id);
            
        if (error) {
            console.error('Error deleting team member:', error);
            return { success: false, message: error.message };
        }
        
        revalidatePath('/admin/team');
        revalidatePath('/about-us');
        return { success: true };
        
    } catch (error) {
        console.error('Unexpected error:', error);
        return { success: false, message: 'An unexpected error occurred' };
    }
}
