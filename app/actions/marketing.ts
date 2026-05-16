'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import nodemailer from 'nodemailer';

// Actions for the Public Site (Subscribe)
export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get('email') as string;

    if (!email) return { error: 'Email is required' };

    try {
        await sql`
            INSERT INTO subscribers (email)
            VALUES (${email})
            ON CONFLICT (email) DO NOTHING
        `;
        return { success: true, message: 'Subscribed successfully!' };
    } catch (error) {
        console.error('Subscription error:', error);
        return { error: 'Failed to subscribe. Please try again.' };
    }
}

// Actions for the Admin Panel (Manage & Send)
export async function deleteSubscriber(id: number) {
    await sql`DELETE FROM subscribers WHERE id = ${id}`;
    revalidatePath('/admin/marketing');
}

export async function sendCampaign(formData: FormData) {
    const subject = formData.get('subject') as string;
    const body = formData.get('body') as string;
    const sendToAll = formData.get('send_to_all') === 'on';
    const manualRecipientsStr = formData.get('manual_recipients') as string;

    const recipientsSet = new Set<string>();

    try {
        // 1. Fetch Subscribers if requested
        if (sendToAll) {
            const { rows: subscribers } = await sql`SELECT email FROM subscribers`;
            subscribers.forEach(sub => recipientsSet.add(sub.email));
        }

        // 2. Add Manual Recipients
        if (manualRecipientsStr) {
            const manualEmails = manualRecipientsStr.split(',').map(e => e.trim()).filter(e => e.includes('@'));
            manualEmails.forEach(email => recipientsSet.add(email));
        }

        if (recipientsSet.size === 0) {
            return { error: 'No valid recipients selected.' };
        }

        const recipients = Array.from(recipientsSet);

        // 3. Configure Nodemailer (Gmail)
        const smtpEmail = process.env.SMTP_USER || 'support@achtrex.com';
        const smtpPassword = process.env.SMTP_PASS || 'krsg kvyz zlzo bnax';

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            }
        });

        const isHtml = /<[a-z][\s\S]*>/i.test(body);

        const emailHtml = body.includes('<!DOCTYPE html>') ? body : `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: system-ui, -apple-system, sans-serif; color: #334155; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f1f5f9; padding: 40px 0; }
        .main { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-collapse: collapse; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .header { padding: 40px 20px; text-align: center; background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); }
        .content { padding: 40px 30px; text-align: left; line-height: 1.6; font-size: 16px; color: #334155; }
        .footer { padding: 30px; text-align: center; font-size: 12px; color: #64748b; background-color: #f8fafc; border-top: 1px solid #e2e8f0; }
        a { color: #3b82f6; text-decoration: none; font-weight: 500; }
        h1, h2, h3 { color: #0f172a; }
    </style>
</head>
<body>
    <center class="wrapper">
        <table class="main">
            <tr>
                <td class="header">
                    <img src="https://www.achtrex.com/achtrex-logo-email.png" alt="ACHTREX" width="140" style="margin: 0 auto 10px auto; display: block;">
                    <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.9); margin: 0; font-weight: 600;">Enterprise Data & AI Platforms</p>
                </td>
            </tr>
            <tr>
                <td class="content">
                    ${isHtml ? body : body.replace(/\n/g, '<br>')}
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <p style="margin: 0 0 10px 0;"><strong>Achtrex Studio</strong></p>
                    <p style="margin: 0 0 15px 0;">Accra, Ghana | New Jersey, USA</p>
                    <p style="margin: 0;">
                        <a href="https://achtrex.com">Website</a> | 
                        <a href="https://achtrex.com/blog">Blog</a>
                    </p>
                    <p style="margin: 15px 0 0 0; font-size: 11px; color: #94a3b8;">&copy; ${new Date().getFullYear()} Achtrex. All rights reserved.</p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
`;

        // 4. Send Email (using BCC for privacy)
        await transporter.sendMail({
            from: `"Achtrex Update" <${smtpEmail}>`,
            to: smtpEmail,
            bcc: recipients,
            subject: subject,
            html: emailHtml,
        });

        return { success: true, count: recipients.length };

    } catch (error) {
        console.error('Campaign error:', error);
        return { error: 'Failed to send campaign.' };
    }
}
