import { createClient } from "@/utilities/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = await createClient();
        
        // Try to sign a URL for achim.jpg (known to exist)
        const { data, error } = await supabase.storage
            .from('team')
            .createSignedUrl('achim.jpg', 60);
            
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        
        return NextResponse.json({
            signedUrl: data.signedUrl,
            message: "If you can open this URL, the file exists but public access is disabled."
        });
    } catch (error) {
        return NextResponse.json(
            { error: String(error) },
            { status: 500 }
        );
    }
}
