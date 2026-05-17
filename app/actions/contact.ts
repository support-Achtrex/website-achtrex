'use server';

import { Resend } from 'resend';

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

    try {
        // Initialize Resend inside the try block to catch missing API key errors
        const resend = new Resend(process.env.RESEND_API_KEY);

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

        return { success: true, warning: '' };

    } catch (error: any) {
        console.error('Resend email failed:', error);
        return { error: `Failed to send inquiry. Please email us directly at support@achtrex.com. Error: ${error.message}` };
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

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

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

        return { success: true, warning: '' };

    } catch (error: any) {
        console.error('Resend email failed:', error);
        return { error: `Failed to send application. Please email us directly at support@achtrex.com. Error: ${error.message}` };
    }
}
