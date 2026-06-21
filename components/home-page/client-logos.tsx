'use client';
import React from 'react';

export const ClientLogos = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-[#001a22]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">
          Trusted by innovative automotive businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Carkasa Logo Placeholder */}
          <div className="flex items-center gap-2 font-bold text-2xl text-slate-400">
            <svg className="w-8 h-8 text-[#00a9ce]" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CARKASA
          </div>
          {/* Other placeholder logos */}
          <div className="text-xl font-bold text-slate-400 tracking-tight">AutoLeads</div>
          <div className="text-xl font-black text-slate-400 tracking-tighter">Velocity<span className="text-[#00a9ce]">DMS</span></div>
          <div className="text-xl font-bold text-slate-400">DriveSync</div>
          <div className="text-xl font-semibold text-slate-400 uppercase tracking-widest">Shift<span className="font-light">Motors</span></div>
        </div>
      </div>
    </section>
  );
};
