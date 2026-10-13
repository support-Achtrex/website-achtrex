import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Digital Products Development Services',
  description: 'Design and engineer custom software applications, web platforms, and mobile apps built to scale with clinical precision.',
  alternates: {
    canonical: 'https://achtrex.com/services/digital-products',
  },
  openGraph: {
    title: 'Digital Products Development Services | Achtrex Studio',
    description: 'We turn complex requirements into high-performance web applications, enterprise SaaS systems, and digital ecosystems.',
    url: 'https://achtrex.com/services/digital-products',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/service-digital-products.jpg',
      width: 1200,
      height: 630,
      alt: 'Digital Products Development Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Products Development Services | Achtrex Studio',
    description: 'High-performance web platforms, custom applications, enterprise portals, SaaS and cloud systems.',
    images: ['/studio-assets/service-digital-products.jpg'],
  },
};

export default function DigitalProductsPage() {
  const service = ServicesDB.getBySlug('digital-products') ?? SERVICES.find((s) => s.id === 'digital-products');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
