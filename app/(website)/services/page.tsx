import React from 'react';
import { Metadata } from 'next';
import { InnerPageHeader } from '@/components/inner-page-header';
import { SolutionsMegaMenu } from '@/components/home-page/solutions-mega-menu';

export const metadata: Metadata = {
  title: 'Our Services & Solutions | Achtrex Automotive Technology',
  description: 'Explore the 3 core Achtrex automotive solutions: Automotive Software Builds, Cognitive AI Solutions, and Automotive Consultation.',
  openGraph: {
    title: 'Our Services & Solutions | Achtrex Automotive Technology',
    description: 'Enterprise automotive technology solutions: Automotive Software Builds, Cognitive AI Solutions, and Automotive Consultation.',
    images: ['/images/solutions/auto_software_builds.jpg'],
  }
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-24">
      {/* 1. Header */}
      <InnerPageHeader 
        title="Our Services & Solutions" 
        subtitle="A unified interface for our 3 core automotive pillars: bespoke software builds, cognitive AI diagnostics, and strategic automotive consultation." 
        theme="data" 
      />

      {/* 2. Embedded Mega Menu Component */}
      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 flex justify-center">
        <SolutionsMegaMenu />
      </main>
    </div>
  );
}
