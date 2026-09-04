'use client';

import React from 'react';
import Script from 'next/script';

export const CalendlyBookingView = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
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
