import React from 'react';
import { Metadata } from 'next';
import { LegalContent } from './legal-content';

export const metadata: Metadata = {
  title: 'Legal, Privacy & Security | Achtrex — Automotive Data Infrastructure',
  description: 'Review Achtrex Terms of Service, Privacy Policy, and Enterprise Security Architecture. Enterprise governance for automotive APIs and VIN datasets.',
  keywords: [
    'Achtrex Legal',
    'Terms of Service',
    'Privacy Policy',
    'Security Architecture',
    'Automotive Data Protection',
    'GDPR UAE Compliance'
  ],
  alternates: {
    canonical: 'https://achtrex.com/legal',
  },
  openGraph: {
    title: 'Legal, Privacy & Security | Achtrex',
    description: 'Review the unified Terms of Service, Privacy Policy, and Security Architecture governing Achtrex automotive data infrastructure.',
    images: ['/projects/aaia_ui_v2.png'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Legal, Privacy & Security — Achtrex',
  'description': 'Terms of Service, Privacy Policy, and Security Architecture for Achtrex.',
  'url': 'https://achtrex.com/legal',
  'publisher': {
    '@type': 'Organization',
    'name': 'Achtrex',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Digital Park A5 Building, 6009',
      'addressLocality': 'Dubai Silicon Oasis',
      'addressCountry': 'UAE'
    }
  }
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-slate-900 overflow-x-hidden pt-28 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalContent />
    </main>
  );
}
