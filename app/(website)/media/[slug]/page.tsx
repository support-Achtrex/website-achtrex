import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MediaDB } from '@/lib/media-db';
import { TeslaRoadsterMediaExperience } from '@/components/studio/TeslaRoadsterMediaExperience';
import { TeslaMediaArticleExperience } from '@/components/tesla/TeslaMediaArticleExperience';

interface MediaDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const items = MediaDB.getAll();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: MediaDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = MediaDB.getBySlug(slug);

  if (!item) {
    return {
      title: 'Media Not Found | Achtrex',
      description: 'The requested media release or story could not be found.',
    };
  }

  return {
    title: `${item.title.replace(/[“”"]/g, '')} | Achtrex Media`,
    description: item.summary || item.subtitle,
    alternates: {
      canonical: `https://achtrex.com/media/${item.slug}`,
    },
    openGraph: {
      title: `${item.title.replace(/[“”"]/g, '')} | Achtrex`,
      description: item.summary || item.subtitle,
      url: `https://achtrex.com/media/${item.slug}`,
      images: [
        {
          url: item.mediaUrl.startsWith('http') ? item.mediaUrl : `https://achtrex.com${item.mediaUrl}`,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title.replace(/[“”"]/g, '')} | Achtrex`,
      description: item.summary || item.subtitle,
      images: [item.mediaUrl.startsWith('http') ? item.mediaUrl : `https://achtrex.com${item.mediaUrl}`],
    },
  };
}

export const revalidate = 0;

export default async function MediaDetailPage({ params }: MediaDetailPageProps) {
  const { slug } = await params;
  const item = MediaDB.getBySlug(slug);

  if (!item) {
    notFound();
  }

  const allItems = MediaDB.getAll();
  const relatedItems = allItems.filter((i) => i.id !== item.id).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `https://achtrex.com/media/${item.slug}#article`,
    headline: item.title,
    description: item.summary || item.subtitle,
    datePublished: item.date,
    url: `https://achtrex.com/media/${item.slug}`,
    image: [item.mediaUrl.startsWith('http') ? item.mediaUrl : `https://achtrex.com${item.mediaUrl}`],
    publisher: {
      '@type': 'Corporation',
      name: 'Achtrex',
      url: 'https://achtrex.com',
      logo: 'https://achtrex.com/logo.png',
    },
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
        name: 'Media',
        item: 'https://achtrex.com/media',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: item.title,
        item: `https://achtrex.com/media/${item.slug}`,
      },
    ],
  };

  // Dedicated Tesla Roadster media experience
  if (slug === 'together-towards-new-sustainable-goals') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
        />
        <TeslaRoadsterMediaExperience item={item} relatedItems={relatedItems} />
      </>
    );
  }

  // Tesla-inspired cinematic presentation for all other media articles
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <TeslaMediaArticleExperience item={item} relatedItems={relatedItems} />
    </>
  );
}
