import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Achtrex | Start Your Project',
  description: 'Connect with Achtrex Studio. Inquire about automotive 3D configurators, spatial interfaces, custom AI platforms, and digital product engineering.',
  keywords: [
    'Contact Achtrex',
    'Achtrex Studio Contact',
    'Hire 3D WebGL Agency',
    'Hire AI Development Team',
    'Achtrex Inquiries'
  ],
  alternates: {
    canonical: 'https://achtrex.com/contact',
  },
  openGraph: {
    title: 'Contact Achtrex | Start Your Project',
    description: 'Have a product, experience, or idea you want to bring to life? Connect with our digital experience and technology studio.',
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
    description: 'Connect with Achtrex Studio.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://achtrex.com/contact#webpage',
  'name': 'Contact Achtrex Studio',
  'url': 'https://achtrex.com/contact',
  'description': 'Connect with Achtrex Studio for enterprise project inquiries.',
  'mainEntity': {
    '@type': 'Corporation',
    '@id': 'https://achtrex.com/#corporation',
    'name': 'Achtrex',
    'telephone': '+971 50 222 9587',
    'email': 'hello@achtrex.com',
    'address': {
      '@type': 'PostalAddress',
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
