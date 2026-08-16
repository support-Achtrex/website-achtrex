import React from 'react';
import { getAllProjectsForAdmin } from '@/lib/portal-db';
import Link from 'next/link';
import { 
  Briefcase, User, Mail, Building, Phone, 
  Clock, ArrowRight, CheckCircle2, AlertCircle, 
  Cpu, ShoppingCart, Layers, ExternalLink 
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminProjectsPage() {
  const projects = await getAllProjectsForAdmin();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
              Members & Project Requests
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Client Projects Hub</h1>
          <p className="text-slate-500 text-sm">
            Manage client requests, update live progress feeds, edit architecture diagrams, and configure scope carts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            target="_blank"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink size={14} /> Open Member Portal
          </Link>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Project / Request</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Member / Client</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Solution Type</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Budget</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Progress</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {projects.length > 0 ? (
                projects.map((proj) => (
                  <tr key={proj.id} className="hover:bg-gray-50/60 transition-colors">
                    {/* Project Title & Date */}
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Link 
                          href={`/admin/projects/${proj.id}`}
                          className="text-sm font-bold text-gray-900 hover:text-primary transition-colors flex items-center gap-1.5"
                        >
                          {proj.title}
                        </Link>
                        <span className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                          <Clock size={12} /> {new Date(proj.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </td>

                    {/* Member */}
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">{proj.member_name || 'Anonymous Client'}</span>
                        <span className="text-xs text-slate-500">{proj.member_email}</span>
                        {proj.member_company && (
                          <span className="text-[11px] text-slate-400 mt-0.5">{proj.member_company}</span>
                        )}
                      </div>
                    </td>

                    {/* Service Type */}
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                        {proj.service_type}
                      </span>
                    </td>

                    {/* Budget */}
                    <td className="p-4 text-sm font-semibold text-gray-700">
                      {proj.budget || 'Custom'}
                    </td>

                    {/* Progress */}
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-primary h-full rounded-full" 
                            style={{ width: `${proj.progress_percent}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-gray-700">{proj.progress_percent}%</span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        proj.status === 'completed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          : proj.status === 'in_development'
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {proj.status.replace('_', ' ')}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="p-4 text-right">
                      <Link
                        href={`/admin/projects/${proj.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
                      >
                        Manage <ArrowRight size={14} />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-slate-500">
                    <Briefcase size={44} className="mx-auto text-slate-300 mb-2" />
                    <p className="font-semibold text-gray-700">No member project requests yet.</p>
                    <p className="text-xs text-slate-400 mt-1">When clients register on /portal, their projects will appear here.</p>
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
