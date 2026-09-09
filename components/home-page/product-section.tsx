'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/buttons';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';

export const ProductSection = () => {
  const router = useRouter();

  return (
    <section id="products" className="py-24 relative bg-background overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gradient text-sm font-bold tracking-widest uppercase mb-4 block"
          >
            Our Internal Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Market-Ready Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl"
          >
            Achtrex builds and operates specialized automotive software platforms, cognitive AI diagnostic systems, and operational advisory solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Automotive Software Builds */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col h-full bg-[#0a0f1c] border border-slate-200 rounded-2xl overflow-hidden hover:border-r-logo-gradient transition-all duration-300 shadow-xl relative"
          >
            {/* Status Badge */}
            <div className="absolute top-6 right-6 z-20">
              <span className="flex items-center gap-2 bg-green-500/90 text-slate-900 shadow-lg border border-slate-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-transparent animate-pulse" />
                Live Pillar
              </span>
            </div>

            {/* Card Hero Image */}
            <div className="relative h-72 w-full bg-slate-900 border-b border-slate-200 overflow-hidden">
              <Image
                src="/projects/automotive_ui_v2.jpg"
                alt="Automotive Software Builds"
                fill
                className="object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/10 to-transparent" />
            </div>

            <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
              <h3 className="text-3xl font-bold text-gradient mb-3">Automotive Software Builds</h3>
              <p className="text-gradient text-sm font-bold uppercase tracking-widest mb-6">Bespoke Systems Engineering</p>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Power your automotive business with bespoke software architectures. We build custom dealership portals, workshop bay schedulers, fleet management platforms, parts catalog systems, and mobile technician workflows with 100% client code ownership.
              </p>
            </div>
            
            <div className="p-8 md:p-10 pt-0 mt-auto">
              <Link 
                href="/solutions/automotive-software" 
                className="w-full btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner !py-4">
                  <span>Explore Software Builds</span>
                  <ExternalLink size={18} className="text-[#00A9CE]" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* AI Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group flex flex-col h-full bg-[#0a0f1c] border border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 relative"
          >
            {/* Status Badge */}
            <div className="absolute top-6 right-6 z-20">
              <span className="flex items-center gap-2 bg-[#111827]/90 text-secondary border border-slate-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                Architecture Phase
              </span>
            </div>

            {/* Card Hero Image */}
            <div className="relative h-72 w-full bg-slate-900 border-b border-slate-200 overflow-hidden">
              <Image
                src="/projects/aaia_ui_v2.png"
                alt="AAIA Logic Framework"
                fill
                className="object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/10 to-transparent" />
            </div>

            <div className="p-8 md:p-10 flex-grow relative z-10 pt-4">
              <h3 className="text-3xl font-bold text-gradient mb-3">AAIA</h3>
              <p className="text-gradient text-sm font-bold uppercase tracking-widest mb-6">Intelligent AI Platform</p>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                AAIA is an intelligent AI platform that allows businesses and developers to create smart agents that can understand, respond, automate tasks, and interact with data in real time.
              </p>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

// Database Icon wrapper
function Database(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
