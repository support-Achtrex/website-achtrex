'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Database, Cpu, ShieldCheck, Cloud, Globe, 
  Layers, ArrowRight, CheckCircle2, Clock, Activity, 
  Sparkles, Info, RefreshCw, Send, Lock, Download, 
  Share2, ZoomIn, ZoomOut, Check, ChevronRight, Terminal, 
  Network, Radio, Flame, Zap
} from 'lucide-react';
import { ArchitectureNode } from '@/lib/portal-types';
import { memberSubmitArchitectureInquiryAction } from '@/app/actions/portal-actions';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  projectId: number;
}

const CATEGORY_CONFIG: Record<string, { 
  icon: React.ElementType; 
  color: string; 
  bg: string; 
  border: string; 
  badgeBg: string;
  badgeText: string;
  tierName: string;
  tierIndex: number;
}> = {
  frontend: { 
    icon: Globe, 
    color: 'text-sky-600', 
    bg: 'bg-sky-50', 
    border: 'border-sky-200', 
    badgeBg: 'bg-sky-100', 
    badgeText: 'text-sky-800',
    tierName: 'Client & Ingress Layer',
    tierIndex: 1
  },
  gateway: { 
    icon: Server, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50', 
    border: 'border-indigo-200', 
    badgeBg: 'bg-indigo-100', 
    badgeText: 'text-indigo-800',
    tierName: 'Edge Gateway & Security Layer',
    tierIndex: 2
  },
  service: { 
    icon: Layers, 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-50', 
    border: 'border-emerald-200', 
    badgeBg: 'bg-emerald-100', 
    badgeText: 'text-emerald-800',
    tierName: 'Core Microservices Layer',
    tierIndex: 3
  },
  ai: { 
    icon: Sparkles, 
    color: 'text-purple-600', 
    bg: 'bg-purple-50', 
    border: 'border-purple-200', 
    badgeBg: 'bg-purple-100', 
    badgeText: 'text-purple-800',
    tierName: 'AI & Cognitive Pipelines',
    tierIndex: 3
  },
  database: { 
    icon: Database, 
    color: 'text-amber-600', 
    bg: 'bg-amber-50', 
    border: 'border-amber-200', 
    badgeBg: 'bg-amber-100', 
    badgeText: 'text-amber-800',
    tierName: 'Persistence & Cache Layer',
    tierIndex: 4
  },
  cloud: { 
    icon: Cloud, 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-50', 
    border: 'border-cyan-200', 
    badgeBg: 'bg-cyan-100', 
    badgeText: 'text-cyan-800',
    tierName: 'Cloud & Kubernetes Infrastructure',
    tierIndex: 5
  },
  pipeline: { 
    icon: Activity, 
    color: 'text-rose-600', 
    bg: 'bg-rose-50', 
    border: 'border-rose-200', 
    badgeBg: 'bg-rose-100', 
    badgeText: 'text-rose-800',
    tierName: 'CI/CD & DevOps Pipeline',
    tierIndex: 5
  }
};

