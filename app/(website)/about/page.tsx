import { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About Achtrex | Technology, Creativity & Intelligence Studio',
  description: 'Achtrex is a digital experience and technology studio. We build real-time 3D configurators, spatial interfaces, custom AI architectures, and high-performance digital products.',
  keywords: [
    'About Achtrex',
    'Achtrex Studio',
    'Digital Experience Studio',
    '3D WebGL Configurator Agency',
    'Spatial Computing Studio',
    'AI Multi-Agent Architects',
    'Achtrex'
  ],
  alternates: {
    canonical: 'https://achtrex.com/about',
  },
  openGraph: {
    title: 'About Achtrex | Technology, Creativity & Intelligence Studio',
    description: 'We design and build digital experiences where technology, creativity and intelligence come together.',
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
    description: 'Achtrex is a digital experience and technology studio.',
    images: ['/studio-assets/aerial-intro-bg.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://achtrex.com/about#webpage',
  'name': 'About Achtrex Studio',
  'url': 'https://achtrex.com/about',
  'description': 'Achtrex is a Digital Experience & Technology Studio.',
  'mainEntity': {
    '@type': 'Corporation',
    '@id': 'https://achtrex.com/#corporation',
    'name': 'Achtrex',
    'legalName': 'Achtrex',
    'url': 'https://achtrex.com',
    'logo': 'https://achtrex.com/logo.png',
    'address': {
      '@type': 'PostalAddress',
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
