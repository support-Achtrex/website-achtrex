import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
// Lazy import of generateInvoicePDF to avoid build issues if it imports server modules eagerly, 
// though we fixed that in lib/email.tsx already.
import { generateInvoicePDF } from '@/lib/email';

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const paymentId = id;

        if (!paymentId) {
            return new NextResponse('Missing Invoice ID', { status: 400 });
        }

        // Fetch Invoice and Client Data
        // We replicate the query from invoice-management actions
        const res = await sql`
        SELECT cp.*, s.email as client_email
        FROM client_payments cp
        JOIN subscribers s ON cp.subscriber_id = s.id
        WHERE cp.id = ${Number(paymentId)}
    `;

        if (res.rows.length === 0) {
            return new NextResponse('Invoice not found', { status: 404 });
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

        // Format Data for Generator
        const finalClientName = clientCompany
            ? `${clientName} (${clientCompany})`
            : clientName;

        const invoiceData = {
            invoice_number: invoice.invoice_number,
            amount: invoice.amount,
            description: invoice.description,
            status: invoice.status,
            date: new Date(invoice.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            client_name: finalClientName,
            client_email: invoice.client_email,
            currency: invoice.currency || 'USD'
        };

        // Generate PDF
        const pdfBuffer = await generateInvoicePDF(invoiceData);

        // Return as PDF stream
        return new NextResponse(new Uint8Array(pdfBuffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="Invoice-${invoice.invoice_number}.pdf"`,
            },
        });

    } catch (error) {
        console.error('PDF Generation Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
