'use client';

import React from 'react';
import Script from 'next/script';
import { Clock, Video, Globe, ShieldCheck } from 'lucide-react';

export const CalendlyBookingView = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Title & Badges */}
        <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F37021]/10 to-[#00A9CE]/10 border border-[#F37021]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F37021] to-[#00A9CE]" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-slate-800">
              Live Technical Consultation
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Book a Meeting with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] to-[#00A9CE]">
              Achtrex
            </span>
          </h1>
          <p className="text-[15px] sm:text-base text-slate-700 leading-[1.8] font-normal">
            Select a convenient date and time to speak directly with our solutions architecture and engineering team. We’ll discuss your workflows, explore our live vehicle data APIs, and scope integration feasibility.
          </p>
        </div>

        {/* Meeting Features Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F37021] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">30 Min Walkthrough</p>
              <p className="text-[11px] text-slate-500 font-medium">Tailored technical session</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-[#00A9CE] shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Google Meet</p>
              <p className="text-[11px] text-slate-500 font-medium">Screen share & live demo</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Global Timezones</p>
              <p className="text-[11px] text-slate-500 font-medium">Auto-detected local slots</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Direct Architects</p>
              <p className="text-[11px] text-slate-500 font-medium">No sales script, pure tech</p>
            </div>
          </div>
        </div>

        {/* Embedded Calendly Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative mb-16">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#F37021] via-[#FB923C] to-[#00A9CE]" />
          
          <div className="w-full min-h-[740px] relative bg-white">
            <iframe
              src="https://calendly.com/achtrex-support/30min?embed_domain=achtrex.com&embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=f37021"
              width="100%"
              height="750"
              frameBorder="0"
              title="Schedule a Meeting with Achtrex"
              className="w-full h-[750px] border-0"
            />
          </div>
        </div>
      </div>

      {/* Calendly Widget Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </main>
  );
};
