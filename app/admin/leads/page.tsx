import React from 'react';
import { Mail, Clock, CheckCircle, XCircle, Search, UserPlus } from 'lucide-react';
import { sql } from '@vercel/postgres';
import { subscribeToNewsletter } from '@/app/actions/marketing';

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
    let leads: any[] = [];
    try {
        const { rows } = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
        leads = rows;
    } catch (error) {
        console.error('Failed to fetch leads:', error);
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">Leads Inbox</h1>
                    <p className="text-gray-500 text-sm">Manage inquiries and potential client messages.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search leads..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Budget</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {leads.length > 0 ? (
                                leads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="p-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <Clock size={14} />
                                                <span className="text-sm font-medium">
                                                    {new Date(lead.created_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-900">{lead.name}</span>
                                                <span className="text-xs text-gray-400">{lead.email}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 inline-block">
                                                {lead.service || 'General'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-gray-600 font-medium">
                                            {lead.budget || '-'}
                                        </td>
                                        <td className="p-4">
                                            <StatusBadge status={lead.status} />
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <form action={async (formData) => {
                                                    'use server';
                                                    await subscribeToNewsletter(formData);
                                                }}>
                                                    <input type="hidden" name="email" value={lead.email} />
                                                    <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Add as Client/Subscriber">
                                                        <UserPlus size={16} />
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="p-12 text-center text-gray-400">
                                        <div className="flex flex-col items-center gap-3">
                                            <Mail size={48} className="text-gray-200" />
                                            <p>No leads found yet.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    switch (status) {
        case 'new':
            return (
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    New
                </span>
            );
        case 'contacted':
            return (
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold w-fit">
                    <CheckCircle size={12} />
                    Contacted
                </span>
            );
        default:
            return (
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold w-fit">
                    {status}
                </span>
            );
    }
}
