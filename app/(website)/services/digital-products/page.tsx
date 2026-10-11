import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';

export const metadata: Metadata = {
  title: 'Digital Products',
  description: 'Digital products people genuinely enjoy using. Web applications, mobile applications, digital platforms, product strategy, and custom platforms.',
  openGraph: {
    title: 'Digital Products | Achtrex Studio',
    description: 'We conceive, architect, and engineer digital products and platforms designed for longevity, performance, and commercial impact.',
    images: ['/studio-assets/service-digital-products.jpg'],
  },
};

export default function DigitalProductsPage() {
  const service = SERVICES.find((s) => s.id === 'digital-products');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
