'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

// Notes
export async function addNote(subscriberId: number, content: string) {
    if (!content) return { error: 'Note content is required' };
    try {
        await sql`
            INSERT INTO client_notes (subscriber_id, content)
            VALUES (${subscriberId}, ${content})
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        console.error('Add note error:', error);
        return { error: 'Failed to add note' };
    }
}

export async function deleteNote(subscriberId: number, noteId: number) {
    try {
        await sql`DELETE FROM client_notes WHERE id = ${noteId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        console.error('Delete note error:', error);
        return { error: 'Failed to delete note' };
    }
}

// Payments
export async function recordPayment(subscriberId: number, amount: number, description: string, status: string = 'paid') {
    if (!amount) return { error: 'Amount is required' };
    try {
        const invoiceNum = `INV-${Date.now().toString().slice(-6)}`;
        await sql`
            INSERT INTO client_payments (subscriber_id, amount, description, status, invoice_number)
            VALUES (${subscriberId}, ${amount}, ${description}, ${status}, ${invoiceNum})
        `;

        // Send Email
        const clientRes = await sql`SELECT email, name FROM subscribers WHERE id = ${subscriberId}`;
        const client = clientRes.rows[0];

        if (client && client.email) {
            const { sendInvoiceEmail } = await import('../../lib/email');
            await sendInvoiceEmail({
                invoice_number: invoiceNum,
                amount,
                description,
                status,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                client_name: client.name,
                client_email: client.email
            });
        }

        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        console.error('Payment error:', error);
        return { error: 'Failed to record payment' };
    }
}

export async function deletePayment(paymentId: number, subscriberId: number) {
    try {
        await sql`DELETE FROM client_payments WHERE id = ${paymentId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to delete payment' };
    }
}

// Project Progress
export async function addMilestone(subscriberId: number, milestone: string) {
    if (!milestone) return { error: 'Milestone is required' };
    try {
        await sql`
            INSERT INTO project_progress (subscriber_id, milestone)
            VALUES (${subscriberId}, ${milestone})
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        console.error('Milestone error:', error);
        return { error: 'Failed to add milestone' };
    }
}

export async function updateMilestoneStatus(subscriberId: number, milestoneId: number, status: string) {
    try {
        await sql`
            UPDATE project_progress
            SET status = ${status}
            WHERE id = ${milestoneId} AND subscriber_id = ${subscriberId}
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to update milestone' };
    }
}

export async function deleteMilestone(subscriberId: number, milestoneId: number) {
    try {
        await sql`DELETE FROM project_progress WHERE id = ${milestoneId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to delete milestone' };
    }
}

// Client Files
export async function addFile(subscriberId: number, fileName: string, fileUrl: string, fileSize?: number) {
    if (!fileName || !fileUrl) return { error: 'Name and URL are required' };
    try {
        await sql`
            INSERT INTO client_files (subscriber_id, file_name, file_url, file_size)
            VALUES (${subscriberId}, ${fileName}, ${fileUrl}, ${fileSize || 0})
        `;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        console.error('File add error:', error);
        return { error: 'Failed to add file' };
    }
}

export async function deleteFile(subscriberId: number, fileId: number) {
    try {
        await sql`DELETE FROM client_files WHERE id = ${fileId}`;
        revalidatePath(`/admin/subscribers/${subscriberId}`);
        return { success: true };
    } catch (error) {
        return { error: 'Failed to delete file' };
    }
}

export async function sendWeeklyReport(subscriberId: number) {
    try {
        const subRes = await sql`SELECT * FROM subscribers WHERE id = ${subscriberId}`;
        const subscriber = subRes.rows[0];

        const notesRes = await sql`SELECT * FROM client_notes WHERE subscriber_id = ${subscriberId} ORDER BY created_at DESC`;
        const notes = notesRes.rows;

        const progressRes = await sql`SELECT * FROM project_progress WHERE subscriber_id = ${subscriberId} ORDER BY created_at ASC`;
        const milestones = progressRes.rows;

        const { sendWeeklyReportEmail } = await import('../../lib/email');
        await sendWeeklyReportEmail(subscriber, notes, milestones);

        return { success: true };
    } catch (error) {
        console.error('Report send error:', error);
        return { error: 'Failed to send report' };
    }
}
