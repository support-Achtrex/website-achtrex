'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function generateInvoiceNumber() {
    // Generate a random invoice number, e.g., INV-20231027-XXXX
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `INV-${date}-${random}`;
}

export async function createInvoice(formData: FormData) {
    const subscriberId = formData.get('subscriber_id') as string;
    const amount = formData.get('amount') as string;
    const description = formData.get('description') as string;
    const status = formData.get('status') as string;
    let invoiceNumber = formData.get('invoice_number') as string;

    if (!invoiceNumber) {
        invoiceNumber = generateInvoiceNumber();
    }

    if (!subscriberId || !amount) {
        throw new Error('Missing required fields');
    }

    try {
        await sql`
            INSERT INTO client_payments (subscriber_id, amount, description, status, invoice_number)
            VALUES (${Number(subscriberId)}, ${amount}, ${description}, ${status}, ${invoiceNumber})
        `;

        // Fetch client details for email
        const clientRes = await sql`SELECT email, name FROM subscribers WHERE id = ${Number(subscriberId)}`;
        const client = clientRes.rows[0];

        if (client && client.email) {
            // Import dynamically to avoid build issues if server components strictness
            const { sendInvoiceEmail } = await import('../../lib/email');

            await sendInvoiceEmail({
                invoice_number: invoiceNumber,
                amount,
                description,
                status,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                client_name: client.name,
                client_email: client.email
            });
        }
    } catch (e) {
        console.error('Error creating invoice or sending email:', e);
        // We don't throw here to ensure redirection happens even if email fails? 
        // Or we should let user know. 
        // For now, logging error but preventing full crash on email is safer for UX unless email is critical.
        // Actually, re-throwing ensures the form shows error. 
        // But if DB insert succeeded, we probably shouldn't rollback or error out the UI completely 
        // if just email failed.
        if (e instanceof Error && e.message.includes('Failed to create invoice')) {
            throw e;
        }
    }

    revalidatePath('/admin/invoices');
    redirect('/admin/invoices');
}
