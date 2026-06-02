'use client';

import React from 'react';
import { useToast } from '@/components/ui/toast';
import { Button } from '@/components/buttons';
import { Mail } from 'lucide-react';
import { sendWeeklyReport, recordPayment } from '@/app/actions/client-management';

export function SendReportButton({ subscriberId }: { subscriberId: number }) {
    const { loading, updateToast } = useToast();

    const handleSend = async () => {
        const id = loading('Sending weekly update...');
        try {
            const result = await sendWeeklyReport(subscriberId);
            if (result.success) {
                updateToast(id, 'Weekly update sent successfully!', 'success');
            } else {
                updateToast(id, result.error || 'Failed to send update', 'error');
            }
        } catch (e: any) {
            updateToast(id, e.message || 'An error occurred', 'error');
        }
    };

    return (
        <Button onClick={handleSend} className="bg-purple-600 text-slate-900 px-4 py-2 rounded-xl font-bold shadow-lg shadow-purple-100 flex items-center gap-2 text-sm hover:bg-purple-700 transition-colors">
            <Mail size={16} />
            Send Weekly Update
        </Button>
    );
}

export function GenerateInvoiceForm({ subscriberId }: { subscriberId: number }) {
    const { loading, updateToast } = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const amount = parseFloat(formData.get('amount') as string);
        const description = formData.get('description') as string;
        const status = formData.get('status') as string || 'pending';

        const toastId = loading('Generating invoice...');
        try {
            const result = await recordPayment(subscriberId, amount, description, status);
            if (result.success) {
                if (result.warning) {
                    updateToast(toastId, result.warning, 'error'); 
                } else {
                    updateToast(toastId, 'Invoice generated successfully!', 'success');
                }
                (e.target as HTMLFormElement).reset();
            } else {
                updateToast(toastId, result.error || 'Failed to generate invoice', 'error');
            }
        } catch (e: any) {
            updateToast(toastId, e.message || 'An error occurred', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-gray-50/50 p-4 rounded-xl space-y-3 border border-gray-100">
            <div className="flex gap-2">
                <input
                    name="amount"
                    type="number"
                    step="0.01"
                    required
                    className="w-1/3 p-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-green-500 focus:bg-white"
                    placeholder="Amount ($)"
                />
                <input
                    name="description"
                    required
                    className="flex-1 p-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-green-500 focus:bg-white"
                    placeholder="Description"
                />
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 px-1">
                <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="status" value="pending" defaultChecked className="text-green-600" /> Pending
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="status" value="paid" className="text-green-600" /> Paid
                </label>
            </div>
            <Button type="submit" className="w-full bg-green-600 text-slate-900 py-2 rounded-lg hover:bg-green-700 text-sm font-bold shadow-md shadow-green-100 transition-all active:scale-95">
                Generate Invoice
            </Button>
        </form>
    );
}
