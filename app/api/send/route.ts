import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, message, contact, company, service, budget, source } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Save to Postgres DB
        try {
            const { sql } = await import('@vercel/postgres');
            await sql`
                INSERT INTO leads (name, email, message, service, budget, company, source)
                VALUES (${name}, ${email}, ${message}, ${service}, ${budget}, ${company}, ${source})
            `;
        } catch (dbError) {
            console.error("Failed to save lead to Postgres DB:", dbError);
            // Continue sending email even if DB save fails
        }

        // Configure Nodemailer (Unified Gmail/SMTP)
        const smtpEmail = process.env.SMTP_USER || 'support@achtrex.com';
        const smtpPassword = process.env.SMTP_PASS || 'npec ngix uixj jyam';

        if (!smtpEmail || !smtpPassword) {
            throw new Error('Missing SMTP credentials');
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            }
        });

        // Email Html
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${contact || 'N/A'}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Service Interest:</strong> ${service || 'N/A'}</p>
                <p><strong>Budget Range:</strong> ${budget || 'N/A'}</p>
                <p><strong>Source:</strong> ${source || 'N/A'}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;">
                <h3>Message:</h3>
                <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
            </div>
        `;

        // Send Email
        await transporter.sendMail({
            from: `"Achtrex Website" <${smtpEmail}>`,
            to: "support@achtrex.com", // Send to support
            replyTo: email, // Allow reply to the lead
            subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
            html: htmlContent,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("API error during email sending:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}