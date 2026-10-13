import React from 'react';
import { Metadata } from 'next';
import { LegalContent } from './legal-content';

export const metadata: Metadata = {
  title: 'Legal, Privacy & Security Hub | Achtrex Studio',
  description: 'Review Achtrex Master Terms of Service, Privacy Policy, and Enterprise Security Architecture for 3D configurators, spatial computing, and cognitive AI engineering.',
  keywords: [
    'Achtrex Legal',
    'Terms of Service',
    'Privacy Policy',
    'Security Architecture',
    'Dubai Silicon Oasis Software Governance',
    'UAE PDPL Compliance',
    'GDPR Compliance'
  ],
  alternates: {
    canonical: 'https://achtrex.com/legal',
  },
  openGraph: {
    title: 'Legal, Privacy & Security Hub | Achtrex Studio',
    description: 'Review the unified Terms of Service, Privacy Policy, and Security Architecture governing Achtrex digital products, 3D platforms, and cognitive AI solutions.',
    url: 'https://achtrex.com/legal',
    images: [{
      url: '/logo.png',
      width: 735,
      height: 638,
      alt: 'Achtrex Legal Hub',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal, Privacy & Security Hub | Achtrex Studio',
    description: 'Corporate governance and security architecture for Achtrex Technology - FZCO.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://achtrex.com/legal#webpage',
  'name': 'Legal, Privacy & Security Hub | Achtrex',
  'description': 'Master governance, privacy policies, and security architecture for Achtrex Technology - FZCO in Dubai Silicon Oasis.',
  'url': 'https://achtrex.com/legal',
  'publisher': {
    '@type': 'Corporation',
    'name': 'Achtrex Technology - FZCO',
    'url': 'https://achtrex.com',
    'logo': 'https://achtrex.com/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Digital Park A5 Building, 6009',
      'addressLocality': 'Dubai Silicon Oasis',
      'addressRegion': 'Dubai',
      'addressCountry': 'AE'
    }
  }
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black overflow-x-hidden pt-28 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalContent />
    </main>
  );
}
