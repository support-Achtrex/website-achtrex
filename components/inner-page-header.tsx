'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface InnerPageHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: string;
  theme?: 'default' | 'data' | 'ai' | 'sales' | 'software' | 'purple' | 'cyan' | 'green' | 'blue';
}

const themeGradients: Record<string, string> = {
  default: 'from-[#031525] via-[#053b5c] to-[#008cb0]',
  data: 'from-[#02182b] via-[#014f86] to-[#00a9ce]',
  ai: 'from-[#140b2e] via-[#311042] to-[#79155b]',
  sales: 'from-[#1a0933] via-[#581c4e] to-[#9f1239]',
  software: 'from-[#001f29] via-[#024959] to-[#00a9ce]',
  purple: 'from-[#16003b] via-[#41006f] to-[#720455]',
  cyan: 'from-[#00172e] via-[#024a70] to-[#00a9ce]',
  green: 'from-[#002220] via-[#014841] to-[#76bc1d]',
  blue: 'from-[#030d22] via-[#023e8a] to-[#0077b6]',
};

export const InnerPageHeader = ({ title, subtitle, gradient, theme = 'default' }: InnerPageHeaderProps) => {
  const activeGradient = gradient || themeGradients[theme] || themeGradients.default;

  return (
    <div className={`w-full relative overflow-hidden bg-gradient-to-r ${activeGradient} pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-28 px-6 shadow-inner`}>
      {/* Dark overlay blend for deep contrast */}
      <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply pointer-events-none" />

      {/* Isometric 3D Cube Mesh Grid Texture */}
      <div className="absolute inset-0 bg-cube-mesh opacity-25 pointer-events-none" />

      {/* Subtle ambient lighting glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Centered Content */}
      <div className="max-w-[1200px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 md:mb-6 drop-shadow-md leading-[1.15]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-xs">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Clean Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
    </div>
  );
};
