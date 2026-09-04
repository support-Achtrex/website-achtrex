import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ContactClient } from './contact-client';

export const metadata: Metadata = {
  title: 'Contact Us | Achtrex — Automotive Data & Platform Solutions',
  description: 'Connect with Achtrex. Discuss enterprise automotive dataset APIs, real-time VIN decoding infrastructure, and custom dealership cloud platforms.',
  keywords: [
    'Contact Achtrex',
    'Achtrex',
    'Automotive API Support',
    'VIN Decoding Solutions',
    'Enterprise Data Architecture',
    'Dubai Automotive Software'
  ],
  alternates: {
    canonical: 'https://achtrex.com/contact-us',
  },
  openGraph: {
    title: 'Contact Achtrex | Enterprise Mobility Solutions',
    description: 'Get in touch with our architecture team to scale your automotive data and software infrastructure.',
    images: ['/projects/aaia_ui_v2.png'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact Achtrex',
  'description': 'Direct collaboration and technical support desk for enterprise automotive data and custom software platforms.',
  'url': 'https://achtrex.com/contact-us',
  'mainEntity': {
    '@type': 'LocalBusiness',
    'name': 'Achtrex',
    'email': 'support@achtrex.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Dubai Silicon Oasis',
      'addressRegion': 'Dubai',
      'addressCountry': 'AE'
    }
  }
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-slate-900 overflow-x-hidden pt-32 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading contact desk...</div>}>
        <ContactClient />
      </Suspense>
    </main>
  );
}
