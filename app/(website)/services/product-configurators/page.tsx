import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Product Configuration & Customization',
  description: 'Interactive real-time 3D configurators, tangible material swatches, and high-performance product customization engines.',
  openGraph: {
    title: 'Product Configuration & Customization | Achtrex Studio',
    description: 'We develop real-time 3D configurators with procedural rule engines, high-fidelity materials, and instant visual feedback.',
    images: ['/studio-assets/preview-b2311f23-4s.jpg'],
  },
};

export default function ProductConfiguratorsPage() {
  const service = ServicesDB.getBySlug('product-configurators') ?? SERVICES.find((s) => s.id === 'product-configurators');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
