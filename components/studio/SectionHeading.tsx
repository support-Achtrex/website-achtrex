'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  number,
  badge,
  title,
  highlight,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 sm:mb-24 ${isCenter ? 'text-center mx-auto max-w-4xl' : 'max-w-4xl'}`}>
      {/* Top Number / Badge */}
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
        {number && (
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#00A9CE] uppercase">
            {number}
          </span>
        )}
        {badge && (
          <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase ${
            light ? 'bg-black/5 text-slate-700 border border-black/10' : 'bg-white/5 text-slate-300 border border-white/10'
          }`}>
            {badge}
          </span>
        )}
      </div>

      {/* Main Display Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] ${
          light ? 'text-[#080C11]' : 'text-white'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE]">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Subtitle / Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-6 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
            light ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
