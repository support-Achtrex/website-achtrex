import { createClient } from "@/utilities/supabase/server";
import { fetchAllImagesFromTeamBucketServer } from "./team-storage";

/**
 * Matches filename to team member name
 * Handles cases like: "achim.jpg" -> "Achim", "jnr-achim.jpg" -> contains "achim"
 */
function matchImageToMember(imageName: string, memberName: string): boolean {
    const cleanImageName = imageName.toLowerCase()
        .replace('.jpg', '')
        .replace('.jpeg', '')
        .replace('.png', '')
        .replace('-', ' ');
    
    const cleanMemberName = memberName.toLowerCase();
    
    // Check if member name contains the image name or vice versa
    return cleanMemberName.includes(cleanImageName) || cleanImageName.includes(cleanMemberName);
}

/**
 * Updates all team members with their corresponding Supabase Storage image URLs
 */
export async function updateTeamImagesFromStorage() {
    const supabase = await createClient();
    
    // Fetch all images from storage
    const images = await fetchAllImagesFromTeamBucketServer();
    
    if (!images || images.length === 0) {
        console.log('No images found in storage');
        return { success: false, message: 'No images found in storage' };
    }
    
    // Fetch all team members
    const { data: teamMembers, error: fetchError } = await supabase
        .from('teams')
        .select('*');
    
    if (fetchError) {
        console.error('Error fetching team members:', fetchError);
        return { success: false, message: fetchError.message };
    }
    
    const updates = [];
    const unmatched = [];
    
    // Match images to team members and update
    for (const member of teamMembers || []) {
        const matchedImage = images.find((img: { name: string; publicUrl: string }) => matchImageToMember(img.name, member.name));
        
        if (matchedImage) {
            const { error: updateError } = await supabase
                .from('teams')
                .update({ image: matchedImage.publicUrl })
                .eq('id', member.id);
            
            if (updateError) {
                console.error(`Error updating ${member.name}:`, updateError);
            } else {
                updates.push({ name: member.name, url: matchedImage.publicUrl });
                console.log(`✓ Updated ${member.name} with ${matchedImage.name}`);
            }
        } else {
            unmatched.push(member.name);
            console.warn(`✗ No matching image found for ${member.name}`);
        }
    }
    
    return {
        success: true,
        updated: updates.length,
        unmatched: unmatched.length,
        details: { updates, unmatched }
    };
}
