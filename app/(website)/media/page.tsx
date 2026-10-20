import { Metadata } from 'next';
import { MediaDB } from '@/lib/media-db';
import { MediaListingClient } from '@/components/studio/MediaListingClient';

export const metadata: Metadata = {
  title: 'Media & Real-Time Insights | Achtrex Innovation Studio',
  description: 'Technology simplifying and making everyday actions smarter and more connected: stories, events, ESG initiatives, and technological breakthroughs from Achtrex.',
  alternates: {
    canonical: 'https://achtrex.com/media',
  },
  openGraph: {
    title: 'Media & Real-Time Insights | Achtrex',
    description: 'The digital in real time: stories, events, ESG initiatives, and technological breakthroughs from Achtrex.',
    url: 'https://achtrex.com/media',
    siteName: 'Achtrex',
    type: 'website',
    images: [{
      url: '/case/roadster/roadster-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Achtrex Media and Real-Time Insights',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Real-Time Insights | Achtrex',
    description: 'Stories, events, ESG initiatives, and technological breakthroughs from Achtrex.',
    images: ['/case/roadster/roadster-hero.jpg'],
  },
};

const mediaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://achtrex.com/media#webpage',
  'name': 'Achtrex Media & Real-Time Insights',
  'url': 'https://achtrex.com/media',
  'description': 'Stories, press releases, events, ESG initiatives, and technological breakthroughs from Achtrex.',
  'publisher': {
    '@type': 'Corporation',
    'name': 'Achtrex',
    'url': 'https://achtrex.com'
  }
};

export const revalidate = 0; // Dynamic server component for instant updates when admin adds items

export default function MediaPage() {
  const mediaItems = MediaDB.getAll();

  return (
    <div className="w-full bg-[#ffffff] text-neutral-900 min-h-screen selection:bg-black selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaJsonLd) }}
      />

      {/* =========================================================================
          HERO BANNER: CLEAN MINIMALIST WHITE EDITORIAL HEADER (MATCHING IMAGE 3)
      ========================================================================== */}
      <section className="relative w-full pt-36 pb-12 sm:pt-44 sm:pb-16 px-6 sm:px-12 lg:px-20 bg-[#ffffff]">
        <div className="relative z-10 w-full max-w-[1720px] mx-auto">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
              Achtrex Newsroom // Real-Time Releases &amp; Insights
            </span>
            <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-[4.5vw] font-normal text-black tracking-tight leading-[1.05]">
              The Digital in Real Time
            </h1>
            <p className="font-sans text-base sm:text-xl text-neutral-600 font-light leading-relaxed max-w-3xl">
              Technology simplifying and making everyday actions smarter and more connected: engineering breakthroughs, design narratives, and spatial concepts from Achtrex.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEDIA LISTING CONTENT (Clean white layout with rounded cards matching Image 3)
      ========================================================================== */}
      <MediaListingClient initialItems={mediaItems} />
    </div>
  );
}
