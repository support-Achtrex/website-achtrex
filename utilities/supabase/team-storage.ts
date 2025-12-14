import { createClient } from "@/utilities/supabase/client";
import { createClient as createServerClient } from "@/utilities/supabase/server";

export const fetchAllImagesFromTeamBucket = async () => {
    const supabase = createClient();
    const { data: images } = await supabase.storage
        .from('team')
        .list();
    
    const imagesWithUrls = images?.map(image => ({
        ...image,
        publicUrl: getPublicURL(image.name).data.publicUrl
    }));
    
    return imagesWithUrls;
}

export const fetchAllImagesFromTeamBucketServer = async () => {
    const supabase = await createServerClient();
    const { data: images } = await supabase.storage
        .from('team')
        .list();
    
    // Use Promise.all to await all publicUrl calls
    const imagesWithUrls = await Promise.all(
        images?.map(async (image) => ({
            ...image,
            publicUrl: (await getPublicURLServer(image.name)).data.publicUrl
        })) || []
    );
    
    return imagesWithUrls;
}

export const getPublicURL = (path: string) => {
    const supabase = createClient();
    return supabase.storage.from('team').getPublicUrl(path);
}

export const getPublicURLServer = async (path: string) => {
    const supabase = await createServerClient();
    return supabase.storage.from('team').getPublicUrl(path);
}

export const uploadImageToTeamBucket = async (file: File) => {
    const supabase = createClient();
    const { data, error } = await supabase.storage.from('team').upload(file.name, file);
    return { data, error };
}

export const uploadImageToTeamBucketServer = async (file: File) => {
    const supabase = await createServerClient();
    const { data, error } = await supabase.storage.from('team').upload(file.name, file);
    return { data, error };
}

export const deleteImageFromTeamBucket = async (path: string) => {
    const supabase = createClient();
    const { data, error } = await supabase.storage.from('team').remove([path]);
    return { data, error };
}

export const deleteImageFromTeamBucketServer = async (path: string) => {
    const supabase = await createServerClient();
    const { data, error } = await supabase.storage.from('team').remove([path]);
    return { data, error };
}

export const updateImageInTeamBucket = async (path: string, file: File) => {
    const supabase = createClient();
    const { data, error } = await supabase.storage.from('team').update(path, file);
    return { data, error };
}

    