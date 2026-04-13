import React from 'react';
import { sql } from '@vercel/postgres';
import {
    ArrowLeft, Plus, DollarSign, FileText, Download, Clock,
    CheckCircle2, Circle, ListTodo, Paperclip, File, Trash2,
    ExternalLink, CheckCircle, AlertCircle, Mail
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    addNote, recordPayment,
    addMilestone, updateMilestoneStatus, deleteMilestone,
    addFile, deleteFile, sendWeeklyReport
} from '@/app/actions/client-management';
import { Button } from '@/components/buttons';
import NotesManager from '@/components/NotesManager';

export const dynamic = 'force-dynamic';

export default async function SubscriberDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    if (isNaN(id)) notFound();

    let subscriber: any = null;
    let notes: any[] = [];
    let payments: any[] = [];
    let progress: any[] = [];
    let files: any[] = [];

    try {
        const subRes = await sql`SELECT * FROM subscribers WHERE id = ${id}`;
        if (subRes.rows.length === 0) notFound();
        subscriber = subRes.rows[0];

        const notesRes = await sql`SELECT * FROM client_notes WHERE subscriber_id = ${id} ORDER BY created_at DESC`;
        notes = notesRes.rows;

        const payRes = await sql`SELECT * FROM client_payments WHERE subscriber_id = ${id} ORDER BY created_at DESC`;
        payments = payRes.rows;

        const progressRes = await sql`SELECT * FROM project_progress WHERE subscriber_id = ${id} ORDER BY created_at ASC`;
        progress = progressRes.rows;

        const filesRes = await sql`SELECT * FROM client_files WHERE subscriber_id = ${id} ORDER BY created_at DESC`;
        files = filesRes.rows;
    } catch (e) {
        console.error(e);
    }

    const totalPaid = payments
        .filter(p => p.status === 'paid')
        .reduce((sum, p) => sum + Number(p.amount), 0);

    const completedMilestones = progress.filter(p => p.status === 'completed').length;
    const progressPercentage = progress.length > 0 ? Math.round((completedMilestones / progress.length) * 100) : 0;

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Link href="/admin/subscribers" className="p-2 hover:bg-gray-100 rounded-full transition-colors w-fit">
                    <ArrowLeft size={20} className="text-gray-500" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{subscriber.email}</h1>
                    <p className="text-sm text-gray-500">
                        Client since {new Date(subscriber.subscribed_at).toLocaleDateString()}
                    </p>
                </div>
                <div className="md:ml-auto flex items-center gap-3">
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl font-bold border border-green-100 shadow-sm flex items-center gap-2">
                        <DollarSign size={16} />
                        Total revenue: ${totalPaid.toLocaleString()}
                    </div>
                    <div className="flex gap-2">
                        <a
                            href={`/api/subscribers/${id}/report`}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-xl font-bold border border-gray-100 shadow-sm hover:bg-gray-50 transition-all text-sm"
                        >
                            <Download size={16} />
                            Download Report
                        </a>
                        <form action={async () => {
                            'use server';
                            await sendWeeklyReport(id);
                        }}>
                            <Button className="bg-purple-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg shadow-purple-100 flex items-center gap-2 text-sm">
                                <Mail size={16} />
                                Send Weekly Update
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* Left Column: Notes & Progress */}
                <div className="xl:col-span-2 space-y-8">

                    {/* Progress Tracking */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <ListTodo size={18} className="text-purple-500" />
                                Project Progress
                            </h2>
                            <div className="text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                                {progressPercentage}% Complete
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-100 rounded-full h-2 mb-8 overflow-hidden">
                            <div
                                className="bg-purple-500 h-full transition-all duration-1000"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>

                        <form action={async (formData) => {
                            'use server';
                            await addMilestone(id, formData.get('milestone') as string);
                        }} className="mb-6 flex gap-2">
                            <input
                                name="milestone"
                                required
                                className="flex-1 p-2 border border-blue-100 bg-blue-50/30 rounded-lg text-sm focus:border-purple-500 focus:bg-white outline-none transition-all"
                                placeholder="Add project milestone (e.g. Design Approved)..."
                            />
                            <Button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 shadow-lg shadow-purple-200">
                                <Plus size={20} />
                            </Button>
                        </form>

                        <div className="space-y-3">
                            {progress.length > 0 ? (
                                progress.map((ms) => (
                                    <div key={ms.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:border-purple-100 hover:bg-purple-50/20 transition-all group">
                                        <div className="flex items-center gap-3">
                                            <form action={async () => {
                                                'use server';
                                                const newStatus = ms.status === 'completed' ? 'pending' : 'completed';
                                                await updateMilestoneStatus(id, ms.id, newStatus);
                                            }}>
                                                <button className="flex items-center outline-none">
                                                    {ms.status === 'completed' ? (
                                                        <CheckCircle2 size={20} className="text-green-500 fill-green-50" />
                                                    ) : (
                                                        <Circle size={20} className="text-gray-300 group-hover:text-purple-300" />
                                                    )}
                                                </button>
                                            </form>
                                            <span className={`text-sm ${ms.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}>
                                                {ms.milestone}
                                            </span>
                                        </div>
                                        <form action={async () => {
                                            'use server';
                                            await deleteMilestone(id, ms.id);
                                        }}>
                                            <button className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1">
                                                <Trash2 size={14} />
                                            </button>
                                        </form>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-400 border border-dashed border-gray-200 rounded-xl">
                                    <p className="text-sm">No milestones added yet.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Notes Section - Now handled by NotesManager */}
                    <NotesManager
                        subscriberId={id}
                        initialNotes={notes.map(n => ({
                            ...n,
                            created_at: new Date(n.created_at).toISOString()
                        }))}
                    />
                </div>

                {/* Right Column: Payments & Files */}
                <div className="space-y-8">

                    {/* Payments & Invoices Section */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <DollarSign size={18} className="text-green-500" />
                            Invoices
                        </h2>

                        <form action={async (formData) => {
                            'use server';
                            await recordPayment(
                                id,
                                parseFloat(formData.get('amount') as string),
                                formData.get('description') as string,
                                formData.get('status') as string || 'pending'
                            );
                        }} className="mb-6 bg-gray-50/50 p-4 rounded-xl space-y-3 border border-gray-100">
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
                            <div className="flex items-center gap-4 text-xs font-medium text-gray-500 px-1">
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="status" value="pending" defaultChecked className="text-green-600" /> Pending
                                </label>
                                <label className="flex items-center gap-1 cursor-pointer">
                                    <input type="radio" name="status" value="paid" className="text-green-600" /> Paid
                                </label>
                            </div>
                            <Button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 text-sm font-bold shadow-md shadow-green-100 transition-all active:scale-95">
                                Generate Invoice
                            </Button>
                        </form>

                        <div className="space-y-3">
                            {payments.length > 0 ? (
                                payments.map((pay) => (
                                    <div key={pay.id} className="flex flex-col p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors group">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-mono text-gray-400">#{pay.invoice_number}</span>
                                            <span className={`text-[10px] uppercase font-black px-1.5 py-0.5 rounded ${pay.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                {pay.status}
                                            </span>
                                        </div>
                                        <div className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                                            {pay.description}
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm font-black text-gray-900">${Number(pay.amount).toLocaleString()}</span>
                                            <a href={`/admin/invoices/${pay.id}`} className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="View/Download Invoice">
                                                <Download size={14} />
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-400 text-sm py-4">No invoices yet.</p>
                            )}
                        </div>
                    </div>

                    {/* Shared Files Section */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Paperclip size={18} className="text-orange-500" />
                            Client Assets & Files
                        </h2>

                        <form action={async (formData) => {
                            'use server';
                            await addFile(
                                id,
                                formData.get('name') as string,
                                formData.get('url') as string
                            );
                        }} className="mb-6 space-y-2">
                            <input
                                name="name"
                                required
                                className="w-full p-2 border border-gray-100 bg-gray-50 rounded-lg text-sm outline-none focus:border-orange-500 focus:bg-white"
                                placeholder="File name (e.g. Brand Guidelines)"
                            />
                            <div className="flex gap-2">
                                <input
                                    name="url"
                                    type="url"
                                    required
                                    className="flex-1 p-2 border border-gray-100 bg-gray-50 rounded-lg text-sm outline-none focus:border-orange-500 focus:bg-white"
                                    placeholder="File URL (Vercel, GDrive, etc.)"
                                />
                                <Button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all">
                                    <Plus size={20} />
                                </Button>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1 italic">Note: Files are currently hosted externally. Provide a download link.</p>
                        </form>

                        <div className="space-y-3">
                            {files.length > 0 ? (
                                files.map((file) => (
                                    <div key={file.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 bg-gray-50/30 group hover:border-orange-200 hover:bg-white transition-all">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <div className="p-2 bg-white rounded-lg border border-gray-100 text-orange-500 shadow-sm">
                                                <File size={16} />
                                            </div>
                                            <div className="overflow-hidden">
                                                <p className="text-sm font-bold text-gray-800 truncate">{file.file_name}</p>
                                                <p className="text-[10px] text-gray-400">{new Date(file.created_at).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href={file.file_url}
                                                target="_blank"
                                                className="p-1.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                            <form action={async () => {
                                                'use server';
                                                await deleteFile(id, file.id);
                                            }}>
                                                <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 size={14} />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-6 text-gray-400 text-sm">
                                    No files shared yet.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

