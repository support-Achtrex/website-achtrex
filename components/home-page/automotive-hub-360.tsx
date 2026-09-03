'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const AutomotiveHub360 = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-slate-100 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 360 Spiral Road Telemetry Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#000d14] group">
              <Image
                src="/images/home_360_hub.jpg"
                alt="Achtrex 360 Automotive Hub Architecture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              
              {/* Subtle 360 HUD Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <span className="text-[11px] font-mono tracking-widest text-cyan-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 uppercase">
                  360° Real-Time Telemetry
                </span>
                <span className="text-[11px] font-mono text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  v4.8 ACTIVE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information & Crimson Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-start space-y-6"
          >
            {/* Top Red Crimson Banner Box */}
            <div className="w-full bg-[#B30D2B] text-white px-6 py-5 rounded-none shadow-md">
              <p className="text-base sm:text-lg font-medium leading-snug">
                Welcome into the <strong className="font-bold">#1 Automotive Hub</strong> of customized services and enterprise platforms.
              </p>
            </div>

            {/* Emblem / Badge & Titles */}
            <div className="flex items-start gap-5 pt-2">
              <div className="w-20 h-20 bg-[#B30D2B] text-white rounded-none p-2 flex flex-col justify-center items-center text-center shrink-0 shadow-sm">
                <span className="text-2xl font-black leading-none tracking-tighter">26</span>
                <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5 border-t border-white/40 pt-0.5 w-full">ACHTREX</span>
                <span className="text-[7px] text-white/80 font-mono">2024 - 2026</span>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                  ACHTREX: AUTOMOTIVE EXPERT
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2 font-normal">
                  Technical and commercial database, AI diagnostic modules and enterprise automotive datasets always up-to-date. Certified technical appraisals and custom-made software.
                </p>
              </div>
            </div>

            {/* Actions / Sub-links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link 
                href="/products" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#B30D2B] hover:text-[#8B0A21] hover:underline transition-colors"
              >
                Explore Modules →
              </Link>
              <span className="text-slate-300">|</span>
              <Link 
                href="/about-us" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors"
              >
                About Our Infrastructure →
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
