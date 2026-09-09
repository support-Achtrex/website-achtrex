'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

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
            Modern Automotive Enterprises
          </h2>
          <p className="text-lg text-slate-500">
            Automotive businesses need more than tools. They need software, intelligence, and direction. We build all three.
          </p>
        </motion.div>

        {/* 3 Pillars Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Automotive Software Builds */}
          <div className="bg-white rounded-none p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full group">
            <div className="mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#00a9ce] bg-[#00a9ce]/10 px-2.5 py-1 rounded">Pillar 01</span>
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-4 mt-2">Automotive Software Builds</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              Full-cycle bespoke engineering for dealership portals, workshop scheduling, fleet management, and automotive mobile apps with 100% client code ownership.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Dealership &amp; DMS Management Portals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Workshop &amp; Bay Operations Schedulers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Fleet Maintenance &amp; Telemetry Platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Custom Automotive Web &amp; Mobile Apps</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Link href="/solutions/automotive-software" className="inline-flex items-center gap-2 text-[#00a9ce] font-bold hover:text-[#008db0] transition-colors">
                Explore Software Builds
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Cognitive AI Solutions */}
          <div className="bg-white rounded-none p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full group">
            <div className="mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#76bc1d] bg-[#76bc1d]/10 px-2.5 py-1 rounded">Pillar 02</span>
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-4 mt-2">Cognitive AI Solutions</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              Domain-trained cognitive AI models for multimodal vehicle diagnostics, acoustic analysis, and predictive maintenance to empower technicians and service bays.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">AAIA Multi-Modal Vehicle Diagnostics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Acoustic &amp; Vibration Defect Analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Autonomous Repair Recommendation Logic</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Predictive Component Failure Detection</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Link href="/solutions/cognitive-ai" className="inline-flex items-center gap-2 text-[#76bc1d] font-bold hover:text-[#65a317] transition-colors">
                Explore Cognitive AI
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Automotive Consultation */}
          <div className="bg-white rounded-none p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full group">
            <div className="mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0284c7] bg-[#0284c7]/10 px-2.5 py-1 rounded">Pillar 03</span>
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-4 mt-2">Automotive Consultation</h3>
            <p className="text-slate-600 mb-8 flex-grow">
              Hands-on strategic advisory for businesses, manufacturers, dealerships, and repair networks on operations, diagnostic processes, and technical strategy.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#0284c7] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Workshop Workflow &amp; Bay Modernization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#0284c7] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Dealership Digital Retailing Strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#0284c7] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Diagnostic Process &amp; Throughput Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-none bg-[#0284c7] shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Executive Advisory &amp; Systems Architecture</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Link href="/solutions/automotive-consultation" className="inline-flex items-center gap-2 text-[#0284c7] font-bold hover:text-[#026aa2] transition-colors">
                Book Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
