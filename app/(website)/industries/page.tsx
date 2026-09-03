import React from 'react';
import { Metadata } from 'next';
import { InnerPageHeader } from '@/components/inner-page-header';
import { IndustriesMegaMenu } from '@/components/home-page/industries-mega-menu';

export const metadata: Metadata = {
  title: 'Industries We Empower | Achtrex Automotive Technology',
  description: 'Discover how Achtrex automotive intelligence and custom enterprise platforms drive innovation across every sector of the mobility ecosystem.',
  openGraph: {
    title: 'Industries We Empower | Achtrex Automotive Technology',
    description: 'Enterprise automotive intelligence and custom platforms for retail, dealerships, insurance, OEM, and digital mobility.',
    images: ['/projects/aaia_ui_v2.png'],
  }
};

export default function IndustriesPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-24">
      {/* 1. Header */}
      <InnerPageHeader 
        title="Industries We Empower" 
        subtitle="Discover how our automotive intelligence and custom enterprise platforms drive innovation across every sector of the mobility ecosystem." 
        theme="data" 
      />

      {/* 2. Embedded Mega Menu Component */}
      <main className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 flex justify-center">
        <IndustriesMegaMenu />
      </main>
    </div>
  );
}
