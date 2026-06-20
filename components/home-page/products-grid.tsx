'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Database, Lightning, Code, ArrowRight } from "@phosphor-icons/react";

export const ProductsGrid = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-gradient leading-[1.1] tracking-tight mb-6">
            Comprehensive Solutions for <br />
            Modern Mobility
          </h2>
          <p className="text-lg text-slate-500">
            From raw data access to fully managed AI systems and custom enterprise software, we provide the foundational layers your automotive business needs to scale.
          </p>
        </motion.div>

        {/* 3 Pillars Layout */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Data & APIs */}
          <div className="bg-white rounded-none p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full group">

            <h3 className="text-2xl font-bold text-gradient mb-4">Data & APIs</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              Access the industry's most comprehensive automotive dataset. Power your applications with real-time vehicle intelligence.
            </p>
            <ul className="space-y-4 mb-10">
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">VIN Decoding (250M+ Records)</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Detailed Vehicle Specifications</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Real-time Market Valuations</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Historical Vehicle Data</span>
               </li>
            </ul>
            <div className="mt-auto">
               <Link href="/contact-us" className="inline-flex items-center gap-2 text-[#00a9ce] font-bold hover:text-[#008db0] transition-colors">
                  Test the API
                  <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
          </div>

          {/* Pillar 2: AI Solutions */}
          <div className="bg-white rounded-none p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full group">

            <h3 className="text-2xl font-bold text-gradient mb-4 relative z-10">AI Solutions</h3>
            <p className="text-slate-600 mb-8 flex-grow relative z-10">
              Integrate LUMI AI to automate workflows, assist customers, and unlock predictive insights from your data.
            </p>
            <ul className="space-y-4 mb-10 relative z-10">
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">LUMI AI Conversational Engine</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Automated Customer Support Agents</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Internal Knowledge Assistants</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Predictive Valuation Workflows</span>
               </li>
            </ul>
            <div className="mt-auto relative z-10">
               <Link href="/products/lumi" className="inline-flex items-center gap-2 text-[#76bc1d] font-bold hover:text-[#65a317] transition-colors">
                  Explore LUMI AI
                  <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
          </div>

          {/* Pillar 3: Custom Software Development */}
          <div className="bg-white rounded-none p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full group">

            <h3 className="text-2xl font-bold text-gradient mb-4">Custom Software</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              Need a bespoke platform? We design and build enterprise-grade software tailored to your specific automotive use-case.
            </p>
            <ul className="space-y-4 mb-10">
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Vehicle Marketplaces & Portals</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Dealer Management Systems (DMS)</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Auto Parts E-commerce Stores</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                  <span className="text-sm font-medium text-slate-700">Custom Web & Mobile Apps</span>
               </li>
            </ul>
            <div className="mt-auto">
               <Link href="/contact-us" className="inline-flex items-center gap-2 text-[#00a9ce] font-bold hover:text-[#008db0] transition-colors">
                  Discuss a Project
                  <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
