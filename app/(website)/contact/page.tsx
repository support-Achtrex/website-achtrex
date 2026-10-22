import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Achtrex | Start Your Project',
  description: 'Connect with Achtrex Studio in Dubai Silicon Oasis. Inquire about real-time 3D configurators, spatial interfaces, custom AI platforms, and digital product engineering.',
  keywords: [
    'Contact Achtrex',
    'Achtrex Studio Dubai Contact',
    'Dubai Silicon Oasis Office',
    'Hire 3D WebGL Agency',
    'Hire AI Development Team',
    'Achtrex Inquiries'
  ],
  alternates: {
    canonical: 'https://achtrex.com/contact',
  },
  openGraph: {
    title: 'Contact Achtrex | Start Your Project',
    description: 'Have a product, experience, or idea you want to bring to life? Connect with our digital experience and technology studio in Dubai Silicon Oasis.',
    url: 'https://achtrex.com/contact',
    siteName: 'Achtrex',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/logo.png',
      width: 735,
      height: 638,
      alt: 'Contact Achtrex Studio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Achtrex | Start Your Project',
    description: 'Connect with Achtrex Studio in Dubai Silicon Oasis.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://achtrex.com/contact#webpage',
  'name': 'Contact Achtrex Studio',
  'url': 'https://achtrex.com/contact',
  'description': 'Connect with Achtrex Studio in Dubai Silicon Oasis for enterprise project inquiries.',
  'mainEntity': {
    '@type': 'Corporation',
    '@id': 'https://achtrex.com/#corporation',
    'name': 'Achtrex',
    'telephone': '+971 50 222 9587',
    'email': 'hello@achtrex.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Digital Park A5 Building, 6009',
      'addressLocality': 'Dubai Silicon Oasis',
      'addressRegion': 'Dubai',
      'addressCountry': 'AE'
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
