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

function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function parseDateToIso(dateStr?: string): string {
  if (!dateStr) return new Date().toISOString();
  try {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const [d, m, y] = parts;
      return new Date(parseInt(y), parseInt(m) - 1, parseInt(d), 9, 0, 0).toISOString();
    }
  } catch (_) {}
  return new Date().toISOString();
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

  const cleanTitle = item.title.replace(/[“”"']/g, '').trim();
  const rawDesc = item.summary || item.subtitle || (item.content ? stripHtml(item.content).slice(0, 160) : 'Official Achtrex Newsroom Release');
  const metaDescription = stripHtml(rawDesc).slice(0, 160).trim();
  const isoPublishedDate = parseDateToIso(item.date);
  const primaryImageUrl = item.mediaUrl.startsWith('http')
    ? item.mediaUrl
    : `https://achtrex.com${item.mediaUrl}`;

  return {
    title: `${cleanTitle} | Achtrex Newsroom`,
    description: metaDescription,
    alternates: {
      canonical: `https://achtrex.com/media/${item.slug}`,
    },
    openGraph: {
      title: `${cleanTitle} | Achtrex`,
      description: metaDescription,
      url: `https://achtrex.com/media/${item.slug}`,
      siteName: 'Achtrex',
      locale: 'en_US',
      type: 'article',
      publishedTime: isoPublishedDate,
      modifiedTime: isoPublishedDate,
      authors: ['https://achtrex.com', 'Achtrex Engineering'],
      section: item.category || 'Technology',
      tags: [
        item.category || 'Technology',
        'Achtrex',
        'Innovation',
        'Spatial Computing',
        'Digital Twins',
        cleanTitle,
      ],
      images: [
        {
          url: primaryImageUrl,
          secureUrl: primaryImageUrl,
          width: 1200,
          height: 630,
          alt: cleanTitle,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@achtrex',
      creator: '@achtrex',
      title: `${cleanTitle} | Achtrex`,
      description: metaDescription,
      images: [primaryImageUrl],
    },
    keywords: [
      item.category || 'Technology',
      cleanTitle,
      'Achtrex',
      'Innovation',
      'Engineering',
      'Spatial Technology',
      'Executive Briefing',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
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

  const cleanTitle = item.title.replace(/[“”"']/g, '').trim();
  const rawDesc = item.summary || item.subtitle || (item.content ? stripHtml(item.content).slice(0, 160) : 'Official Achtrex Newsroom Release');
  const metaDescription = stripHtml(rawDesc).slice(0, 160).trim();
  const isoPublishedDate = parseDateToIso(item.date);
  const primaryImageUrl = item.mediaUrl.startsWith('http')
    ? item.mediaUrl
    : `https://achtrex.com${item.mediaUrl}`;
  const plainBodyText = stripHtml(item.content || item.summary || '');
  const wordCount = plainBodyText.split(/\s+/).filter(Boolean).length;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `https://achtrex.com/media/${item.slug}#article`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://achtrex.com/#website',
      name: 'Achtrex',
      url: 'https://achtrex.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://achtrex.com/media/${item.slug}`,
    },
    headline: cleanTitle.slice(0, 110),
    alternativeHeadline: item.subtitle ? item.subtitle.replace(/[“”"']/g, '').trim() : undefined,
    description: metaDescription,
    articleBody: plainBodyText,
    articleSection: item.category || 'Technology',
    keywords: [item.category || 'Technology', 'Achtrex', 'Innovation', 'Engineering'].join(', '),
    wordCount: wordCount,
    inLanguage: 'en-US',
    isAccessibleForFree: 'true',
    datePublished: isoPublishedDate,
    dateModified: isoPublishedDate,
    url: `https://achtrex.com/media/${item.slug}`,
    image: [
      primaryImageUrl,
      ...(item.galleryImages || []).map((img) => (img.startsWith('http') ? img : `https://achtrex.com${img}`)),
    ].filter(Boolean),
    author: {
      '@type': 'Organization',
      name: 'Achtrex Editorial Board',
      url: 'https://achtrex.com',
    },
    publisher: {
      '@type': 'Corporation',
      name: 'Achtrex',
      url: 'https://achtrex.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://achtrex.com/logo.png',
        width: 600,
        height: 60,
      },
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
