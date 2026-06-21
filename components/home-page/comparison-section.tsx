'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const comparisonData = [
  {
    factor: 'Deep Automotive Domain Expertise',
    achtrex: 'Scalable software and data APIs built specifically for the automotive industry.',
    others: 'Generic software development without industry context.'
  },
  {
    factor: 'AI-First Development Approach',
    achtrex: 'Custom LLMs, predictive analytics and AI-driven features built into every product.',
    others: 'Basic feature-based development lacking modern AI.'
  },
  {
    factor: 'Live Data & Compliance',
    achtrex: 'Built to massive scale with secure, real-time automotive data streams.',
    others: 'Fragmented data from expensive third-party vendors.'
  },
  {
    factor: 'Modern UX & UI Strategy',
    achtrex: 'Interfaces designed specifically for automotive marketplaces, dealers, and consumers.',
    others: 'Standard, generic UI templates.'
  },
  {
    factor: '100% In-House Team',
    achtrex: 'Designers, developers, and QA engineers working together under one roof.',
    others: 'Outsourced or freelance teams.'
  },
  {
    factor: 'Scalable Cloud Architecture',
    achtrex: 'Cloud-native systems built to grow with your data demands from day one.',
    others: 'Architecture that requires constant refactoring.'
  },
  {
    factor: 'Transparent Pricing Model',
    achtrex: 'Fixed-scope, milestone-based billing and zero hidden fees.',
    others: 'Unclear pricing with scope creep risks.'
  },
  {
    factor: 'Post-Launch Growth Partnership',
    achtrex: 'Ongoing optimization and growth support long after your product goes live.',
    others: 'Limited maintenance support.'
  }
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Header text */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-4"
          >
            Why Businesses Choose Achtrex over Other Technology Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] md:text-[16px] text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Partner with Achtrex to transform your vision into high-performing automotive applications built for the fast-evolving digital economy. With proven expertise, enterprise-grade scalability, and a dedicated in-house team, we deliver solutions that position your business for long-term success.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full pb-4"
        >
          <div className="w-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            
            {/* Table Header (Hidden on Mobile) */}
            <div className="hidden lg:grid grid-cols-[1.2fr_1.5fr_1.2fr]">
              <div className="bg-[#f4f7f9] p-5 md:p-6 font-bold text-slate-900 text-lg flex items-center">
                Key Factors
              </div>
              <div className="bg-[#00a9ce] p-5 md:p-6 font-bold text-white text-xl flex items-center justify-center">
                Achtrex
              </div>
              <div className="bg-[#f4f7f9] p-5 md:p-6 font-bold text-slate-900 text-lg flex items-center">
                Other Companies
              </div>
            </div>
            
            {/* Table Body */}
            <div className="flex flex-col">
              {comparisonData.map((row, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1.5fr_1.2fr] border-b border-slate-100 last:border-0">
                    <div className="p-6 text-slate-900 font-bold text-lg lg:text-[15px] flex items-center bg-[#f4f7f9] lg:bg-transparent border-b border-slate-200 lg:border-none">
                      {row.factor}
                    </div>
                    <div className={cn(
                      "p-6 text-white flex items-center gap-4",
                      isEven ? "bg-[#009bc2]" : "bg-[#00a9ce]"
                    )}>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/20">
                        <Check className="w-5 h-5 text-white" weight="bold" />
                      </div>
                      <span className="text-[15px] font-medium leading-relaxed">
                        {row.achtrex}
                      </span>
                    </div>
                    <div className="p-6 text-slate-500 text-[15px] flex items-center border-t border-slate-100 lg:border-none bg-slate-50 lg:bg-transparent">
                      {row.others}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
