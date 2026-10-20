'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MediaItem } from '@/lib/media-db';
import { STUDIO_CONFIG } from '@/data/studio-data';

interface TeslaMediaArticleExperienceProps {
  item: MediaItem;
  relatedItems?: MediaItem[];
}

export function TeslaMediaArticleExperience({
  item,
  relatedItems = [],
}: TeslaMediaArticleExperienceProps) {
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
    <article className="w-full bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* =========================================================================
          SECTION 1: TESLA-INSPIRED FULLSCREEN EDITORIAL HERO
      ========================================================================== */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-between pt-36 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-white/10">
        {/* Fullscreen Edge-to-Edge Background Media */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {item.mediaUrl && !isVideoUrl(item.mediaUrl) ? (
            <Image
              src={item.mediaUrl}
              alt={item.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40 scale-105"
            />
          ) : (
            <div className="w-full h-full bg-neutral-950" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/75 pointer-events-none" />
        </div>

        {/* Top Minimal Navigation */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto flex items-center justify-between">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            <span>&larr; Newsroom Archive</span>
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm">
            {item.category || 'PRESS'} &bull; {item.dateFormatted || item.date}
          </span>
        </div>

        {/* Center Title & Tagline */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto py-12">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/60 block mb-3">
              Official Media Release
            </span>
            <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] font-normal text-white leading-[1.04] tracking-tight">
              {item.title}
            </h1>
            {item.subtitle && (
              <p className="font-clash text-lg sm:text-2xl text-white/85 font-light mt-6 max-w-3xl leading-snug">
                {item.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Metadata Line */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto pt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/50">
          <span>Achtrex Digital Communications</span>
          <span>{item.dateFormatted || item.date}</span>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: LARGE-FORMAT MEDIA PRESENTATION & EDITORIAL BODY
      ========================================================================== */}
      <section className="w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#000000]">
        <div className="w-full max-w-5xl mx-auto space-y-16">
          {/* Prominent Media Embed */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
            {item.mediaType === 'video' ? (
              isVideoUrl(item.mediaUrl) && !item.mediaUrl.includes('youtube') && !item.mediaUrl.includes('vimeo') ? (
                <video
                  src={item.mediaUrl}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <iframe
                  src={getEmbedUrl(item.mediaUrl)}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )
            ) : (
              <Image
                src={item.mediaUrl || '/studio-assets/hero-3d-sculpture.jpg'}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            )}
          </div>

          {/* Editorial Paragraphs */}
          <div className="space-y-8 font-sans font-light text-base sm:text-xl text-white/80 leading-relaxed max-w-4xl">
            {item.content ? (
              item.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="leading-relaxed">{item.summary}</p>
            )}
          </div>

          {/* Back Action */}
          <div className="pt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/media"
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              &larr; Back to all releases
            </Link>
            <span className="font-mono text-xs text-white/40">
              Published by Achtrex &bull; {STUDIO_CONFIG.email}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: RELATED STORIES (Tesla Minimalist Dark Grid)
      ========================================================================== */}
      {relatedItems.length > 0 && (
        <section className="w-full bg-[#000000] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10">
          <div className="w-full max-w-[1720px] mx-auto space-y-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8]">
                Related Achtrex Releases
              </span>
              <Link
                href="/media"
                className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                View all releases &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedItems.map((rel) => (
                <article
                  key={rel.id}
                  className="border border-white/10 bg-white/[0.02] overflow-hidden flex flex-col justify-between group"
                >
                  <Link href={`/media/${rel.slug}`} className="block flex flex-col h-full">
                    <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden">
                      <Image
                        src={rel.mediaUrl || '/studio-assets/hero-3d-sculpture.jpg'}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                            {rel.category}
                          </span>
                          <span className="font-mono text-xs text-white/40">
                            {rel.date}
                          </span>
                        </div>
                        <h3 className="font-clash font-normal text-base sm:text-lg text-white leading-snug group-hover:text-white/80 transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                      </div>
                      <div className="pt-4 mt-4 border-t border-white/10">
                        <span className="text-xs font-mono uppercase tracking-wider text-white/70 group-hover:text-white">
                          Read release &rarr;
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
