'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

interface InnerPageHeaderProps {
  title: string;
  subtitle?: string;
}

export const InnerPageHeader = ({ title, subtitle }: InnerPageHeaderProps) => {
  return (
    <div className="relative bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/real_enterprise_header.png"
          alt="Enterprise Header Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-90" />

      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00a9ce] opacity-[0.07] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/2 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
      
      {/* Clean Bottom Border instead of skew */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00a9ce]/30 to-transparent z-10"></div>
    </div>
  );
};
