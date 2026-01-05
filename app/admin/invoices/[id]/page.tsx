import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Download } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function InvoicePage({ params }: { params: { id: string } }) {
    // This 'id' refers to the payment ID in client_payments
    // If invoice numbers are unique UUIDs, that's better, but let's assume filtering by payment ID for simplicity? 
    // Wait, the user sees "Invoice #INV-..." but URL should probably be the payment ID or invoice number.
    // Let's assume params.id is the invoice_number (string) or payment.id.
    // Let's use Invoice Number search first, as it's cleaner in URL.

    const invoiceNum = params.id;
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
        <div className="min-h-screen bg-gray-50 p-8 flex justify-center print:bg-white print:p-0">
            <div className="bg-white w-full max-w-[800px] shadow-lg rounded-xl p-12 print:shadow-none print:w-full">

                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div className="flex items-center gap-3">
                        {/* We can use absolute path or base64 for reliable printing of logo */}
                        {/* For now, text fallback is fail-safe */}
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">A</div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">ACHTREX</h1>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Digital Product Studio</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <h2 className="text-4xl font-light text-gray-300 mb-2">INVOICE</h2>
                        <p className="text-gray-600 font-mono">#{payment.invoice_number}</p>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Billed To</h3>
                        <p className="text-gray-900 font-bold text-lg">{client?.email || 'Unknown Client'}</p>
                        <p className="text-gray-500 text-sm mt-1">Valued Customer</p>
                    </div>
                    <div className="text-right">
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Date Issued</h3>
                            <p className="text-gray-900 font-medium">{new Date(payment.created_at).toLocaleDateString()}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</h3>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-bold uppercase ${payment.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                {payment.status}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Line Items */}
                <div className="mb-12">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b-2 border-gray-100">
                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-wider w-2/3">Description</th>
                                <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            <tr>
                                <td className="py-6 text-gray-900 font-medium align-top">
                                    {payment.description}
                                    <p className="text-gray-400 text-sm font-normal mt-1">Professional Services</p>
                                </td>
                                <td className="py-6 text-gray-900 font-bold text-lg align-top text-right">
                                    ${Number(payment.amount).toLocaleString()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Total */}
                <div className="flex justify-end mb-20 border-t border-gray-100 pt-8">
                    <div className="w-1/2">
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-500 font-medium">Subtotal</span>
                            <span className="text-gray-900 font-medium">${Number(payment.amount).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100 mb-2">
                            <span className="text-gray-500 font-medium">Tax (0%)</span>
                            <span className="text-gray-900 font-medium">$0.00</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-900 font-bold text-xl">Total</span>
                            <span className="text-blue-600 font-bold text-xl">${Number(payment.amount).toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
                    <p className="mb-2">Thank you for your business. We appreciate the opportunity to work with you.</p>
                    <p>Achtrex Studio Inc | Accra, Ghana & NJ, USA | support@achtrex.com</p>
                </div>

                {/* Print Button (Hidden when printing) */}
                <div className="fixed bottom-8 right-8 print:hidden">
                    <a href="javascript:window.print()" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full p-4 flex items-center justify-center transition-transform hover:scale-105">
                        <Download size={24} />
                    </a>
                </div>

            </div>
        </div>
    );
}
