'use client';

import React, { useState, useTransition } from 'react';
import { Plus, X, Briefcase, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { memberCreateNewProjectAction } from '@/app/actions/portal-actions';

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOLUTION_TYPES = [
  'Automotive Data & OEM APIs',
  'AI-Powered Dealership Solutions',
  'Sales & Inventory Management',
  'Fleet Telematics & Tracking Platform',
  'Custom Enterprise Software Development',
  'Cloud Architecture & Microservices'
];

const BUDGET_RANGES = [
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000 - $75,000',
  '$75,000 - $150,000+',
  'Enterprise Custom Quote'
];

export default function NewProjectModal({ isOpen, onClose }: NewProjectModalProps) {
  const [title, setTitle] = useState('');
  const [serviceType, setServiceType] = useState(SOLUTION_TYPES[0]);
  const [budget, setBudget] = useState(BUDGET_RANGES[1]);
  const [description, setDescription] = useState('');
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('service_type', serviceType);
    formData.append('budget', budget);
    formData.append('description', description);

    startTransition(async () => {
      const res = await memberCreateNewProjectAction(formData);
      if (res?.error) {
        setError(res.error);
      } else {
        onClose();
        window.location.reload();
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-lg w-full text-slate-900 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
            <Briefcase size={18} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Achtrex Workspace
          </span>
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-1">New Project Request</h3>
        <p className="text-slate-600 text-sm mb-6">
          Submit new project specifications to initialize a dedicated architecture diagram and deliverables cart.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs mb-4 font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Project Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Real-Time Auto Auction Scraper & AI Pricing"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 shadow-2xs"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Solution Category</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 shadow-2xs"
            >
              {SOLUTION_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Budget Allocation</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 shadow-2xs"
            >
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">Scope &amp; Requirements *</label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detail your requirements, core features, integrations, and milestones..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 leading-relaxed shadow-2xs"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              {isPending ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
