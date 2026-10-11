import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Digital Products Development Services',
  description: 'Design and engineer custom software applications, web platforms, and mobile apps built to scale with clinical precision.',
  openGraph: {
    title: 'Digital Products Development Services | Achtrex Studio',
    description: 'We turn complex requirements into high-performance web applications, enterprise SaaS systems, and digital ecosystems.',
    images: ['/studio-assets/service-digital-products.jpg'],
  },
};

export default function DigitalProductsPage() {
  const service = ServicesDB.getBySlug('digital-products') ?? SERVICES.find((s) => s.id === 'digital-products');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
