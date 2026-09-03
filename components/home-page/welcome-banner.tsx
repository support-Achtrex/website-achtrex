'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const WelcomeBanner = () => {
  return (
    <section className="w-full bg-[#FFFFFF] font-sans">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        
        {/* Left Slate Box */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-[#677573] text-white p-10 sm:p-14 lg:p-16 flex flex-col justify-center items-start space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            Welcome to <br />
            <span className="text-white">Achtrex Technologies</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed max-w-sm">
            A single interface for a highly customized portfolio of automotive services.
          </p>

          <Link 
            href="/about-us"
            className="inline-block bg-[#B30D2B] hover:bg-[#8F0A22] text-white text-xs font-black uppercase tracking-widest px-8 py-3.5 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            WHO WE ARE
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
