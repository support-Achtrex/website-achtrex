'use client';

import React from 'react';
import { ProjectUpdate } from '@/lib/portal-types';
import { Clock, CheckCircle2, AlertCircle, Wrench, ShieldCheck, Rocket, GitCommit, User } from 'lucide-react';

interface ProjectUpdatesTimelineProps {
  updates: ProjectUpdate[];
  status: string;
  progressPercent: number;
}

const STAGES = [
  { key: 'submitted', label: '1. Request Received' },
  { key: 'reviewing', label: '2. Discovery & Scoping' },
  { key: 'architecture_design', label: '3. Architecture Design' },
  { key: 'in_development', label: '4. Core Engineering' },
  { key: 'testing', label: '5. QA & Optimization' },
  { key: 'completed', label: '6. Production Live' }
];

export default function ProjectUpdatesTimeline({ updates, status, progressPercent }: ProjectUpdatesTimelineProps) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 lg:p-8 shadow-sm">
      {/* Header & Milestone Status */}
      <div className="pb-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-100">
                Live Status
              </span>
              <span className="text-xs text-slate-500 font-medium">Sprint Tracker</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Project Progress & Updates</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Completion</div>
              <div className="text-xl font-black text-primary">{progressPercent}%</div>
            </div>
            <div className="w-16 bg-gray-100 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-logo-gradient h-full rounded-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Milestone Steps Bar */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-6">
          {STAGES.map((s, idx) => {
            const isCompleted = progressPercent >= ((idx + 1) * 16.6);
            const isCurrent = !isCompleted && (progressPercent >= (idx * 16.6) || idx === 0);

            return (
              <div 
                key={s.key}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isCompleted 
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-800' 
                    : isCurrent 
                    ? 'bg-blue-50/80 border-blue-300 text-blue-900 shadow-sm' 
                    : 'bg-gray-50 border-gray-100 text-slate-400'
                }`}
              >
                <div className="flex justify-center mb-1">
                  {isCompleted ? (
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  ) : isCurrent ? (
                    <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />
                  )}
                </div>
                <div className="text-[11px] font-bold tracking-tight line-clamp-1">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Engineering Updates Stream */}
      <div className="mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 font-montserrat mb-4 flex items-center gap-2">
          <GitCommit size={18} className="text-primary" />
          Engineering Activity Stream ({updates.length} Updates)
        </h3>

        {updates.length === 0 ? (
          <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-100">
            <Clock size={36} className="mx-auto text-slate-300 mb-2" />
            <p className="text-sm text-slate-500 font-medium">Your initial update is being prepared by the solutions team.</p>
          </div>
        ) : (
          <div className="relative pl-6 border-l-2 border-blue-100 space-y-6">
            {updates.map((update, index) => (
              <div key={update.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
                
                <div className="bg-gray-50/70 hover:bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-all shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100">
                      {update.stage || 'Update'}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock size={12} />
                      <span>{new Date(update.created_at).toLocaleString()}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 mb-1.5">{update.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{update.content}</p>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-medium">
                      <User size={12} className="text-primary" /> {update.author_name || 'Achtrex Engineering Team'}
                    </span>
                    <span className="text-[11px] text-slate-400">Verified Broadcast</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
