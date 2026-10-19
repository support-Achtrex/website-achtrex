import { Metadata } from 'next';
import { ServicesDB } from '@/lib/services-db';
import { ServicesOverviewClient } from './ServicesOverviewClient';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Services & Disciplines | Achtrex Studio',
  description:
    'Real-time 3D configurators, custom AI architectures, and interactive digital product engineering. Explore our 4 core studio disciplines.',
  alternates: {
    canonical: 'https://achtrex.com/services',
  },
  openGraph: {
    title: 'Services & Disciplines | Achtrex Studio',
    description:
      'Discover our full-spectrum 3D configurators, custom AI architectures, and interactive digital product capabilities.',
    url: 'https://achtrex.com/services',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/service-creative-strategy.jpg',
      width: 1200,
      height: 630,
      alt: 'Achtrex Studio Services and Disciplines',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Disciplines | Achtrex Studio',
    description:
      'Real-time 3D configurators, custom AI architectures, and digital product engineering.',
    images: ['/studio-assets/service-creative-strategy.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://achtrex.com/services#webpage',
  'name': 'Achtrex Studio Services & Capabilities',
  'url': 'https://achtrex.com/services',
  'description': 'Real-time 3D configurators, spatial computing, custom AI architectures, and interactive digital product engineering.',
  'publisher': {
    '@type': 'Corporation',
    '@id': 'https://achtrex.com/#corporation',
    'name': 'Achtrex',
    'url': 'https://achtrex.com'
  }
};

export default function ServicesOverviewPage() {
  const services = ServicesDB.getAll();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesOverviewClient services={services} />
    </>
  );
}
