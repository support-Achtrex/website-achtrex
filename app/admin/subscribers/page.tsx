import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { Mail, Clock, MoreVertical, DollarSign, FileText, UserPlus } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions/marketing';
import { Button } from '@/components/buttons';

export const dynamic = 'force-dynamic';

export default async function SubscribersPage() {
    let subscribers: any[] = [];
    try {
        const { rows } = await sql`SELECT * FROM subscribers ORDER BY subscribed_at DESC`;
        subscribers = rows;
    } catch (error) {
        console.error('Error fetching subscribers:', error);
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Client & Subscriber Management</h1>
                    <p className="text-gray-500 text-sm">Track client updates, payments, and notes.</p>
                </div>
            </div>

            {/* Add New Subscriber Form */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <UserPlus size={16} className="text-primary" />
                    Manually Add Subscriber / Client
                </h3>
                <form action={async (formData) => {
                    'use server';
                    await subscribeToNewsletter(formData);
                }} className="flex gap-2">
                    <input
                        name="email"
                        type="email"
                        required
                        className="flex-1 p-2 border border-gray-200 rounded-lg text-sm focus:border-primary outline-none"
                        placeholder="client@example.com"
                    />
                    <Button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90">
                        Add Client
                    </Button>
                </form>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Client / Email</th>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Joined</th>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {subscribers.length > 0 ? (
                            subscribers.map((sub) => (
                                <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                                                {sub.email.substring(0, 2).toUpperCase()}
                                            </div>
                                            <span className="text-sm font-medium text-gray-900">{sub.email}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-500 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} />
                                            {new Date(sub.subscribed_at).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md font-medium border border-green-100">
                                            Active
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/subscribers/${sub.id}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Manage Client">
                                                <FileText size={16} />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="p-12 text-center text-gray-400">
                                    No subscribers found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
