import React from 'react';
import { redirect } from 'next/navigation';
import { getCurrentMember } from '@/lib/portal-auth';
import PortalAuthForm from './PortalAuthForm';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Access Platform & Members Portal | Achtrex',
  description: 'Sign up to access your tailored engineering workspace, live project updates, architecture diagramming, and scope cart deliverables.'
};

export const dynamic = 'force-dynamic';

export default async function PortalPage() {
  const currentMember = await getCurrentMember();
  if (currentMember) {
    redirect('/portal/dashboard');
  }

  return (
    <main className="min-h-screen bg-[#001017] text-white relative overflow-x-hidden font-sans flex flex-col justify-between">
      {/* Background Video Layer — 100% sharp and unblurred */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/aaia-poster.jpg"
          alt="Portal Background"
          fill
          priority
          quality={80}
          className="object-cover -z-10"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/aaia-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/aaia-video.mp4" type="video/mp4" />
        </video>
        {/* Transparent Cyber Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,169,206,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,206,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Transparent dark gradient for text contrast without hiding video */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001017]/70 via-[#001017]/35 to-[#001017]/85 pointer-events-none" />
      </div>

      {/* Sleek Minimal Portal Header (replaces standard website Navbar) */}
      <header className="relative z-20 w-full border-b border-cyan-500/15 bg-black/40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Achtrex Logo"
              width={130}
              height={36}
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
              Client Portal
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/15 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Achtrex</span>
          </Link>
        </div>
      </header>

      {/* Main Portal Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 md:py-14 flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Dedicated Engineering &amp; Architecture Portal
          </h1>
          <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Submit your project requirements, track live architecture topology, inspect real-time development milestones, and manage scope deliverables.
          </p>
        </div>

        {/* Auth & Project Request Component */}
        <PortalAuthForm />
      </div>

      {/* Clean Minimal Portal Footer Note */}
      <footer className="relative z-10 w-full border-t border-white/10 py-6 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Achtrex Corporation. All rights reserved. Encrypted Enterprise Connection.</p>
      </footer>
    </main>
  );
}
