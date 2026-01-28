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
