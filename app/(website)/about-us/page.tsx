import React from 'react';
import { Metadata } from 'next';
import { AboutContent } from '@/components/about-page/about-content';

export const metadata: Metadata = {
  title: 'About Us | Achtrex — Automotive Software, AI & Consultation',
  description: 'Learn about Achtrex — empowering the automotive ecosystem with bespoke software builds, domain-trained cognitive AI diagnostics, and strategic automotive consultation.',
  keywords: [
    'Achtrex', 
    'Automotive Software Builds', 
    'Cognitive AI Diagnostics', 
    'Automotive Consultation', 
    'Dealership Advisory'
  ],
  alternates: {
    canonical: 'https://achtrex.com/about-us',
  },
  openGraph: {
    title: 'About Achtrex | Automotive Software Builds, AI & Consultation',
    description: 'Empowering the automotive aftermarket and enterprise mobility with custom software, AI diagnostics, and strategic advisory.',
    images: ['/images/solutions/auto_software_builds.jpg'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About Achtrex',
  'description': 'Empowering the independent automotive aftermarket with bespoke software builds, cognitive AI diagnostics, and strategic consultation.',
  'url': 'https://achtrex.com/about-us',
  'publisher': {
    '@type': 'Organization',
    'name': 'Achtrex'
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-slate-900 overflow-x-hidden pt-32 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </main>
  );
}
