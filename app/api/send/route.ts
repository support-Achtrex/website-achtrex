import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("RESEND_API_KEY is missing in environment variables.");
        return NextResponse.json({ error: "Server misconfiguration: Missing email API key" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    try {
        const { name, email, message, contact, company, service, budget, source } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Save to Local DB
        try {
            // Dynamically import to avoid build time static analysis issues in some environments
            const { LeadsDB } = await import('@/lib/local-db');
            LeadsDB.add({
                name,
                email,
                message,
                service,
                budget,
                company,
                source
            });
        } catch (dbError) {
            console.error("Failed to save lead to local DB:", dbError);
            // Continue sending email even if DB save fails
        }

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "support@achtrex.com",
            subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${contact || 'N/A'}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Service Interest:</strong> ${service || 'N/A'}</p>
                <p><strong>Budget Range:</strong> ${budget || 'N/A'}</p>
                <p><strong>Source:</strong> ${source || 'N/A'}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (error) {
            console.error("Resend email error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error("API error during email sending:", error);
        const errorMessage = error && typeof error === 'object' && 'message' in error
            ? (error as any).message
            : "Failed to send contact email";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}