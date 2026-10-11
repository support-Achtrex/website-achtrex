import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MediaDB, MediaItem } from '@/lib/media-db';

interface MediaDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const items = MediaDB.getAll();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: MediaDetailPageProps): Promise<Metadata> {
  const item = MediaDB.getBySlug(params.slug);

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
  };
}

export const revalidate = 0; // Fresh updates when admin updates media

export default function MediaDetailPage({ params }: MediaDetailPageProps) {
  const item = MediaDB.getBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const allItems = MediaDB.getAll();
  const relatedItems = allItems.filter((i) => i.id !== item.id).slice(0, 3);

  const isVideoUrl = (url: string) => {
    return (
      url.endsWith('.mp4') ||
      url.endsWith('.webm') ||
      url.includes('youtube.com') ||
      url.includes('youtu.be') ||
      url.includes('vimeo.com')
    );
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('vimeo.com/')) {
      const id = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${id}`;
    }
    return url;
  };

  return (
    <article className="w-full bg-white min-h-screen text-gray-900">
      {/* =========================================================================
          PLUM / DEEP PURPLE HEADER BANNER (Exact Match to Reference Screenshot 3)
      ========================================================================== */}
      <section className="relative w-full pt-36 pb-20 sm:pt-44 sm:pb-28 px-6 sm:px-12 lg:px-20 bg-[#381042] text-white overflow-hidden">
        {/* Subtle Decorative Circular Watermark on Right */}
        <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white/[0.04] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          {/* Back Navigation Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <span>← Back to all media</span>
            </Link>
          </div>

          {/* Formatted Date */}
          <div className="font-sans text-sm sm:text-base text-white/80 font-normal mb-3 tracking-wide">
            {item.dateFormatted || item.date}
          </div>

          {/* Quoted Bold Title */}
          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-4 max-w-4xl">
            {item.title}
          </h1>

          {/* Subtitle */}
          {item.subtitle && (
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl">
              {item.subtitle}
            </p>
          )}

          {/* Category Badge */}
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-mono uppercase tracking-widest rounded-sm border border-white/20">
              {item.category}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN EDITORIAL CONTENT & MEDIA (White background)
      ========================================================================== */}
      <section className="w-full bg-white py-12 sm:py-20 px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-4xl mx-auto">
          {/* Prominent Media Embed (Image or Video) */}
          <div className="mb-12 sm:mb-16 bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm">
            {item.mediaType === 'video' ? (
              isVideoUrl(item.mediaUrl) && !item.mediaUrl.includes('youtube') && !item.mediaUrl.includes('vimeo') ? (
                <div className="w-full aspect-[16/10] bg-black">
                  <video
                    src={item.mediaUrl}
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[16/10] bg-black">
                  <iframe
                    src={getEmbedUrl(item.mediaUrl)}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              )
            ) : (
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/10]">
                <Image
                  src={item.mediaUrl || '/studio-assets/service-experience-design.jpg'}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Editorial Paragraphs */}
          <div className="prose prose-lg max-w-none text-[#102a43] space-y-6 sm:space-y-8 font-sans font-light leading-relaxed text-base sm:text-lg">
            {item.content ? (
              item.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{item.summary}</p>
            )}
          </div>

          {/* Social / Sharing & Return */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1a365d] text-white text-xs sm:text-sm font-semibold rounded-sm hover:bg-[#152a48] transition-colors"
            >
              <span>← Back to all media news</span>
            </Link>

            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
              Achtrex Digital Newsroom
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RELATED STORIES SECTION
      ========================================================================== */}
      {relatedItems.length > 0 && (
        <section className="w-full bg-[#f8fafc] py-16 sm:py-24 px-6 sm:px-12 lg:px-20 border-t border-gray-200">
          <div className="w-full max-w-[1720px] mx-auto">
            <div className="max-w-4xl mx-auto mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#102a43] font-normal">
                More from Achtrex
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedItems.map((rel) => (
                <article
                  key={rel.id}
                  className="bg-white border border-gray-200 rounded-none overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <Link href={`/media/${rel.slug}`} className="block flex flex-col h-full">
                    <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                      <Image
                        src={rel.mediaUrl || '/studio-assets/service-experience-design.jpg'}
                        alt={rel.title}
                        fill
                        sizes="300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500 block mb-1">
                          {rel.category}
                        </span>
                        <span className="font-sans text-xs text-gray-400 block mb-2">
                          {rel.date}
                        </span>
                        <h3 className="font-sans font-bold text-sm sm:text-base text-gray-900 leading-snug group-hover:text-[#1a365d] transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                      </div>
                      <div className="pt-3">
                        <span className="text-xs font-semibold text-[#1a365d]">
                          Read article &gt;
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
