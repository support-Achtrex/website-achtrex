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
        const smtpPassword = process.env.SMTP_PASS || 'npec ngix uixj jyam';

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpEmail,
                pass: smtpPassword
            }
        });

        const isHtml = /<[a-z][\s\S]*>/i.test(body);

        // 4. Send Email (using BCC for privacy)
        await transporter.sendMail({
            from: `"Achtrex Update" <${smtpEmail}>`,
            to: smtpEmail,
            bcc: recipients,
            subject: subject,
            html: isHtml ? body : body.replace(/\n/g, '<br>'),
        });

        return { success: true, count: recipients.length };

    } catch (error) {
        console.error('Campaign error:', error);
        return { error: 'Failed to send campaign.' };
    }
}
