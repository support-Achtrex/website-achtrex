'use server';

import { Resend } from 'resend';
import { sql } from '@vercel/postgres';

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    const phone = formData.get('phone') as string || '';
    const service = formData.get('service') as string || '';

    if (!name || !email) {
        return { error: 'Name and Email are required.' };
    }

    try {
        // 1. Save to Database
        // Note: Using existing columns. If columns like phone don't exist, we append to message for context.
        const fullMessage = `Phone: ${phone}\nService: ${service}\n\nMessage: ${message}`;

        await sql`
            INSERT INTO leads (name, email, company, message, service, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, ${service}, 'new')
        `;

        const resend = new Resend(process.env.RESEND_API_KEY);

        // 2. Send Notification to Admin (Support & Info)
        await resend.emails.send({
            from: 'Achtrex Website <onboarding@resend.dev>',
            to: ['support@achtrex.com', 'info@achtrex.com'],
            subject: `New Lead: ${name} (${company || 'No Company'})`,
            html: `
                <div style="font-family: system-ui, sans-serif;">
                    <h2 style="color: #0ea5e9;">New Project Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Service:</strong> ${service || 'N/A'}</p>
                    <hr style="border-color: #eee;" />
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        // 3. Send Professional Welcome Email to User
        if (email) {
            await resend.emails.send({
                from: 'Achtrex Support <onboarding@resend.dev>',
                to: email,
                cc: 'info@achtrex.com',
                subject: 'We received your inquiry - Achtrex',
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                        <!-- Header / Banner -->
                        <div style="background-color: #0f172a; padding: 30px 20px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">ACHTREX</h1>
                            <p style="color: #0ea5e9; margin: 5px 0 0; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;">Digital Transformation Partners</p>
                        </div>
                        
                        <!-- Content -->
                        <div style="padding: 40px 30px;">
                            <h2 style="color: #1e293b; margin-top: 0;">Hi ${name},</h2>
                            <p style="color: #475569; line-height: 1.6;">Thank you for contacting <strong>Achtrex</strong>. We have successfully received your inquiry regarding <strong>${service || 'your project'}</strong>.</p>
                            
                            <p style="color: #475569; line-height: 1.6;">Our team involves top 1% talent dedicated to turning complex challenges into revenue-generating digital assets. We are reviewing your details and will get back to you shortly (usually within 24 hours).</p>
                            
                            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 15px; margin: 25px 0;">
                                <p style="margin: 0; color: #334155; font-size: 14px;"><strong>Your Submission:</strong><br/>
                                <span style="color: #64748b;">${message}</span></p>
                            </div>

                            <p style="color: #475569; line-height: 1.6;">In the meantime, feel free to browse our portfolio or reply to this email if you have any immediate questions.</p>
                            
                            <p style="color: #475569; margin-top: 30px;">Best regards,<br/>
                            <strong>Achtrex Support Team</strong></p>
                        </div>

                        <!-- Footer -->
                        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
                            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Achtrex. All rights reserved.</p>
                            <p style="margin: 5px 0;">Accra, Ghana | Global Services</p>
                            <a href="https://achtrex.com" style="color: #0ea5e9; text-decoration: none;">www.achtrex.com</a>
                        </div>
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
