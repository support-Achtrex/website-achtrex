import { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About Achtrex | Technology, Creativity & Intelligence Studio',
  description: 'Achtrex is a digital experience and technology studio based in Dubai Silicon Oasis. We build real-time 3D configurators, spatial interfaces, custom AI architectures, and high-performance digital products.',
  keywords: [
    'About Achtrex',
    'Achtrex Studio Dubai',
    'Dubai Silicon Oasis Technology Studio',
    'Digital Experience Studio',
    '3D WebGL Configurator Agency',
    'Spatial Computing Studio',
    'AI Multi-Agent Architects',
    'Achtrex Technology - FZCO'
  ],
  alternates: {
    canonical: 'https://achtrex.com/about',
  },
  openGraph: {
    title: 'About Achtrex | Technology, Creativity & Intelligence Studio',
    description: 'We design and build digital experiences where technology, creativity and intelligence come together. Based in Dubai Silicon Oasis.',
    url: 'https://achtrex.com/about',
    siteName: 'Achtrex',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/studio-assets/aerial-intro-bg.jpg',
      width: 1200,
      height: 630,
      alt: 'Achtrex Digital Experience & Technology Studio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Achtrex | Technology, Creativity & Intelligence Studio',
    description: 'Achtrex is a digital experience and technology studio based in Dubai Silicon Oasis.',
    images: ['/studio-assets/aerial-intro-bg.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://achtrex.com/about#webpage',
  'name': 'About Achtrex Studio',
  'url': 'https://achtrex.com/about',
  'description': 'Achtrex is a Digital Experience & Technology Studio based in Dubai Silicon Oasis.',
  'mainEntity': {
    '@type': 'Corporation',
    '@id': 'https://achtrex.com/#corporation',
    'name': 'Achtrex',
    'legalName': 'Achtrex Technology - FZCO',
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
