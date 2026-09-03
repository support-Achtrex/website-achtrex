import React from 'react';
import { Metadata } from 'next';
import { InnerPageHeader } from '@/components/inner-page-header';
import { SolutionsMegaMenu } from '@/components/home-page/solutions-mega-menu';

export const metadata: Metadata = {
  title: 'Our Services & Solutions | Achtrex Automotive Technology',
  description: 'Explore the complete portfolio of Achtrex automotive solutions: Automotive Data & APIs, Sales & Inventory Cloud, Custom Software Builds, and Cognitive AI Solutions.',
  openGraph: {
    title: 'Our Services & Solutions | Achtrex Automotive Technology',
    description: 'Enterprise automotive technology solutions, VIN APIs, dealer inventory systems, and cognitive AI.',
    images: ['/projects/aaia_ui_v2.png'],
  }
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-24">
      {/* 1. Header */}
      <InnerPageHeader 
        title="Our Services & Solutions" 
        subtitle="A single interface for a highly customized portfolio of automotive services, intelligent APIs, and cognitive platforms." 
        theme="data" 
      />

      {/* 2. Embedded Mega Menu Component */}
      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 flex justify-center">
        <SolutionsMegaMenu />
      </main>
    </div>
  );
}
