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
    <div className="w-full bg-[#000000] text-white min-h-screen selection:bg-white selection:text-black font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaJsonLd) }}
      />

      {/* =========================================================================
          HERO BANNER: TESLA-INSPIRED MINIMALIST STAGE
      ========================================================================== */}
      <section className="relative w-full pt-36 pb-20 sm:pt-48 sm:pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#000000] border-b border-white/10">
        {/* Subtle Ambient Vignette Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <Image
            src="/case/roadster/roadster-stage.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-[1720px] mx-auto space-y-8">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              Achtrex Newsroom // Real-Time Releases &amp; Insights
            </span>
            <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-[5vw] font-normal text-white tracking-tight leading-[1.05] mb-6">
              The Digital in Real Time
            </h1>
            <p className="font-clash text-lg sm:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
              Technology simplifying and making everyday actions smarter and more connected: engineering breakthroughs, design narratives, and spatial concepts from Achtrex.
            </p>
          </div>

          {/* Floating Quantitative Highlights */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 font-clash">
            <div>
              <div className="text-2xl sm:text-4xl font-normal text-white tracking-tight">8</div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-1">Releases &amp; Dispatches</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-normal text-white tracking-tight">5</div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-1">Domain Sectors</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-normal text-white tracking-tight">100%</div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-1">Real-Time CGI</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-normal text-white tracking-tight">Global</div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-1">Edge Distribution</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEDIA LISTING CONTENT (Tesla dark grid with category pills and search)
      ========================================================================== */}
      <MediaListingClient initialItems={mediaItems} />
    </div>
  );
}
