import { updateTeamImagesFromStorage } from "@/utilities/supabase/update-team-images";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await updateTeamImagesFromStorage();
        
        return NextResponse.json({
            success: result.success,
            message: result.success 
                ? `Updated ${result.updated} team members. ${result.unmatched} members had no matching images.`
                : result.message,
            details: result.details
        });
    } catch (error) {
        console.error('Error updating team images:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error', error: String(error) },
            { status: 500 }
        );
    }
}
