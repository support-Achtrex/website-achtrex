'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function updateInvoiceStatus(id: number, newStatus: string) {
    try {
        await sql`
            UPDATE client_payments 
            SET status = ${newStatus}
            WHERE id = ${id}
        `;
        revalidatePath('/admin/invoices');
        revalidatePath(`/admin/invoices/${id}`);
        return { success: true };
    } catch (error) {
        console.error('Failed to update status:', error);
        return { error: 'Failed to update status' };
    }
}

import { sendInvoiceEmail } from '@/lib/email';

export async function resendInvoiceEmail(id: number) {
    try {
        // Fetch Invoice and Client
        const res = await sql`
            SELECT cp.*, s.email as client_email, s.name as client_name, s.company as client_company
            FROM client_payments cp
            JOIN subscribers s ON cp.subscriber_id = s.id
            WHERE cp.id = ${id}
        `;

        if (res.rows.length === 0) {
            return { error: 'Invoice not found' };
        }

        const invoice = res.rows[0];

        const clientName = invoice.client_company
            ? `${invoice.client_name} (${invoice.client_company})`
            : invoice.client_name;

        // Try/catch the email sending specifically if we make it throw later
        // But for now, just calling it.
        await sendInvoiceEmail({
            invoice_number: invoice.invoice_number,
            amount: invoice.amount,
            description: invoice.description,
            status: invoice.status,
            date: new Date(invoice.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            client_name: clientName,
            client_email: invoice.client_email
        });

        return { success: true, message: `Email sent to ${invoice.client_email}` };

    } catch (error: any) {
        console.error('Failed to resend email:', error);
        return { error: `Failed to send email: ${error.message || error}` };
    }
}
