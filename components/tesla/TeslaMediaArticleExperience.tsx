'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MediaItem } from '@/lib/media-db';
import { STUDIO_CONFIG } from '@/data/studio-data';
import { TechDrivingDynamics } from '@/components/studio/TechDrivingDynamics';

interface TeslaMediaArticleExperienceProps {
  item: MediaItem;
  relatedItems?: MediaItem[];
}

export function TeslaMediaArticleExperience({
  item,
  relatedItems = [],
}: TeslaMediaArticleExperienceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compile all images: galleryImages, secondaryImage, mediaUrl
  const allImages = Array.from(
    new Set(
      [
        ...(item.galleryImages || []),
        item.secondaryImage,
        item.mediaType === 'image' ? item.mediaUrl : null,
        item.thumbnailUrl,
      ].filter(Boolean) as string[]
    )
  );

  // Compile all videos: galleryVideos, heroVideo, mediaUrl (if video)
  const allVideos = Array.from(
    new Set(
      [
        ...(item.galleryVideos || []),
        item.heroVideo,
        item.mediaType === 'video' ? item.mediaUrl : null,
      ].filter((v): v is string => Boolean(v && typeof v === 'string'))
    )
  );

  // Determine hero video source if available
  const heroVideoSrc = item.heroVideo || (item.mediaType === 'video' && item.mediaUrl.endsWith('.mp4') ? item.mediaUrl : null);

  // Primary visual image for hero fallback
  const heroImageSrc =
    (item.mediaType === 'image' ? item.mediaUrl : null) ||
    item.thumbnailUrl ||
    item.secondaryImage ||
    allImages[0] ||
    '/studio-assets/service-experience-design.jpg';

  // Primary 21:9 showcase image
  const showcaseImageSrc = item.secondaryImage || allImages[1] || heroImageSrc;

  // Key takeaways / specs
  const defaultSpecs = [
    { label: 'Classification', value: item.category, description: 'Editorial Domain' },
    { label: 'Date Published', value: item.dateFormatted || item.date, description: 'Global Release Date' },
    { label: 'Studio Division', value: 'Achtrex Technologies', description: 'Real-Time Digital Systems' },
  ];
  const specs = item.specs && item.specs.length > 0 ? item.specs : defaultSpecs;

  return (
    <article
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white selection:bg-white selection:text-black font-sans"
    >
      {/* =========================================================================
          SECTION 1: IMMERSIVE 100vh CINEMATIC HERO (Matching Tesla Roadster Reference)
      ========================================================================== */}
      <section
        id="hero"
        className="relative w-full h-screen min-h-[720px] flex flex-col justify-between pt-32 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
      >
        {/* Fullscreen Edge-to-Edge Background Media */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {heroVideoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={heroImageSrc}
              className="w-full h-full object-cover scale-105"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={heroImageSrc}
              alt={item.title}
              fill
              priority
              sizes="100vw"
              className="object-cover scale-105"
            />
          )}

          {/* Cinematic Vignette Overlay Matching Tesla Roadster */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />

          {/* Automotive Tech Driving Dynamics Layer */}
          <TechDrivingDynamics variant="hero" showTelemetry={false} className="opacity-45" />
        </div>

        {/* Top Minimal Navigation & Newsroom Link */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto flex items-center justify-between">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            <span>&larr; Achtrex Newsroom</span>
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-white/60">
            {item.category} &bull; {item.dateFormatted || item.date}
          </span>
        </div>

        {/* Center / Lower-Third Minimalist Typography */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto py-8">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/70 block mb-3">
              {item.category}
            </span>
            <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-[6vw] font-normal text-white leading-[1.02] tracking-tight">
              {item.title}
            </h1>
            {item.subtitle && (
              <p className="font-clash text-lg sm:text-2xl text-white/90 font-light mt-4 sm:mt-6 max-w-3xl leading-snug">
                {item.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Clean Action Bar (Direct Tesla Roadster Pattern) */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto">
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-white/70 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#00A9CE]" />
              <span>{item.dateFormatted || item.date}</span>
            </div>

            {/* Action CTA Pills */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('showcase')}
                className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors cursor-pointer"
              >
                Media Showcase
              </button>
              {allVideos.length > 0 && (
                <button
                  onClick={() => scrollToSection('video_experience')}
                  className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Video Experience
                </button>
              )}
              {allImages.length > 1 && (
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Visual Portfolio
                </button>
              )}
              <button
                onClick={() => scrollToSection('editorial')}
                className="px-6 py-3 rounded-full bg-white text-black font-clash text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Read Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MASSIVE CINEMATIC SPREAD (Full-Bleed 21:9 Media Plate)
      ========================================================================== */}
      <section
        id="showcase"
        className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-12">
          {/* Section Headline */}
          <div className="max-w-5xl">
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              {item.summary || item.subtitle || 'Cinematic Visual Showcase'}
            </h2>
          </div>

          {/* Massive Full-Bleed 21:9 Visual Canvas */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden shadow-2xl bg-neutral-950">
            <Image
              src={showcaseImageSrc}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BIG VIDEO SHOWCASE (Dedicated Cinematic Video Player)
      ========================================================================== */}
      {allVideos.length > 0 && (
        <section
          id="video_experience"
          className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                  High-Fidelity Real-Time Motion
                </h3>
              </div>
              <button
                onClick={() => setIsVideoMuted(!isVideoMuted)}
                className="px-4 py-2 rounded-full bg-white/10 font-mono text-xs uppercase tracking-widest text-white hover:bg-white/20 transition-colors w-fit cursor-pointer"
              >
                {isVideoMuted ? 'Unmute Audio' : 'Mute Audio'}
              </button>
            </div>

            {/* Massive Cinema-Scale Video Plate */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden shadow-2xl bg-neutral-950">
              {allVideos[0].includes('youtube') || allVideos[0].includes('vimeo') ? (
                <iframe
                  src={
                    allVideos[0].includes('watch?v=')
                      ? allVideos[0].replace('watch?v=', 'embed/')
                      : allVideos[0]
                  }
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  autoPlay
                  muted={isVideoMuted}
                  loop
                  playsInline
                  preload="auto"
                  controls={!isVideoMuted}
                  poster={heroImageSrc}
                  className="w-full h-full object-cover"
                >
                  <source src={allVideos[0]} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 4: EXPANDED BIG MEDIA PORTFOLIO (Multiple Images & Multiple Videos)
      ========================================================================== */}
      {allImages.length > 0 && (
        <section
          id="gallery"
          className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-12">
            <div>
              <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                High-Resolution Visual Portfolio
              </h3>
            </div>

            {/* Expansive Media Spreads: Large 2-column widescreen format matching Tesla Roadster */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {allImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] overflow-hidden bg-neutral-950 shadow-2xl group"
                >
                  <Image
                    src={img}
                    alt={`${item.title} Visual Plate ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Additional Videos if user added multiple videos */}
            {allVideos.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
                {allVideos.slice(1).map((vidUrl, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[16/10] overflow-hidden bg-neutral-950 shadow-2xl"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={vidUrl} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 5: IN-DEPTH EDITORIAL NARRATIVE BREAKDOWN
      ========================================================================== */}
      <section
        id="editorial"
        className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-5xl mx-auto space-y-12 font-clash">
          <div className="border-b border-white/20 pb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00A9CE] block mb-2">
              Official Narrative
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
              Executive Briefing
            </h2>
          </div>

          <div className="space-y-8 font-sans font-light text-base sm:text-xl text-white/80 leading-relaxed">
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

          <div className="pt-10 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs text-white/50">
              Published by Achtrex &bull; {item.dateFormatted || item.date}
            </span>
            <Link
              href="/media"
              className="px-6 py-2.5 rounded-full border border-white/30 text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              &larr; Back to all releases
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SPECIFICATIONS & DELIVERABLES (Matching Tesla Roadster Specs)
      ========================================================================== */}
      {specs.length > 0 && (
        <section
          id="specs"
          className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-16">
            <div className="max-w-4xl">
              <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Release Metrics &amp; Benchmarks
              </h3>
              <p className="font-clash text-base sm:text-lg text-white/70 font-light mt-4">
                Verified specifications and documentation from Achtrex Technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-clash">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white/[0.03] space-y-4 rounded-xl border border-white/5"
                >
                  <div className="font-mono text-xs text-white/50 uppercase tracking-widest">
                    {spec.label}
                  </div>
                  <div className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
                    {spec.value}
                  </div>
                  {spec.description && (
                    <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                      {spec.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 7: CLOSING CALL TO ACTION
      ========================================================================== */}
      <section className="relative w-full py-32 sm:py-44 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col items-center text-center space-y-8 font-clash">
          <h2 className="font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl leading-[1.04]">
            Build the future of digital experience with Achtrex.
          </h2>
          <p className="text-lg sm:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
            Have a project, initiative or milestone you want to bring to life?
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-a-meeting"
              className="px-8 py-4 rounded-full bg-white text-black text-sm tracking-wider uppercase font-medium hover:bg-neutral-200 transition-colors"
            >
              Book Strategic Briefing
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/30 bg-transparent text-white text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: RELATED STORIES (Tesla Minimalist Dark Grid)
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
                  className="bg-white/[0.03] rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/5"
                >
                  <Link href={`/media/${rel.slug}`} className="block flex flex-col h-full">
                    <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden">
                      <Image
                        src={rel.mediaUrl || rel.thumbnailUrl || '/studio-assets/service-experience-design.jpg'}
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
                      <div className="pt-4 mt-4">
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
