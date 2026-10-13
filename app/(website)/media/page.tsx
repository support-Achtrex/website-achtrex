import { Metadata } from 'next';
import Image from 'next/image';
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
      url: '/studio-assets/aerial-intro-bg.jpg',
      width: 1200,
      height: 630,
      alt: 'Achtrex Media and Real-Time Insights',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Real-Time Insights | Achtrex',
    description: 'Stories, events, ESG initiatives, and technological breakthroughs from Achtrex.',
    images: ['/studio-assets/aerial-intro-bg.jpg'],
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
    <div className="w-full bg-[#050b14] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaJsonLd) }}
      />
      {/* =========================================================================
          TOP HERO BANNER (Matches Reference Screenshot 2)
      ========================================================================== */}
      <section className="relative w-full pt-36 pb-24 sm:pt-44 sm:pb-32 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#070e1b]">
        {/* Decorative Ambient Mesh / Digital Silhouette Effect on Right */}
        <div className="absolute top-0 right-0 w-full sm:w-2/3 h-full pointer-events-none opacity-40 mix-blend-screen">
          <Image
            src="/studio-assets/aerial-intro-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1b] via-[#070e1b]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070e1b] via-transparent to-[#070e1b]" />
        </div>

        <div className="relative z-10 w-full max-w-[1720px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-6">
              The digital in real time
            </h1>
            <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
              Technology simplifying and making everyday actions smarter and more connected: a driver of change capable of improving our way of living, learning, working, and taking care of others
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEDIA LISTING CONTENT (White background with categories, search, 4-col grid)
      ========================================================================== */}
      <MediaListingClient initialItems={mediaItems} />
    </div>
  );
}
