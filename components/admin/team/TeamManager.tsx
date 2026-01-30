
'use client';

import React, { useState } from 'react';
import { User, DollarSign, Calendar, CreditCard, Send, Trash2, Save, Download } from 'lucide-react';
import { updateTeamMember, recordPayroll, deletePayroll } from '@/app/actions/team';
import Image from 'next/image';

interface TeamManagerProps {
    member: any;
    payrollHistory: any[];
}

export const TeamManager: React.FC<TeamManagerProps> = ({ member, payrollHistory }) => {
    const [activeTab, setActiveTab] = useState<'profile' | 'payroll'>('profile');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Profile Form State
    const [profileData, setProfileData] = useState({
        ...member,
        salary: member.salary || '',
        bank_details: member.bank_details || '',
        start_date: member.start_date ? new Date(member.start_date).toISOString().split('T')[0] : ''
    });

    const handleProfileUpdate = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            await updateTeamMember(member.id, formData);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to update profile.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePayrollRecord = async (formData: FormData) => {
        setIsSubmitting(true);
        try {
            await recordPayroll(member.id, formData);
            // Optimistic update or page reload handled by server action revalidating path
            // But we might want to clear form
        } catch (error) {
            alert('Failed to record payroll.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Profile Card */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-4 relative overflow-hidden">
                        <Image
                            src={member.image || '/team/placeholder-user.jpg'}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                    <p className="text-sm text-gray-500">{member.role}</p>

                    <div className="mt-6 flex flex-col gap-2">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`p-3 rounded-xl text-sm font-bold flex items-center gap-3 transition-colors ${activeTab === 'profile' ? 'bg-primary text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                        >
                            <User size={18} /> Profile & Settings
                        </button>
                        <button
                            onClick={() => setActiveTab('payroll')}
                            className={`p-3 rounded-xl text-sm font-bold flex items-center gap-3 transition-colors ${activeTab === 'payroll' ? 'bg-primary text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                        >
                            <DollarSign size={18} /> Payroll & Payslips
                        </button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                    <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Employment Details</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                            <Calendar size={16} className="text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-500">Start Date</p>
                                <p className="font-medium text-gray-900">{member.start_date ? new Date(member.start_date).toLocaleDateString() : 'Not set'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <DollarSign size={16} className="text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-500">Base Salary</p>
                                <p className="font-medium text-gray-900">{member.salary ? `$${Number(member.salary).toLocaleString()}/mo` : 'Not set'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
                {activeTab === 'profile' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm animate-in fade-in duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Edit Profile</h3>
                            <span className="text-sm text-gray-400">Update personal and role details</span>
                        </div>

                        <form action={handleProfileUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                <input
                                    name="name"
                                    defaultValue={profileData.name}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Role/Title</label>
                                <input
                                    name="role"
                                    defaultValue={profileData.role}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input
                                    name="email"
                                    defaultValue={profileData.email}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Profile Image URL</label>
                                <input
                                    name="image"
                                    defaultValue={profileData.image}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all"
                                />
                            </div>

                            <div className="md:col-span-2 border-t border-gray-100 my-2"></div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Salary ($)</label>
                                <input
                                    name="salary"
                                    type="number"
                                    defaultValue={profileData.salary}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
                                <input
                                    name="start_date"
                                    type="date"
                                    defaultValue={profileData.start_date}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Bank Details / Payment Info</label>
                                <textarea
                                    name="bank_details"
                                    defaultValue={profileData.bank_details}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all h-24 resize-none"
                                    placeholder="Bank Name, Account Number, SWIFT, IBAN..."
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Bio</label>
                                <textarea
                                    name="bio"
                                    defaultValue={profileData.bio}
                                    className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-primary outline-none transition-all h-32 resize-none"
                                />
                            </div>

                            <div className="md:col-span-2 text-right">
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="bg-primary text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors ml-auto disabled:opacity-50"
                                >
                                    <Save size={18} /> {isSubmitting ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {activeTab === 'payroll' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        {/* New Payment Form */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Record New Payment</h3>
                            <form action={handlePayrollRecord} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                                <div className="md:col-span-1">
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Amount ($)</label>
                                    <input
                                        name="amount"
                                        type="number"
                                        required
                                        defaultValue={member.salary}
                                        className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Date</label>
                                    <input
                                        name="payment_date"
                                        type="date"
                                        required
                                        defaultValue={new Date().toISOString().split('T')[0]}
                                        className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl"
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Action</label>
                                    <label className="flex items-center gap-2 p-3 border border-gray-100 rounded-xl bg-gray-50 cursor-pointer">
                                        <input type="checkbox" name="send_email" defaultChecked className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-medium">Send Payslip Email</span>
                                    </label>
                                </div>
                                <div className="md:col-span-1">
                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full bg-green-500 text-white p-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        <CreditCard size={18} /> Pay & Send
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* History Table */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-50">
                                <h3 className="text-lg font-bold text-gray-900">Payment History</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-gray-50 text-gray-500 font-bold">
                                        <tr>
                                            <th className="p-4">Date</th>
                                            <th className="p-4">Amount</th>
                                            <th className="p-4">Status</th>
                                            <th className="p-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {payrollHistory.map((record: any) => (
                                            <tr key={record.id} className="hover:bg-gray-50/50">
                                                <td className="p-4 font-medium text-gray-900">{new Date(record.payment_date).toLocaleDateString()}</td>
                                                <td className="p-4 text-green-600 font-bold">${Number(record.amount).toLocaleString()}</td>
                                                <td className="p-4">
                                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                                        {record.status}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-right flex justify-end gap-2">
                                                    <a
                                                        href={`/api/payroll/${record.id}/pdf`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 text-gray-400 hover:text-primary transition-colors"
                                                        title="Download Payslip"
                                                    >
                                                        <Download size={16} />
                                                    </a>
                                                    <form action={deletePayroll.bind(null, record.id, member.id)}>
                                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Delete Record">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
                                        {payrollHistory.length === 0 && (
                                            <tr>
                                                <td colSpan={4} className="p-8 text-center text-gray-400 italic">
                                                    No payments recorded yet.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
