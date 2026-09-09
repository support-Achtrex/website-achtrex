import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ContactClient } from './contact-client';

export const metadata: Metadata = {
  title: 'Contact Us | Achtrex — Automotive Software, AI & Consultation',
  description: 'Connect with Achtrex. Discuss bespoke automotive software builds, cognitive AI diagnostics, and strategic automotive consultation.',
  keywords: [
    'Contact Achtrex',
    'Achtrex',
    'Automotive Software Builds',
    'Cognitive AI Diagnostics',
    'Automotive Consultation',
    'Dubai Automotive Software'
  ],
  alternates: {
    canonical: 'https://achtrex.com/contact-us',
  },
  openGraph: {
    title: 'Contact Achtrex | Automotive Software & AI Solutions',
    description: 'Get in touch with our engineering team to scale your automotive software and AI infrastructure.',
    images: ['/images/solutions/auto_software_builds.jpg'],
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
      'streetAddress': 'Digital Park A5 Building, 6009',
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
