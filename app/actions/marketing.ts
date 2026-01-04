'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

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

    // In a real app with many subscribers, you'd use a queue or batch sending.
    // For this MVP, we'll fetch all and loop (careful with limits).

    try {
        const { rows: subscribers } = await sql`SELECT email FROM subscribers`;

        if (subscribers.length === 0) {
            return { error: 'No subscribers to send to.' };
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        // Sending to the first 50 for safety/demo limits
        const recipients = subscribers.slice(0, 50).map(sub => sub.email);

        const { data, error } = await resend.emails.send({
            from: 'Achtrex Updates <onboarding@resend.dev>', // Update this when you have a verified domain
            to: recipients,
            subject: subject,
            html: body.replace(/\n/g, '<br>'),
        });

        if (error) throw error;

        return { success: true, count: recipients.length };

    } catch (error) {
        console.error('Campaign error:', error);
        return { error: 'Failed to send campaign.' };
    }
}
