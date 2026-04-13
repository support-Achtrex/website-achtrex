import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Download } from 'lucide-react';
import InvoiceView from './InvoiceView';

export const dynamic = 'force-dynamic';

export default async function InvoicePage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;

    // This 'id' refers to the payment ID in client_payments
    // If invoice numbers are unique UUIDs, that's better, but let's assume filtering by payment ID for simplicity? 
    // Wait, the user sees "Invoice #INV-..." but URL should probably be the payment ID or invoice number.
    // Let's assume params.id is the invoice_number (string) or payment.id.
    // Let's use Invoice Number search first, as it's cleaner in URL.

    const invoiceNum = decodeURIComponent(params.id);
    let payment: any = null;
    let client: any = null;

    try {
        // Try finding by invoice number
        let res = await sql`SELECT * FROM client_payments WHERE invoice_number = ${invoiceNum}`;

        // Fallback: If not found, maybe it's a numeric ID?
        if (res.rows.length === 0 && !isNaN(parseInt(invoiceNum))) {
            res = await sql`SELECT * FROM client_payments WHERE id = ${parseInt(invoiceNum)}`;
        }

        if (res.rows.length === 0) return notFound();
        payment = res.rows[0];

        // Fetch Client
        const clientRes = await sql`SELECT * FROM subscribers WHERE id = ${payment.subscriber_id}`;
        if (clientRes.rows.length > 0) client = clientRes.rows[0];

    } catch (e) {
        console.error(e);
        return notFound();
    }

    return (
        <InvoiceView
            payment={JSON.parse(JSON.stringify(payment))}
            client={client ? JSON.parse(JSON.stringify(client)) : null}
        />
    );
}
