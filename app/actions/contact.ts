'use server';

import { Resend } from 'resend';
import { sql } from '@/lib/db';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    const phone = formData.get('phone') as string || '';
    const service = formData.get('service') as string || '';
    const budget = formData.get('budget') as string || '';
    const source = formData.get('source') as string || '';

    if (!name || !email) {
        return { error: 'Name and Email are required.' };
    }

    // 1. Save to Database (Resilient)
    let dbErrorOccurred = false;
    let dbErrorMessage = '';
    try {
        const fullMessage = `Phone: ${phone}\n\nMessage: ${message}`;
        await sql`
            INSERT INTO leads (name, email, company, message, service, budget, source, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, ${service}, ${budget}, ${source}, 'new')
        `;

        // Auto-subscribe to newsletter (ignore if already exists)
        try {
            await sql`
                INSERT INTO subscribers (email)
                VALUES (${email})
                ON CONFLICT (email) DO NOTHING
            `;
        } catch (subError) {
            console.error('Subscriber insertion warning:', subError);
        }

    } catch (dbError: any) {
        console.error('Database insertion error:', dbError);
        dbErrorOccurred = true;
        dbErrorMessage = dbError.message || String(dbError);
    }

    // 2. Send Email via Resend
    try {
        const apiKey = (process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY || '').replace(/['"]/g, '');
        const resend = new Resend(apiKey);

        const adminHtml = `
            <div style="font-family: system-ui, sans-serif; color: #333;">
                <h2 style="color: #0ea5e9;">New Project Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Service:</strong> ${service || 'N/A'}</p>
                <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
                <p><strong>Source:</strong> ${source || 'N/A'}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
                <h3>Message:</h3>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
        `;

        await resend.emails.send({
            from: 'Achtrex Website <onboarding@resend.dev>',
            to: 'support@achtrex.com',
            subject: `New Lead: ${name} (${company || 'No Company'})`,
            html: adminHtml,
            replyTo: email
        });

        if (dbErrorOccurred) {
            return { success: true, warning: `Lead received, but failed to save to database: ${dbErrorMessage}` };
        }

        return { success: true, warning: '' };

    } catch (error: any) {
        console.error('Resend email failed:', error);
        if (dbErrorOccurred) {
            return { error: `Failed to send inquiry and failed to save to database. DB Error: ${dbErrorMessage}. Email Error: ${error.message}` };
        }
        return { success: true, warning: `Request received (saved to DB), but we encountered an issue sending the confirmation email. Error: ${error.message}` };
    }
}

export async function submitPartnerForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const type = formData.get('type') as string;
    const message = formData.get('message') as string;

    if (!name || !email) {
        return { error: 'Name and Email are required.' };
    }

    let dbErrorOccurred = false;
    let dbErrorMessage = '';
    try {
        const fullMessage = `Partnership Type: ${type}\n\nMessage: ${message}`;
        await sql`
            INSERT INTO leads (name, email, company, message, service, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, 'Partnership', 'new')
        `;
    } catch (dbError: any) {
        console.error('Database insertion error:', dbError);
        dbErrorOccurred = true;
        dbErrorMessage = dbError.message || String(dbError);
    }

    try {
        const apiKey = (process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY || '').replace(/['"]/g, '');
        const resend = new Resend(apiKey);

        const adminHtml = `
            <div style="font-family: system-ui, sans-serif; color: #333;">
                <h2 style="color: #10b981;">New Partner Application</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Partnership Type:</strong> ${type || 'N/A'}</p>
                <hr style="border: 1px solid #eee; margin: 20px 0;" />
                <h3>About Business:</h3>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
        `;

        await resend.emails.send({
            from: 'Achtrex Partner System <onboarding@resend.dev>',
            to: 'support@achtrex.com',
            subject: `New Partner Application from ${company}`,
            html: adminHtml,
            replyTo: email
        });

        if (dbErrorOccurred) {
            return { success: true, warning: `Application received, but failed to save to database: ${dbErrorMessage}` };
        }

        return { success: true, warning: '' };

    } catch (error: any) {
        console.error('Resend email failed:', error);
        if (dbErrorOccurred) {
            return { error: `Failed to send application and failed to save to database. DB Error: ${dbErrorMessage}. Email Error: ${error.message}` };
        }
        return { success: true, warning: `Application received (saved to DB), but we encountered an issue sending the confirmation email. Error: ${error.message}` };
    }
}
