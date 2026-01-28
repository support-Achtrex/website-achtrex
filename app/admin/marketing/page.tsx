import React from 'react';
import { sql } from '@vercel/postgres';
import { Trash2, Users } from 'lucide-react';
import { deleteSubscriber } from '@/app/actions/marketing';
import { MarketingForm } from '@/components/admin/marketing/MarketingForm';

export const dynamic = 'force-dynamic';

export default async function MarketingPage() {
    let subscribers: any[] = [];
    try {
        const { rows } = await sql`SELECT * FROM subscribers ORDER BY subscribed_at DESC`;
        subscribers = rows;
    } catch (error) {
        console.error('Error fetching subscribers:', error);
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Marketing Center</h1>
                    <p className="text-gray-500 text-sm">Design campaigns and manage your audience.</p>
                </div>
                <div className="bg-white border border-gray-100 shadow-sm text-gray-700 px-5 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    <span>{subscribers.length} Global Subscribers</span>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Send Campaign Column */}
                <div className="xl:col-span-3">
                    <MarketingForm subscriberCount={subscribers.length} />
                </div>

                {/* Subscribers List Column */}
                <div className="xl:col-span-1 border-l border-gray-100 pl-4">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[800px]">
                        <div className="p-4 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wider">Subscribers</h3>
                            <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-bold">{subscribers.length}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
                            {subscribers.length > 0 ? (
                                subscribers.map((sub) => (
                                    <div key={sub.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all group border border-transparent hover:border-gray-50">
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-gray-900 truncate">{sub.email}</p>
                                            <p className="text-[9px] text-gray-400 font-medium">
                                                {new Date(sub.subscribed_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <form action={deleteSubscriber.bind(null, sub.id)}>
                                            <button className="text-gray-300 hover:text-red-500 p-2 rounded-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-sm">
                                                <Trash2 size={12} />
                                            </button>
                                        </form>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-20 text-gray-400 text-xs">
                                    Your list is empty.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
