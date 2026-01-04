import React from 'react';
import { sql } from '@vercel/postgres';
import { Send, Trash2, Users, Mail } from 'lucide-react';
import { deleteSubscriber, sendCampaign } from '@/app/actions/marketing';
import { Button } from '@/components/buttons';

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
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Marketing & Newsletter</h1>
                    <p className="text-gray-500 text-sm">Manage your subscribers and send updates.</p>
                </div>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Users size={16} />
                    <span>{subscribers.length} Subscribers</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Send Campaign Column */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Send Campaign</h3>
                                <p className="text-xs text-gray-500">Email all your subscribers at once.</p>
                            </div>
                        </div>

                        <form action={sendCampaign} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input name="subject" required className="w-full p-3 border border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all" placeholder="e.g. New Features Out Now!" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message Body (HTML supported)</label>
                                <textarea name="body" required className="w-full p-3 border border-gray-200 rounded-xl h-48 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none" placeholder="Hello team..." />
                            </div>
                            <div className="flex justify-end">
                                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold shadow-lg shadow-primary/20">
                                    <Send size={18} />
                                    Send Broadcast
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Subscribers List Column */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[600px]">
                        <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                            <h3 className="font-bold text-gray-800 text-sm">Subscriber List</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
                            {subscribers.length > 0 ? (
                                subscribers.map((sub) => (
                                    <div key={sub.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group border border-transparent hover:border-gray-100">
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">{sub.email}</p>
                                            <p className="text-[10px] text-gray-400">
                                                Joined {new Date(sub.subscribed_at).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <form action={deleteSubscriber.bind(null, sub.id)}>
                                            <button className="text-gray-300 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100">
                                                <Trash2 size={14} />
                                            </button>
                                        </form>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10 text-gray-400 text-sm">
                                    No subscribers yet.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
