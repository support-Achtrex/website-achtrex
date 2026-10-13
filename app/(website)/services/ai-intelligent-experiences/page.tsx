import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailTemplate } from '@/components/studio/ServiceDetailTemplate';
import { SERVICES } from '@/data/studio-data';
import { ServicesDB } from '@/lib/services-db';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Artificial Intelligence Development Services',
  description: 'Develop intelligent AI solutions, applications and digital products that help businesses automate processes, improve decision-making and create better digital experiences.',
  alternates: {
    canonical: 'https://achtrex.com/services/ai-intelligent-experiences',
  },
  openGraph: {
    title: 'Artificial Intelligence Development Services | Achtrex Studio',
    description: 'Develop intelligent AI solutions, applications and digital products that help businesses automate processes, improve decision-making and create better digital experiences.',
    url: 'https://achtrex.com/services/ai-intelligent-experiences',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/studio-assets/service-ai-intelligent.jpg',
      width: 1200,
      height: 630,
      alt: 'Artificial Intelligence Development Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artificial Intelligence Development Services | Achtrex Studio',
    description: 'Custom AI solutions, autonomous multi-agents, RAG & LLMs, and intelligent systems.',
    images: ['/studio-assets/service-ai-intelligent.jpg'],
  },
};

export default function AiIntelligentExperiencesPage() {
  const service = ServicesDB.getBySlug('ai-intelligent-experiences') ?? SERVICES.find((s) => s.id === 'ai-intelligent-experiences');
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}
