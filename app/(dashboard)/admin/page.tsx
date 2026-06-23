import React from 'react';
import { Plus, Upload } from 'lucide-react';
import AdminSidebar from '@/components/admin/sidebar';
import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import AdminTopbar from '@/components/admin/topbar';
import StatsCards from '@/components/admin/stats-cards';
import AnalyticsWidget from '@/components/admin/analytics-widget';
import RecentBlogsList from '@/components/admin/recent-blogs-list';
import TeamOverview from '@/components/admin/team-overview';
import ProjectProgress from '@/components/admin/project-progress';
import TotalViewsWidget from '@/components/admin/total-views-widget';

export default async function AdminDashboard() {
 const settingsRes = await sql`SELECT value FROM settings WHERE key = 'payment_details'`;
 const paymentDetails = settingsRes.rows.length > 0 ? JSON.parse(settingsRes.rows[0].value) : {
 bank_name: "Fidelity Bank",
 account_name: "Achtrex Services",
 account_number: "2400931904813",
 swift_bic: "FBLIGHAC"
 };

 async function updatePaymentDetails(formData: FormData) {
 'use server';
 const details = {
 bank_name: formData.get('bank_name') as string,
 account_name: formData.get('account_name') as string,
 account_number: formData.get('account_number') as string,
 swift_bic: formData.get('swift_bic') as string,
 };
 await sql`UPDATE settings SET value = ${JSON.stringify(details)} WHERE key = 'payment_details'`;
 revalidatePath('/admin');
 }

 return (
 <>

 {/* Dashboard Header */}
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
 <div>
 <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
 <p className="text-slate-400 text-sm">Plan, prioritize, and accomplish your blogs with ease.</p>
 </div>
 <div className="flex items-center gap-3">
 <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-slate-900 rounded-full font-medium transition-colors shadow-lg shadow-primary/20">
 <Plus size={18} />
 <span>Add Blog</span>
 </button>
 <button className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-full font-medium transition-colors">
 <Upload size={18} />
 <span>Import Data</span>
 </button>
 </div>
 </div>

 <StatsCards />

 {/* Main Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
 {/* Row 1: Analytics (Span 2) + Recent Blogs (Span 1) */}
 <div className="lg:col-span-2 h-80">
 <AnalyticsWidget />
 </div>
 <div className="lg:col-span-1 h-80">
 <RecentBlogsList />
 </div>

 {/* Row 2: Team, Progress, Time */}
 <div className="lg:col-span-1 h-64">
 <TeamOverview />
 </div>
 <div className="lg:col-span-1 h-64">
 <ProjectProgress />
 </div>
 <div className="lg:col-span-1 h-64">
 <TotalViewsWidget />
 </div>
 </div>

 {/* Payment Details Section */}
 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
 <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Details</h2>
 <form action={updatePaymentDetails} className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
 <input type="text" name="bank_name" defaultValue={paymentDetails.bank_name} className="border border-gray-200 rounded-lg px-3 py-2 w-full text-sm" />
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
 <input type="text" name="account_name" defaultValue={paymentDetails.account_name} className="border border-gray-200 rounded-lg px-3 py-2 w-full text-sm" />
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
 <input type="text" name="account_number" defaultValue={paymentDetails.account_number} className="border border-gray-200 rounded-lg px-3 py-2 w-full text-sm" />
 </div>
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-1">SWIFT/BIC</label>
 <input type="text" name="swift_bic" defaultValue={paymentDetails.swift_bic} className="border border-gray-200 rounded-lg px-3 py-2 w-full text-sm" />
 </div>
 <div className="md:col-span-2 text-right">
 <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
 Save Payment Details
 </button>
 </div>
 </form>
 </div>
 </>
 );
}
