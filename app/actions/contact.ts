'use server';

import { Resend } from 'resend';
import { sql } from '@vercel/postgres';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'Missing required fields' };
    }

    try {
        // 1. Save to Database
        await sql`
            INSERT INTO leads (name, email, company, message, status)
            VALUES (${name}, ${email}, ${company}, ${message}, 'new')
        `;

        const resend = new Resend(process.env.RESEND_API_KEY);

        // 2. Send Notification to Admin
        await resend.emails.send({
            from: 'Achtrex Website <onboarding@resend.dev>',
            to: 'support@achtrex.com',
            subject: `New Project Inquiry: ${name} from ${company}`,
            html: `
                <h2>New Project Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <hr/>
                <p>${message}</p>
            `,
        });

        // 3. Send Welcome Email to User
        if (email) {
            await resend.emails.send({
                from: 'Achtrex <onboarding@resend.dev>',
                to: email,
                subject: 'Let\'s Build Something Great Together - Achtrex',
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h1 style="color: #0ea5e9;">Achtrex</h1>
                        <p>Hi ${name},</p>
                        <p>Thank you for reaching out to us! We've received your message regarding your project at <strong>${company}</strong>.</p>
                        <p>Our team is reviewing your requirements and we will get back to you within 24 hours to schedule a discovery call.</p>
                        <p>At Achtrex, we go the extra mile to turn your vision into a digital reality.</p>
                        <br/>
                        <p>Best regards,</p>
                        <p><strong>The Achtrex Team</strong></p>
                        <a href="https://achtrex.com" style="color: #0ea5e9;">www.achtrex.com</a>
                    </div>
                `,
            });
        }

        return { success: true };

    } catch (error) {
        console.error('Contact form error:', error);
        return { error: 'Failed to submit form. Please try again.' };
    }
}
