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
            SELECT cp.*, s.email as client_email
            FROM client_payments cp
            JOIN subscribers s ON cp.subscriber_id = s.id
            WHERE cp.id = ${id}
        `;

        if (res.rows.length === 0) {
            return { error: 'Invoice not found' };
        }

        const invoice = res.rows[0];

        // Attempt to get name and company safely
        let clientName = invoice.name || 'Valued Client';
        let clientCompany = '';

        try {
            const extraInfo = await sql`SELECT name, company FROM subscribers WHERE id = ${invoice.subscriber_id}`;
            if (extraInfo.rows.length > 0) {
                clientName = extraInfo.rows[0].name || clientName;
                clientCompany = extraInfo.rows[0].company || '';
            }
        } catch (e) {
            console.warn("Could not fetch extra subscriber details (likely missing columns):", e);
        }

        const finalClientName = clientCompany
            ? `${clientName} (${clientCompany})`
            : clientName;

        // Try/catch the email sending specifically if we make it throw later
        // But for now, just calling it.
        await sendInvoiceEmail({
            invoice_number: invoice.invoice_number,
            amount: invoice.amount,
            description: invoice.description,
            status: invoice.status,
            date: new Date(invoice.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            client_name: finalClientName,
            client_email: invoice.client_email,
            currency: invoice.currency || 'USD'
        });

        return { success: true, message: `Email sent to ${invoice.client_email}` };

    } catch (error: any) {
        console.error('Failed to resend email:', error);
        return { error: `Failed to send email: ${error.message || error}` };
    }
}
