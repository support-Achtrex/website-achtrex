import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';

export const metadata: Metadata = {
  title: 'Experience Design',
  description: 'We design digital experiences around the people who use them. UX, UI, interaction mechanics, prototyping, and human-machine interfaces.',
  openGraph: {
    title: 'Experience Design | Achtrex Studio',
    description: 'Human-centered digital product and interaction design that turns complexity into clarity.',
    images: ['/studio-assets/service-experience-design.jpg'],
  },
};

export default function ExperienceDesignPage() {
  const service = SERVICES.find((s) => s.id === 'experience-design');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
