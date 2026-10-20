import { Metadata } from 'next';
import { PROJECTS, LEGACY_SLUG_MAP, SERVICES, ConceptExperienceItem } from '@/data/studio-data';
import { ProjectsDB } from '@/lib/projects-db';
import { TeslaProjectExperience } from '@/components/tesla/TeslaProjectExperience';

export const revalidate = 0;

function getProjectBySlug(slug: string): ConceptExperienceItem {
  const resolved = (LEGACY_SLUG_MAP && LEGACY_SLUG_MAP[slug]) || slug;
  return ProjectsDB.getBySlug(resolved) || PROJECTS.find((p) => p.slug === resolved) || PROJECTS[0];
}

export async function generateStaticParams() {
  const canonicalSlugs = PROJECTS.map((p) => ({ slug: p.slug }));
  const legacySlugs = Object.keys(LEGACY_SLUG_MAP).map((slug) => ({ slug }));
  return [...canonicalSlugs, ...legacySlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const imageUrl = project.heroImage || project.secondaryImage || '/studio-assets/hero-spatial-installation.jpg';
  const canonicalUrl = `https://achtrex.com/projects/${project.slug}`;

  return {
    title: `${project.title} : Achtrex Concept`,
    description: project.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Achtrex Concept Experience`,
      description: project.shortDescription,
      url: canonicalUrl,
      siteName: 'Achtrex',
      type: 'article',
      images: [
        {
          url: imageUrl.startsWith('http') ? imageUrl : `https://achtrex.com${imageUrl}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Achtrex Concept Experience`,
      description: project.shortDescription,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const relatedService = SERVICES.find((s) => s.id === project.serviceId) || SERVICES[0];

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://achtrex.com/projects/${project.slug}#creativework`,
    name: project.title,
    headline: project.subtitle || project.title,
    description: project.shortDescription,
    url: `https://achtrex.com/projects/${project.slug}`,
    image: project.heroImage || project.secondaryImage,
    creator: {
      '@type': 'Corporation',
      name: 'Achtrex',
      url: 'https://achtrex.com',
    },
    keywords: [...(project.technicalCapabilities || []), ...(project.techStack || [])].join(', '),
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://achtrex.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://achtrex.com/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://achtrex.com/projects/${project.slug}`,
      },
    ],
  };

  const allProjects = ProjectsDB.getAll();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <TeslaProjectExperience
        project={project}
        relatedService={relatedService}
        allProjects={allProjects}
      />
    </>
  );
}
