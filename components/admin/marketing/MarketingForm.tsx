
'use client';

import React, { useState } from 'react';
import { Send, Mail, Layout, Sparkles } from 'lucide-react';
import { Button } from '@/components/buttons';
import { TemplateSelector } from './TemplateSelector';
import { EmailTemplate } from '@/lib/templates';
import { sendCampaign } from '@/app/actions/marketing';

interface MarketingFormProps {
    subscriberCount: number;
}

export const MarketingForm: React.FC<MarketingFormProps> = ({ subscriberCount }) => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [result, setResult] = useState<{ success?: boolean; error?: string; count?: number } | null>(null);

    const handleSelectTemplate = (template: EmailTemplate) => {
        setSubject(template.subject);
        setBody(template.html);
        // Scroll to the editor if needed
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setResult(null);

        const formData = new FormData(e.currentTarget);
        try {
            const res = await sendCampaign(formData);
            setResult(res as any);
            if (res.success) {
                // Optional: clear form
            }
        } catch (err) {
            setResult({ error: 'Failed to connect to server.' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Sparkles size={120} />
                </div>

                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">Campaign Designer</h3>
                        <p className="text-sm text-gray-500">Pick a rich template or craft a custom message.</p>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 text-sm font-bold text-gray-700">
                        <Layout size={16} className="text-primary" />
                        Select Template
                    </div>
                    <TemplateSelector onSelect={handleSelectTemplate} />
                </div>

                <hr className="border-gray-50 mb-8" />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject Line</label>
                        <input
                            name="subject"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                            placeholder="e.g. A special gift for you..."
                        />
                    </div>

                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                        <label className="block text-sm font-bold text-gray-700 mb-4">Recipients</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl cursor-pointer hover:border-primary/30 transition-all">
                                <input
                                    type="checkbox"
                                    name="send_to_all"
                                    defaultChecked
                                    className="w-5 h-5 text-primary rounded-lg border-gray-300 focus:ring-primary"
                                />
                                <div className="text-sm">
                                    <p className="font-bold text-gray-800">All Subscribers</p>
                                    <p className="text-[10px] text-gray-500">{subscriberCount} people</p>
                                </div>
                            </label>
                            <div>
                                <input
                                    name="manual_recipients"
                                    className="w-full p-4 text-sm bg-white border border-gray-100 rounded-xl focus:border-primary outline-none transition-all h-full"
                                    placeholder="Add emails (comma separated)..."
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-bold text-gray-700">Message Content</label>
                            <span className="text-[10px] text-gray-400 font-mono uppercase">Full HTML & Rich Text Supported</span>
                        </div>
                        <textarea
                            name="body"
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl h-80 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all font-mono text-sm resize-none"
                            placeholder="Type your message or select a template above..."
                        />
                    </div>

                    {result && (
                        <div className={`p-4 rounded-xl text-sm font-bold ${result.success ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                            {result.success ? `🚀 Success! Message sent to ${result.count} recipients.` : `❌ Error: ${result.error}`}
                        </div>
                    )}

                    <div className="flex justify-end pt-4">
                        <Button
                            disabled={isSending}
                            className={`px-8 py-4 rounded-2xl flex items-center gap-3 font-black text-white shadow-xl shadow-primary/20 transition-all active:scale-95 ${isSending ? 'bg-gray-400' : 'bg-primary hover:bg-primary/90'}`}
                        >
                            {isSending ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Launch Campaign
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
