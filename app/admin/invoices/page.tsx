import { sql } from '@vercel/postgres';
import Link from 'next/link';
import { Eye, Plus } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function InvoicesIndexPage() {
    let payments: any[] = [];
    try {
        const res = await sql`
            SELECT cp.*, s.email as client_email 
            FROM client_payments cp
            LEFT JOIN subscribers s ON cp.subscriber_id = s.id
            ORDER BY cp.created_at DESC
            LIMIT 50
        `;
        payments = res.rows;
    } catch (e) {
        console.error("Error fetching payments", e);
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
                    <p className="text-gray-500 text-sm">Manage and view all client invoices.</p>
                </div>
                <Link href="/admin/invoices/create" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <Plus size={16} />
                    <span>Create Invoice</span>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Invoice #</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Client</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {payments.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                    No invoices found.
                                </td>
                            </tr>
                        ) : (
                            payments.map((payment) => (
                                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {payment.invoice_number}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {payment.client_email || 'Unknown'}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {new Date(payment.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {Number(payment.amount).toLocaleString('en-US', { style: 'currency', currency: payment.currency || 'USD' })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                            ${payment.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                                        `}>
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link
                                            href={`/admin/invoices/${payment.invoice_number || payment.id}`}
                                            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-colors"
                                            title="View Invoice"
                                        >
                                            <Eye size={16} />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
