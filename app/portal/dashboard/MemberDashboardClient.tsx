'use client';

import React, { useState } from 'react';
import { 
  PortalMember, PortalProject, ProjectUpdate 
} from '@/lib/portal-types';
import ArchitectureDiagram from '@/components/portal/ArchitectureDiagram';
import ScopeCart from '@/components/portal/ScopeCart';
import ProjectUpdatesTimeline from '@/components/portal/ProjectUpdatesTimeline';
import NewProjectModal from '@/components/portal/NewProjectModal';
import { memberLogoutAction } from '@/app/actions/portal-actions';
import { 
  Briefcase, Plus, LogOut, Cpu, ShoppingCart, 
  Clock, ShieldCheck, Mail, Building, Phone, 
  ChevronDown, Layers, Sparkles, UserCheck, ArrowLeft 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface MemberDashboardClientProps {
  member: PortalMember;
  projects: PortalProject[];
  updates: ProjectUpdate[];
}

export default function MemberDashboardClient({
  member,
  projects,
  updates
}: MemberDashboardClientProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(projects[0]?.id || 0);
  const [activeTab, setActiveTab] = useState<'architecture' | 'cart' | 'updates'>('architecture');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeProject = projects.find(p => p.id === selectedProjectId) || projects[0];
  const projectUpdates = updates.filter(u => u.project_id === activeProject?.id);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans flex flex-col justify-between">
      
      {/* Top Header Bar */}
      <header className="w-full border-b border-slate-200 bg-white px-6 py-4 shadow-xs sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Achtrex Logo"
              width={130}
              height={36}
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-200">
              Member Workspace
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl border border-slate-200 transition-colors shadow-2xs"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Back to Achtrex.com</span>
              <span className="sm:hidden">Website</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="max-w-7xl mx-auto w-full px-4 md:px-8 py-8 space-y-6 flex-1">
        
        {/* Top Member Profile Bar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-600 to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0">
              {member.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-black text-slate-900">{member.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <UserCheck size={12} /> Active Member
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium mt-1">
                <span>{member.email}</span>
                {member.company && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Building size={12} className="text-blue-600" /> {member.company}
                    </span>
                  </>
                )}
                {member.phone && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Phone size={12} className="text-blue-600" /> {member.phone}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-2xl text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <Plus size={16} /> New Project Request
            </button>

            <form action={async () => {
              await memberLogoutAction();
            }}>
              <button
                type="submit"
                className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-colors shadow-2xs"
                title="Log Out"
              >
                <LogOut size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Project Selector & Status Banner */}
        {projects.length > 0 ? (
          <div className="space-y-6">
            {/* Multi-Project Tabs if multiple */}
            {projects.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Your Projects:</span>
                {projects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjectId(proj.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      selectedProjectId === proj.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {proj.title}
                  </button>
                ))}
              </div>
            )}

            {/* Active Project Meta Header */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      {activeProject.service_type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
                      Budget: {activeProject.budget || 'Custom Scope'}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Requested on {new Date(activeProject.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">{activeProject.title}</h2>
                  <p className="text-slate-600 text-sm mt-2 max-w-4xl leading-relaxed">{activeProject.description}</p>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0">
                  <div className="text-right">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Progress</div>
                    <div className="text-2xl font-black text-blue-600">{activeProject.progress_percent}%</div>
                  </div>
                  <div className="w-24 bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-700" 
                      style={{ width: `${activeProject.progress_percent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === 'architecture'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <Cpu size={16} /> Interactive Architecture Diagram
                </button>

                <button
                  onClick={() => setActiveTab('cart')}
                  className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === 'cart'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <ShoppingCart size={16} /> Scope &amp; Deliverables Cart ({activeProject.cart_items?.length || 0})
                </button>

                <button
                  onClick={() => setActiveTab('updates')}
                  className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    activeTab === 'updates'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <Clock size={16} /> Live Progress &amp; Updates ({projectUpdates.length})
                </button>
              </div>
            </div>

            {/* Active Tab Content Area */}
            <div>
              {activeTab === 'architecture' && (
                <ArchitectureDiagram 
                  nodes={activeProject.architecture_data?.nodes || []} 
                  projectId={activeProject.id} 
                />
              )}

              {activeTab === 'cart' && (
                <ScopeCart 
                  projectId={activeProject.id} 
                  initialCart={activeProject.cart_items || []} 
                />
              )}

              {activeTab === 'updates' && (
                <ProjectUpdatesTimeline 
                  updates={projectUpdates} 
                  status={activeProject.status} 
                  progressPercent={activeProject.progress_percent} 
                />
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-xs">
            <Briefcase size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Active Projects Yet</h3>
            <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
              Submit your first project request to initialize your dedicated architecture topology and deliverables cart.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              Submit Project Request
            </button>
          </div>
        )}

      </main>

      {/* Clean Light Footer */}
      <footer className="w-full border-t border-slate-200 py-6 text-center text-xs text-slate-500 bg-white">
        <p>© {new Date().getFullYear()} Achtrex Technologies FZCO. All rights reserved. Enterprise Workspace.</p>
      </footer>

      <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