export default function ArchitectureDiagram({ nodes, projectId }: ArchitectureDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(nodes[0] || null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'visual' | 'grid' | 'specs'>('visual');
  const [requestNote, setRequestNote] = useState('');
  const [isPending, startTransition] = useTransition();
  const [inquirySuccess, setInquirySuccess] = useState<string | null>(null);

  const filteredNodes = filterCategory === 'all' 
    ? nodes 
    : nodes.filter(n => n.category === filterCategory);

  const handleCustomRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestNote.trim() || !selectedNode) return;

    startTransition(async () => {
      const res = await memberSubmitArchitectureInquiryAction(projectId, selectedNode.label, requestNote);
      if (res?.success) {
        setInquirySuccess('Inquiry submitted to lead solutions architect!');
        setRequestNote('');
        setTimeout(() => setInquirySuccess(null), 4000);
      } else {
        alert(res?.error || 'Failed to submit inquiry.');
      }
    });
  };

  const handleExportManifest = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      projectId,
      timestamp: new Date().toISOString(),
      nodes: nodes
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `achtrex-architecture-project-${projectId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Group nodes by tier for visual flow representation
  const tiers = [
    { title: '1. Client & Ingress Tier', categories: ['frontend'] },
    { title: '2. Edge Gateway & API Tier', categories: ['gateway'] },
    { title: '3. Microservices & AI Engines', categories: ['service', 'ai'] },
    { title: '4. Database & Storage Tier', categories: ['database'] },
    { title: '5. Cloud & Cluster Infra', categories: ['cloud', 'pipeline'] }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 lg:p-8 text-slate-900 shadow-sm relative overflow-hidden">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-200">
              Interactive System Topology
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Pipeline Active
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">System Architecture &amp; Data Pipeline</h2>
          <p className="text-slate-600 text-sm mt-0.5">Explore your tailored cloud infrastructure, microservices, and database layers in real-time.</p>
        </div>

        {/* View Mode Switcher & Export */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode('visual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'visual'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Visual Flow
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Grid Topology
            </button>
            <button
              onClick={() => setViewMode('specs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'specs'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Specs Matrix
            </button>
          </div>

          <button
            onClick={handleExportManifest}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs border border-slate-200 transition-colors shadow-sm"
            title="Export Architecture JSON"
          >
            <Download size={14} />
            <span>Export JSON</span>
          </button>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap gap-1.5 pt-4 pb-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider self-center mr-1">Filter Tier:</span>
        {['all', 'frontend', 'gateway', 'service', 'ai', 'database', 'cloud'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              filterCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Layout Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        
        {/* Left Diagram / Canvas Area (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {viewMode === 'visual' && (
            /* Multi-Tier Flow Diagram View */
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-6">
              {tiers.map((tier, tierIdx) => {
                const tierNodes = filteredNodes.filter(n => tier.categories.includes(n.category));
                if (tierNodes.length === 0 && filterCategory !== 'all') return null;

                return (
                  <div key={tier.title} className="relative">
                    {/* Tier Title */}
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        {tier.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{tierNodes.length} component(s)</span>
                    </div>

                    {tierNodes.length === 0 ? (
                      <div className="p-3 text-center text-xs text-slate-400 bg-white/60 rounded-xl border border-dashed border-slate-200">
                        No active components in this tier for selected filter.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tierNodes.map((node) => {
                          const config = CATEGORY_CONFIG[node.category] || CATEGORY_CONFIG.service;
                          const Icon = config.icon;
                          const isSelected = selectedNode?.id === node.id;

                          return (
                            <div
                              key={node.id}
                              onClick={() => setSelectedNode(node)}
                              className={`p-3.5 rounded-xl cursor-pointer transition-all border relative bg-white ${
                                isSelected
                                  ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                                  : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2 mb-1.5">
                                <div className={`p-1.5 rounded-lg ${config.bg} ${config.color} border ${config.border}`}>
                                  <Icon size={16} />
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                  node.status === 'active' 
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                    : node.status === 'in_progress'
                                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                                }`}>
                                  {node.status.replace('_', ' ')}
                                </span>
                              </div>

                              <h4 className="font-bold text-xs text-slate-900 leading-snug">{node.label}</h4>
                              <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">{node.description}</p>

                              {node.connections && node.connections.length > 0 && (
                                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                                  <span className="flex items-center gap-1 text-blue-600 font-bold">
                                    <ArrowRight size={10} /> {node.connections.length} downstream link(s)
                                  </span>
                                  <span className="font-mono text-slate-400">{node.id}</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Flow Connector Arrow to Next Tier */}
                    {tierIdx < tiers.length - 1 && (
                      <div className="flex justify-center my-3">
                        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                          <ChevronRight size={14} className="rotate-90 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {viewMode === 'grid' && (
            /* Component Grid Topology View */
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredNodes.map((node) => {
                  const config = CATEGORY_CONFIG[node.category] || CATEGORY_CONFIG.service;
                  const Icon = config.icon;
                  const isSelected = selectedNode?.id === node.id;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`p-4 rounded-xl cursor-pointer transition-all border bg-white relative ${
                        isSelected 
                          ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md' 
                          : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className={`p-2 rounded-lg ${config.bg} ${config.color} border ${config.border}`}>
                          <Icon size={18} />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          node.status === 'active' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : node.status === 'in_progress'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}>
                          {node.status.replace('_', ' ')}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-slate-900">{node.label}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">{node.description}</p>

                      {node.specs && (
                        <div className="mt-2 text-[11px] text-slate-500 font-mono bg-slate-50 p-1.5 rounded-lg border border-slate-200/60 line-clamp-1">
                          {node.specs}
                        </div>
                      )}

                      {node.connections && node.connections.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                          <ArrowRight size={12} className="text-blue-600" />
                          <span>Feeds {node.connections.length} component(s)</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {viewMode === 'specs' && (
            /* Technical Specs Matrix View */
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                    <th className="pb-3 pr-4">Module Component</th>
                    <th className="pb-3 px-3">Tier</th>
                    <th className="pb-3 px-3">Status</th>
                    <th className="pb-3 px-3">Specifications</th>
                    <th className="pb-3 pl-3">Downstream</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredNodes.map((node) => {
                    const config = CATEGORY_CONFIG[node.category] || CATEGORY_CONFIG.service;
                    return (
                      <tr 
                        key={node.id}
                        onClick={() => setSelectedNode(node)}
                        className={`cursor-pointer hover:bg-white transition-colors ${selectedNode?.id === node.id ? 'bg-blue-50/60 font-bold' : ''}`}
                      >
                        <td className="py-3 pr-4 font-bold text-slate-900">
                          {node.label}
                          <span className="block text-[10px] font-mono text-slate-400 font-normal">{node.id}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${config.badgeBg} ${config.badgeText}`}>
                            {node.category}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            node.status === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                          }`}>
                            {node.status}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-mono text-[11px] text-slate-600 max-w-xs truncate">
                          {node.specs || 'Enterprise Standard Stack'}
                        </td>
                        <td className="py-3 pl-3 font-mono text-[11px] text-blue-600">
                          {node.connections.join(', ') || 'Terminal'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Bottom helper info */}
          <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-xl flex items-center justify-between text-xs text-blue-900">
            <span className="flex items-center gap-2 font-medium">
              <Info size={14} className="text-blue-600 shrink-0" /> Click any architecture node to inspect specs, throughput & dataflow
            </span>
            <span className="font-bold">{nodes.length} total active modules</span>
          </div>
        </div>

        {/* Right Node Inspector Panel (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {selectedNode ? (
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5"
              >
                {/* Node Top Meta */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                      {selectedNode.category} Layer
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      selectedNode.status === 'active' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : selectedNode.status === 'in_progress'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {selectedNode.status.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">{selectedNode.label}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{selectedNode.description}</p>
                </div>

                {/* Technical Specs Card */}
                {selectedNode.specs && (
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Terminal size={12} className="text-blue-600" /> Technology Stack &amp; Specs
                    </div>
                    <div className="text-xs font-mono text-slate-800 font-semibold">{selectedNode.specs}</div>
                  </div>
                )}

                {/* Live Performance & Security Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Zap size={12} className="text-amber-500" /> Target Latency
                    </div>
                    <div className="text-sm font-black text-slate-900 mt-0.5">&lt; 35ms Edge</div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <ShieldCheck size={12} className="text-emerald-500" /> Security
                    </div>
                    <div className="text-sm font-black text-slate-900 mt-0.5">TLS 1.3 + JWT</div>
                  </div>
                </div>

                {/* Downstream Connections */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Network size={14} className="text-blue-600" /> Downstream Connected Nodes
                  </h4>

                  {selectedNode.connections && selectedNode.connections.length > 0 ? (
                    <div className="space-y-1.5">
                      {selectedNode.connections.map((connId) => {
                        const targetNode = nodes.find(n => n.id === connId);
                        return (
                          <div
                            key={connId}
                            onClick={() => targetNode && setSelectedNode(targetNode)}
                            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 cursor-pointer flex items-center justify-between text-xs transition-colors shadow-2xs"
                          >
                            <span className="font-bold text-slate-800">
                              {targetNode ? targetNode.label : connId}
                            </span>
                            <ChevronRight size={14} className="text-blue-600" />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic bg-white p-3 rounded-xl border border-slate-200">
                      Terminal node (no downstream connections).
                    </p>
                  )}
                </div>

                {/* Submit Custom Architecture Request */}
                <form onSubmit={handleCustomRequest} className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Send size={12} className="text-blue-600" /> Request Custom Specification
                    </label>
                  </div>

                  {inquirySuccess && (
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 size={14} /> {inquirySuccess}
                    </div>
                  )}

                  <textarea
                    rows={2}
                    required
                    value={requestNote}
                    onChange={(e) => setRequestNote(e.target.value)}
                    placeholder={`Submit a note or custom integration requirement for ${selectedNode.label}...`}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 leading-relaxed"
                  />

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    {isPending ? 'Sending...' : 'Submit Architecture Inquiry'}
                  </button>
                </form>

              </motion.div>
            ) : (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center text-slate-400">
                Select a node to inspect specifications.
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
