import { sql } from '@vercel/postgres';
import { createInvoice } from '@/app/actions/create-invoice';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CreateInvoicePage() {
    let subscribers: any[] = [];
    try {
        const res = await sql`SELECT * FROM subscribers ORDER BY email ASC`;
        subscribers = res.rows;
    } catch (e) {
        console.error("Error fetching subscribers", e);
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="mb-8">
                <Link href="/admin/invoices" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 transition-colors">
                    <ArrowLeft size={16} />
                    <span>Back to Invoices</span>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Create New Invoice</h1>
                <p className="text-gray-500 text-sm">Generate manually an invoice for a client.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <form action={createInvoice} className="space-y-6">

                    {/* Subscriber Selection */}
                    <div>
                        <label htmlFor="subscriber_id" className="block text-sm font-medium text-gray-700 mb-2">Client (Subscriber)</label>
                        <select
                            name="subscriber_id"
                            id="subscriber_id"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                        >
                            <option value="">Select a client...</option>
                            {subscribers.map(sub => (
                                <option key={sub.id} value={sub.id}>{sub.email}</option>
                            ))}
                        </select>
                        <p className="mt-1 text-xs text-gray-400">Can't find the client? Make sure they are subscribed first.</p>
                    </div>

                    {/* Client Details Override */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="client_name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="client_name"
                                id="client_name"
                                placeholder="Client's Full Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="client_company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                            <input
                                type="text"
                                name="client_company"
                                id="client_company"
                                placeholder="Client's Company"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    {/* Invoice Number (Optional) */}
                    <div>
                        <label htmlFor="invoice_number" className="block text-sm font-medium text-gray-700 mb-2">Invoice Number</label>
                        <input
                            type="text"
                            name="invoice_number"
                            id="invoice_number"
                            placeholder="Auto-generated if empty (e.g. INV-20260127-XXXX)"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>

                    {/* Currency */}
                    <div>
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                        <select
                            name="currency"
                            id="currency"
                            defaultValue="USD"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                        >
                            <option value="USD">USD - US Dollar ($)</option>
                            <option value="EUR">EUR - Euro (€)</option>
                            <option value="GHS">GHS - Ghana Cedis (GH₵)</option>
                        </select>
                    </div>

                    {/* Amount */}
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                        <div className="relative">
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                required
                                min="0"
                                step="0.01"
                                placeholder="0.00"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <select
                            name="status"
                            id="status"
                            defaultValue="pending"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                        >
                            <option value="pending">Pending</option>
                            <option value="paid">Paid</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            rows={4}
                            required
                            placeholder="e.g. Website Development Services - Milestone 1"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-primary/20">
                            Create Invoice
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
