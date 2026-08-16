'use client';

import React, { useState, useTransition } from 'react';
import { 
  ShoppingCart, Plus, Check, Trash2, ArrowRight, 
  Sparkles, CheckCircle2, PackageCheck, ShieldAlert, FileText 
} from 'lucide-react';
import { ScopeCartItem, AVAILABLE_ADDONS } from '@/lib/portal-types';
import { memberToggleAddonAction } from '@/app/actions/portal-actions';

interface ScopeCartProps {
  projectId: number;
  initialCart: ScopeCartItem[];
}

export default function ScopeCart({ projectId, initialCart }: ScopeCartProps) {
  const [cart, setCart] = useState<ScopeCartItem[]>(initialCart);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const handleToggleAddon = (addonId: string) => {
    startTransition(async () => {
      const res = await memberToggleAddonAction(projectId, addonId);
      if (res.success && res.cart) {
        setCart(res.cart);
        setMessage('Scope cart updated successfully!');
        setTimeout(() => setMessage(null), 3000);
      } else if (res.error) {
        alert(res.error);
      }
    });
  };

  const includedItems = cart.filter(item => item.status === 'included' || item.status === 'completed');
  const requestedAddons = cart.filter(item => item.status === 'addon_requested' || item.status === 'in_review');

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
              <ShoppingCart size={18} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-montserrat">
              Project Deliverables Cart
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Scope of Work & Add-ons</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            Review active architectural modules and add custom extensions to your build.
          </p>
        </div>

        {message && (
          <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-2 rounded-xl border border-emerald-100 flex items-center gap-1.5 animate-fadeIn">
            <CheckCircle2 size={14} /> {message}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Active Included Scope (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 font-montserrat flex items-center gap-2">
              <PackageCheck size={16} className="text-emerald-500" />
              Active Project Scope ({includedItems.length + requestedAddons.length} Modules)
            </h3>
            <span className="text-xs text-slate-500 font-medium">Auto-Synced</span>
          </div>

          <div className="space-y-3">
            {includedItems.map((item) => (
              <div 
                key={item.id}
                className="p-4 rounded-2xl bg-gray-50/70 border border-gray-100 flex items-start justify-between gap-4 hover:border-gray-200 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-100/60 text-emerald-700 mt-0.5">
                    <Check size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-900">{item.name}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-400">
                      <span>Timeline: <strong className="text-slate-600">{item.estimatedTimeline || 'Standard'}</strong></span>
                      <span>•</span>
                      <span>Cost: <strong className="text-emerald-600">{item.estimatedCost || 'Included'}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Requested Addons in Scope */}
            {requestedAddons.map((item) => (
              <div 
                key={item.id}
                className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex items-start justify-between gap-4 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-700 mt-0.5">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-900">{item.name}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                        Add-on Requested
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-500">
                      <span>Timeline: <strong>{item.estimatedTimeline}</strong></span>
                      <span>•</span>
                      <span>Est. Cost: <strong className="text-amber-700">{item.estimatedCost}</strong></span>
                    </div>
                  </div>
                </div>
                <button
                  disabled={isPending}
                  onClick={() => handleToggleAddon(item.id)}
                  className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-white transition-colors"
                  title="Remove add-on"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Available Add-on Modules (5 Cols) */}
        <div className="lg:col-span-5 bg-gray-50/80 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 font-montserrat">
                Recommended Expansion Modules
              </h3>
              <span className="text-[11px] text-primary font-bold">1-Click Request</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Select optional enhancements. Our team will automatically update your architecture diagrams and deliverable sprints.
            </p>

            <div className="space-y-3">
              {AVAILABLE_ADDONS.map((addon) => {
                const isSelected = cart.some(c => c.id === addon.id);

                return (
                  <div 
                    key={addon.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isSelected 
                        ? 'bg-blue-50/80 border-blue-200' 
                        : 'bg-white border-gray-200/80 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-gray-900 block">{addon.name}</span>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{addon.description}</p>
                        <div className="flex items-center gap-2 mt-2 text-[11px]">
                          <span className="font-bold text-gray-800">{addon.estimatedCost}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-500">{addon.estimatedTimeline}</span>
                        </div>
                      </div>
                      <button
                        disabled={isPending}
                        onClick={() => handleToggleAddon(addon.id)}
                        className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                          isSelected
                            ? 'bg-red-50 text-red-600 hover:bg-red-100'
                            : 'bg-primary text-white hover:bg-blue-700'
                        }`}
                      >
                        {isSelected ? <Trash2 size={14} /> : <Plus size={14} />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200/80 text-center">
            <p className="text-xs text-slate-500 mb-2">
              Need custom bespoke integrations (ERP, OEM feeds, or proprietary protocols)?
            </p>
            <a 
              href="mailto:support@achtrex.com" 
              className="text-xs font-bold text-primary hover:text-blue-700 underline inline-flex items-center gap-1"
            >
              Contact Solutions Architect <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
