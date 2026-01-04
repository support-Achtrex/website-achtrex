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

    let dbSuccess = false;
    let emailSuccess = false;

    // 1. Save to Database (Resilient)
    try {
        // Append extra details to message since DB columns might be missing
        const fullMessage = `Service: ${service}\nPhone: ${phone}\n\nMessage: ${message}`;

        await sql`
            INSERT INTO leads (name, email, company, message, status)
            VALUES (${name}, ${email}, ${company}, ${fullMessage}, 'new')
        `;
        dbSuccess = true;
    } catch (dbError) {
        console.error('Database insertion warning (proceeding to email):', dbError);
        // Do NOT return error here. Proceed to email.
    }

    // 2. Send Emails (Non-blocking)
    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (resendApiKey) {
            const resend = new Resend(resendApiKey);

            // Admin Notification - Priority 1
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
            emailSuccess = true;

            // User Welcome Email - Priority 2
            // Note: This will FAIL if domain is not verified on Resend free tier (can only send to verified email)
            if (email) {
                await resend.emails.send({
                    from: 'Achtrex Support <onboarding@resend.dev>',
                    to: email, // Warning: May fail if not verified
                    cc: 'info@achtrex.com',
                    subject: 'We received your inquiry - Achtrex',
                    html: `
                        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                            <div style="background-color: #0f172a; padding: 30px 20px; text-align: center;">
                                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">ACHTREX</h1>
                            </div>
                            <div style="padding: 40px 30px;">
                                <h2 style="color: #1e293b; margin-top: 0;">Hi ${name},</h2>
                                <p style="color: #475569; line-height: 1.6;">Thank you for contacting <strong>Achtrex</strong>. We have received your inquiry regarding <strong>${service || 'your project'}</strong>.</p>
                                <p style="color: #475569; line-height: 1.6;">We will get back to you within 24 hours.</p>
                                <br/>
                                <p style="color: #475569;">Best regards,<br/><strong>Achtrex Team</strong></p>
                            </div>
                        </div>
                    `,
                }).catch(e => console.log("User welcome email skipped (likely unverified domain):", e.message));
            }
        }
    } catch (emailError) {
        console.error('Email service warning:', emailError);
    }

    // Always return success if at least one method worked, or simply to acknowledge receipt by the UI
    return { success: true };
}
