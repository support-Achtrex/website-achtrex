import React from 'react';
import { sql } from '@vercel/postgres';
import { ArrowLeft, Plus, DollarSign, FileText, Download, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { addNote, recordPayment } from '@/app/actions/client-management';
import { Button } from '@/components/buttons';

export const dynamic = 'force-dynamic';

export default async function SubscriberDetailPage({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    if (isNaN(id)) notFound();

    let subscriber: any = null;
    let notes: any[] = [];
    let payments: any[] = [];

    try {
        const subRes = await sql`SELECT * FROM subscribers WHERE id = ${id}`;
        if (subRes.rows.length === 0) notFound();
        subscriber = subRes.rows[0];

        const notesRes = await sql`SELECT * FROM client_notes WHERE subscriber_id = ${id} ORDER BY created_at DESC`;
        notes = notesRes.rows;

        const payRes = await sql`SELECT * FROM client_payments WHERE subscriber_id = ${id} ORDER BY created_at DESC`;
        payments = payRes.rows;
    } catch (e) {
        console.error(e);
    }

    const totalPaid = payments
        .filter(p => p.status === 'paid')
        .reduce((sum, p) => sum + Number(p.amount), 0);

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/admin/subscribers" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft size={20} className="text-gray-500" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{subscriber.email}</h1>
                    <p className="text-sm text-gray-500">
                        Client since {new Date(subscriber.subscribed_at).toLocaleDateString()}
                    </p>
                </div>
                <div className="ml-auto bg-green-50 text-green-700 px-4 py-2 rounded-xl font-bold border border-green-100">
                    Total Revenue: ${totalPaid.toLocaleString()}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Notes Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <FileText size={18} className="text-blue-500" />
                            Project Notes
                        </h2>

                        <form action={async (formData) => {
                            'use server';
                            await addNote(id, formData.get('note') as string);
                        }} className="mb-6 flex gap-2">
                            <input
                                name="note"
                                required
                                className="flex-1 p-2 border border-gray-200 rounded-lg text-sm focus:border-blue-500 outline-none"
                                placeholder="Add a new note..."
                            />
                            <Button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                                <Plus size={20} />
                            </Button>
                        </form>

                        <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
                            {notes.length > 0 ? (
                                notes.map((note) => (
                                    <div key={note.id} className="bg-gray-50 p-4 rounded-xl text-sm relative group">
                                        <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
                                        <div className="mt-2 text-[10px] text-gray-400 flex items-center gap-1">
                                            <Clock size={10} />
                                            {new Date(note.created_at).toLocaleString()}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-400 text-sm py-4">No notes yet.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Payments & Invoices Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <DollarSign size={18} className="text-green-500" />
                            Payments & Invoices
                        </h2>

                        <form action={async (formData) => {
                            'use server';
                            await recordPayment(
                                id,
                                parseFloat(formData.get('amount') as string),
                                formData.get('description') as string
                            );
                        }} className="mb-6 bg-gray-50 p-4 rounded-xl space-y-3">
                            <div className="flex gap-2">
                                <input
                                    name="amount"
                                    type="number"
                                    step="0.01"
                                    required
                                    className="w-1/3 p-2 border border-gray-200 rounded-lg text-sm outline-none"
                                    placeholder="Amount ($)"
                                />
                                <input
                                    name="description"
                                    required
                                    className="flex-1 p-2 border border-gray-200 rounded-lg text-sm outline-none"
                                    placeholder="Description (e.g. Web Design Deposit)"
                                />
                            </div>
                            <Button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-sm font-bold shadow-md shadow-green-200">
                                Record Payment & Generate Invoice
                            </Button>
                        </form>

                        <div className="overflow-hidden rounded-xl border border-gray-100">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-500">
                                    <tr>
                                        <th className="p-3 font-medium">Date</th>
                                        <th className="p-3 font-medium">Desc</th>
                                        <th className="p-3 font-medium">Amount</th>
                                        <th className="p-3 font-medium text-right">Invoice</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {payments.length > 0 ? (
                                        payments.map((pay) => (
                                            <tr key={pay.id} className="hover:bg-gray-50">
                                                <td className="p-3 text-gray-500 font-mono text-xs">
                                                    {new Date(pay.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="p-3 text-gray-900 font-medium">
                                                    {pay.description}
                                                </td>
                                                <td className="p-3 text-green-700 font-bold">
                                                    ${Number(pay.amount).toLocaleString()}
                                                </td>
                                                <td className="p-3 text-right">
                                                    <span className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded cursor-pointer hover:bg-gray-200 transition-colors" title={`Invoice #${pay.invoice_number}`}>
                                                        #{pay.invoice_number}
                                                        <Download size={10} />
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="p-8 text-center text-gray-400">No payments recorded.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
