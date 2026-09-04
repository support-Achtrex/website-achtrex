'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const WelcomeBanner = () => {
  return (
    <section className="w-full bg-[#FFFFFF] font-sans">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        
        {/* Left Dark Tech Box */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-[#0C1118] text-white p-10 sm:p-14 lg:p-16 flex flex-col justify-center items-start space-y-6 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#F37021]/15 rounded-full blur-[80px] pointer-events-none" />

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-3">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE]">Achtrex</span>
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#F37021] to-[#00A9CE] rounded-full" />
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-sm">
            A single interface for a highly customized portfolio of automotive services, data intelligence, and enterprise software platforms.
          </p>

          <Link 
            href="/about-us"
            className="btn-navbar-cta"
          >
            <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-xs font-black uppercase tracking-widest">
              <span>WHO WE ARE</span>
              <ArrowRight className="w-4 h-4 text-[#00A9CE]" />
            </span>
          </Link>
        </motion.div>

        {/* Right Operations Room / NOC Photo */}
        <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] bg-slate-900 overflow-hidden">
          <Image
            src="/images/home_noc_center.jpg"
            alt="Achtrex Operations and Engineering Command Center"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  );
};
