import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Automotive & Real Estate Product Customization | Achtrex Studio',
  description: 'Interactive real-time 3D configurators, tangible material swatches, and high-performance product customization engines.',
  alternates: {
    canonical: 'https://achtrex.com/services/product-configurators',
  },
  openGraph: {
    title: 'Automotive & Real Estate Product Customization | Achtrex Studio',
    description: 'We develop real-time 3D configurators with procedural rule engines, high-fidelity materials, and instant visual feedback.',
    url: 'https://achtrex.com/services/product-configurators',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/preview-b2311f23-4s.jpg',
      width: 1200,
      height: 630,
      alt: 'Automotive & Real Estate Product Customization',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automotive & Real Estate Product Customization | Achtrex Studio',
    description: 'Real-time 3D PBR configurators, tangible material swatches, and rule engines.',
    images: ['/studio-assets/preview-b2311f23-4s.jpg'],
  },
};

export default function ProductConfiguratorsPage() {
  const service = ServicesDB.getBySlug('product-configurators') ?? SERVICES.find((s) => s.id === 'product-configurators');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
