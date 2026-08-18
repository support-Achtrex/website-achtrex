'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const comparisonData = [
  {
    factor: 'Deep Automotive Domain Expertise',
    achtrex: 'Scalable software and data APIs engineered exclusively for the automotive industry — VIN-native, OEM-aware, and dealer-ready from the ground up.',
    others: 'Generic software development agencies applied to automotive without domain fluency or native data understanding.'
  },
  {
    factor: 'AI-First Development Approach',
    achtrex: 'Proprietary LLMs, predictive pricing models, and autonomous AI agents are embedded into every product layer, not added as afterthoughts.',
    others: 'Basic feature-based development with no native AI intelligence or automotive-specific training data.'
  },
  {
    factor: 'Live Data & Compliance Infrastructure',
    achtrex: 'Real-time automotive data pipelines with GDPR/CCPA-aligned architecture, cryptographic data governance, and zero third-party data brokering.',
    others: 'Fragmented data sourced from expensive third-party vendors with inconsistent freshness and compliance gaps.'
  },
  {
    factor: 'Modern UX & UI Engineering',
    achtrex: 'Purpose-built interfaces designed for automotive marketplaces, franchise dealer networks, and high-intent consumer journeys at enterprise fidelity.',
    others: 'Standard generic UI templates with no automotive workflow customization or dealer-specific UX architecture.'
  },
  {
    factor: '100% In-House Engineering Team',
    achtrex: 'Dedicated designers, full-stack developers, QA engineers, and AI researchers operating under one roof with full accountability.',
    others: 'Work delegated to outsourced contractors or distributed freelance teams with fragmented responsibility.'
  },
  {
    factor: 'Scalable Cloud-Native Architecture',
    achtrex: 'Microservices-based cloud systems with edge caching, multi-region failover, and elastic capacity scaling built to handle enterprise-grade automotive data loads from day one.',
    others: 'Monolithic or under-engineered architecture requiring costly refactoring as usage scales.'
  },
  {
    factor: 'Transparent Milestone Pricing',
    achtrex: 'Fixed-scope, milestone-gated billing with itemized delivery and zero hidden fees throughout the entire engagement lifecycle.',
    others: 'Opaque hourly billing with scope creep risk, revision penalties, and unpredictable project overruns.'
  },
  {
    factor: 'Post-Launch Growth Partnership',
    achtrex: 'Structured post-deployment growth programs including analytics reviews, A/B testing cycles, infrastructure audits, and retention of full launch context.',
    others: 'Handoff-and-exit engagements with limited post-launch accountability or institutional memory retained.'
  }
];

export const ComparisonSection = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden font-sans" style={{ background: 'linear-gradient(135deg, #020d14 0%, #031828 25%, #041f2e 45%, #021a25 65%, #010e18 85%, #000c14 100%)' }}>

      {/* Rich multi-color ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#00a9ce]/20 blur-[130px]" />
        <div className="absolute top-[20%] right-[-8%] w-[500px] h-[500px] rounded-full bg-[#76bc1d]/15 blur-[110px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[550px] h-[400px] rounded-full bg-[#0263c6]/18 blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#00a9ce]/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-6"
          >
            Why Businesses Choose{' '}
            <span className="text-gradient">Achtrex</span>{' '}
            Over Other Technology Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium"
          >
            Every axis of our platform is purpose-built for automotive at enterprise scale. This is the operational and technical gap between an industry-specialist and a generalist agency.
          </motion.p>
        </div>

        {/* Comparison Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative"
        >
          {/* Column Header Row */}
          <div className="hidden lg:grid grid-cols-[1.4fr_1.8fr_1.4fr] mb-2 gap-3">
            <div className="px-7 py-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Key Factor</span>
            </div>
            <div className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#00a9ce] to-[#0080af] flex items-center justify-between shadow-lg shadow-[#00a9ce]/20">
              <span className="text-sm font-black text-white tracking-wide uppercase">Achtrex Technologies</span>
              <span className="text-[10px] font-extrabold text-white/70 uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full">Recommended</span>
            </div>
            <div className="px-7 py-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Other Companies</span>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-2">
            {comparisonData.map((row, idx) => {
              const isHovered = hoveredRow === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + idx * 0.04 }}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-[1.4fr_1.8fr_1.4fr] gap-2 lg:gap-3 rounded-2xl transition-all duration-300 cursor-default",
                    isHovered ? "scale-[1.005]" : ""
                  )}
                >
                  {/* Factor Column */}
                  <div className={cn(
                    "px-7 py-5 rounded-2xl lg:rounded-xl flex items-center border transition-all duration-300",
                    isHovered
                      ? "bg-white/8 border-white/15"
                      : "bg-white/[0.03] border-white/[0.06]"
                  )}>
                    <p className="text-[13px] sm:text-sm font-black text-slate-200 tracking-tight leading-snug">
                      {row.factor}
                    </p>
                  </div>

                  {/* Achtrex Column */}
                  <div className={cn(
                    "px-7 py-5 rounded-2xl lg:rounded-xl flex items-start gap-4 transition-all duration-300",
                    isHovered
                      ? "bg-gradient-to-r from-[#00a9ce] to-[#0090b8] shadow-xl shadow-[#00a9ce]/25"
                      : "bg-gradient-to-r from-[#00a9ce]/90 to-[#007fa8]/90 shadow-md shadow-[#00a9ce]/10"
                  )}>
                    <div className="shrink-0 mt-0.5 w-1.5 h-full min-h-[20px] rounded-full bg-white/40" />
                    <p className="text-[13px] sm:text-sm font-semibold text-white leading-relaxed">
                      {row.achtrex}
                    </p>
                  </div>

                  {/* Others Column */}
                  <div className={cn(
                    "px-7 py-5 rounded-2xl lg:rounded-xl flex items-start gap-4 border transition-all duration-300",
                    isHovered
                      ? "bg-white/5 border-white/10"
                      : "bg-white/[0.02] border-white/[0.05]"
                  )}>
                    <div className="shrink-0 mt-0.5 w-1.5 h-full min-h-[20px] rounded-full bg-slate-700" />
                    <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {row.others}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom summary bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="mt-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1.8fr_1.4fr] gap-2 lg:gap-3"
          >
            <div />
            <div className="px-7 py-5 rounded-xl bg-white/5 border border-[#00a9ce]/25 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black text-white uppercase tracking-widest">Achtrex Advantage</p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">8 of 8 critical dimensions. Zero compromise.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-black text-[#00a9ce]">8/8</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Factors Won</div>
                </div>
              </div>
            </div>
            <div className="px-7 py-5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center">
              <p className="text-[11px] text-slate-600 font-medium italic">Industry average falls short on 7 of 8 evaluated dimensions.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
