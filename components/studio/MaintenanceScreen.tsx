'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, Lock } from 'lucide-react';
import { TechDrivingDynamics } from '@/components/studio/TechDrivingDynamics';
import { STUDIO_CONFIG } from '@/data/studio-data';

interface MaintenanceScreenProps {
  siteName?: string;
  contactEmail?: string;
}

export function MaintenanceScreen({
  siteName = 'Achtrex',
  contactEmail = 'support@achtrex.com',
}: MaintenanceScreenProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#05070B] text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden font-sans select-none">
      {/* Background Velocity Dynamics */}
      <TechDrivingDynamics variant="minimal" showTelemetry={false} className="opacity-25" />

      {/* Top Bar / Logo */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00A9CE] to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-500/20">
            A
          </div>
          <span className="font-mono text-sm tracking-[0.25em] uppercase text-white font-semibold">
            {siteName}
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[11px] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>Under Maintenance</span>
        </div>
      </div>

      {/* Main Center Card */}
      <div className="relative z-10 max-w-3xl mx-auto my-auto text-center space-y-8 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>System Maintenance & Scheduled Upgrades</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.05]">
          Elevating Platform <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-normal">
            Performance & Design
          </span>
        </h1>

        <p className="text-base sm:text-lg text-white/60 font-light max-w-xl mx-auto leading-relaxed">
          The studio is currently undergoing architectural enhancements and real-time engine upgrades. We will be back online shortly.
        </p>

        {/* Immediate Contact Box */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono text-xs uppercase tracking-wider transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{contactEmail}</span>
          </a>

          <a
            href={STUDIO_CONFIG.phoneHref}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-mono text-xs uppercase tracking-wider transition-all"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{STUDIO_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar / Admin Portal Bypass Link */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto text-xs text-white/40 font-mono pt-6 border-t border-white/5">
        <span>&copy; {new Date().getFullYear()} {siteName}. All systems monitored.</span>

        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 text-white/50 hover:text-white transition-colors mt-3 sm:mt-0"
        >
          <Lock className="w-3 h-3" />
          <span>Admin Portal</span>
        </Link>
      </div>
    </div>
  );
}
