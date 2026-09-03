import React from 'react';
import { Metadata } from 'next';
import { AboutContent } from '@/components/about-page/about-content';

export const metadata: Metadata = {
  title: 'About Us | Achtrex Technology FZCO — Automotive Data & Aftermarket Solutions',
  description: 'Learn about Achtrex Technology FZCO — setting the data standard for the independent automotive aftermarket with enterprise VIN APIs, dealer inventory platforms, and neutral infrastructure.',
  keywords: [
    'Achtrex Technology FZCO', 
    'Automotive Aftermarket Data', 
    'VIN Decoding API', 
    'Dealership Inventory Systems', 
    'Automotive AI Solutions'
  ],
  alternates: {
    canonical: 'https://achtrex.com/about-us',
  },
  openGraph: {
    title: 'About Achtrex Technology FZCO | Automotive Data & Technology',
    description: 'Setting the automotive data standard for the independent aftermarket and enterprise mobility.',
    images: ['/projects/aaia_ui_v2.png'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About Achtrex Technology FZCO',
  'description': 'Setting the data standard for the independent automotive aftermarket with enterprise VIN APIs and custom platforms.',
  'url': 'https://achtrex.com/about-us',
  'publisher': {
    '@type': 'Organization',
    'name': 'Achtrex Technology FZCO'
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
