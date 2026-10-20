'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  ShieldCheck, 
  ArrowLeft,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { STUDIO_CONFIG } from '@/data/studio-data';
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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
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

        {/* 2-Column Layout: Embedded Calendly on Left + Studio Assurance on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Live Inline Calendly Container (Stays on Achtrex.com) */}
          <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-3 border border-white/10 relative min-h-[760px]">
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
              height="760"
              frameBorder="0"
              title="Schedule a meeting with Achtrex"
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-[760px] rounded-2xl bg-white"
            />
          </div>

          {/* Right Column: Studio Coordinates & Guarantees */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 1: Studio Assurance */}
            <div className="p-6 sm:p-8 bg-white/[0.03] border border-white/10 rounded-3xl space-y-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00A9CE]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-clash text-base font-medium text-white">Direct Studio Access</h4>
                  <p className="text-xs text-white/50">Senior leadership &bull; No intermediaries</p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-light text-white/70 leading-relaxed border-t border-white/10 pt-4">
                <p>
                  You will meet directly with technical architects and creative directors who design and deploy production systems.
                </p>
                <p>
                  All project briefs, architectural concepts, and strategic discussions are protected under mutual non-disclosure (NDA).
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs font-mono text-white/60">
                <div className="flex items-center justify-between">
                  <span>Session Length:</span>
                  <span className="text-white font-medium">30 Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Meeting Room:</span>
                  <span className="text-white font-medium">Google Meet / Zoom</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Confirmation:</span>
                  <span className="text-white font-medium">Instant Calendar Invite</span>
                </div>
              </div>
            </div>

            {/* Card 2: Immediate Contact Channels */}
            <div className="p-6 sm:p-8 bg-white/[0.03] border border-white/10 rounded-3xl space-y-4 font-mono text-xs backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-widest text-[#00A9CE] block">
                Need Immediate Assistance?
              </span>

              <div className="space-y-3 pt-1">
                <a
                  href={STUDIO_CONFIG.phoneHref}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-white/50" />
                    <span>Direct Studio Line:</span>
                  </span>
                  <span className="text-[#00A9CE] font-bold">{STUDIO_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={STUDIO_CONFIG.emailHref}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-white/50" />
                    <span>Direct Inquiries:</span>
                  </span>
                  <span className="text-white font-bold">{STUDIO_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
