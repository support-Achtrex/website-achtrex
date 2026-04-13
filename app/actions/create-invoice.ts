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

    const currency = (formData.get('currency') as string) || 'USD';

    const client_name = formData.get('client_name') as string;
    const client_company = formData.get('client_company') as string;

    if (!invoiceNumber) {
        invoiceNumber = generateInvoiceNumber();
    }

    if (!subscriberId || !amount) {
        throw new Error('Missing required fields');
    }

    try {
        const createdAt = new Date().toISOString();
        await sql`
            INSERT INTO client_payments (subscriber_id, amount, description, status, invoice_number, created_at, currency)
            VALUES (${Number(subscriberId)}, ${amount}, ${description}, ${status}, ${invoiceNumber}, ${createdAt}, ${currency})
        `;

        if (client_name || client_company) {
            try {
                // Attempt to update subscriber details. 
                // We'll try updating 'company' column. If it fails (column doesn't exist), we catch and only update name.
                // NOTE: Ideally we run a migration, but here we try to be adaptive.
                try {
                    await sql`UPDATE subscribers SET name = ${client_name}, company = ${client_company} WHERE id = ${Number(subscriberId)}`;
                } catch (dbError: any) {
                    // If column 'company' does not exist, fallback to just name
                    if (dbError.message.includes('column "company" of relation "subscribers" does not exist')) {
                        console.warn("Company column missing, updating name only.");
                        await sql`UPDATE subscribers SET name = ${client_name} WHERE id = ${Number(subscriberId)}`;
                    } else {
                        throw dbError;
                    }
                }
            } catch (updateError) {
                console.error("Failed to update subscriber details:", updateError);
            }
        }

        // Fetch client details for email (reload to get updated info)
        // We select 'company' explicitly, hoping it exists now or returns null if query structure allows, 
        // but simple SELECT * or specific columns is safer. 
        // To be safe against missing column in SELECT, we just use the variables we have if we updated them, 
        // or re-fetch basic info.

        const clientRes = await sql`SELECT email, name FROM subscribers WHERE id = ${Number(subscriberId)}`;
        const client = clientRes.rows[0];

        if (client && client.email) {
            // Import dynamically to avoid build issues if server components strictness
            const { sendInvoiceEmail } = await import('../../lib/email');

            // Use provided values or DB values
            const finalName = client_name || client.name;
            const finalCompany = client_company || ''; // We might not be able to fetch company if column missing

            console.log(`Sending invoice email to ${client.email} for ${finalName}`);

            await sendInvoiceEmail({
                invoice_number: invoiceNumber,
                amount,
                description,
                status,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                client_email: client.email,
                // Combine Name and Company for the email if company exists
                client_name: finalCompany ? `${finalName} (${finalCompany})` : finalName,
                currency
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
