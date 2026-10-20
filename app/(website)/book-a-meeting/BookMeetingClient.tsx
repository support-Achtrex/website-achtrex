'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowLeft } from 'lucide-react';
import { TechDrivingDynamics } from '@/components/studio/TechDrivingDynamics';

export function BookMeetingClient() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#070A0F] text-white pt-28 sm:pt-36 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden font-sans">
      {/* Calendly Official Widget Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Background Ambient Velocity Streamlines */}
      <TechDrivingDynamics variant="minimal" showTelemetry={false} className="opacity-25" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Studio</span>
          </Link>
        </div>

        {/* Header Breadcrumb & Title */}
        <div className="max-w-4xl mb-10 sm:mb-14 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A9CE]">
            <span>Achtrex Direct Scheduling</span>
            <span>&bull;</span>
            <span>Real-Time Calendar</span>
          </div>

          <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.04]">
            Book a Strategic Meeting
          </h1>

          <p className="font-clash text-lg sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
            Meet directly with our technology leaders and creative directors. Reserve your session below directly on the website.
          </p>
        </div>

        {/* Full-Width Live Inline Calendly Container (Stays on Achtrex.com) */}
        <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4 border border-white/10 relative min-h-[780px]">
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1117] text-white z-10 p-6 rounded-2xl">
              <div className="w-8 h-8 border-2 border-[#00A9CE] border-t-transparent rounded-full animate-spin mb-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-white/70">
                Loading Live Calendar...
              </span>
            </div>
          )}
          <iframe
            src="https://calendly.com/achtrex-support/30min?embed_domain=achtrex.com&embed_type=Inline"
            width="100%"
            height="780"
            frameBorder="0"
            title="Schedule a meeting with Achtrex"
            onLoad={() => setIframeLoaded(true)}
            className="w-full h-[780px] rounded-2xl bg-white"
          />
        </div>
      </div>
    </div>
  );
}
