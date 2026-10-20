'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MediaItem } from '@/lib/media-db';

interface HomeMediaSectionProps {
  items: MediaItem[];
}

export function HomeMediaSection({ items }: HomeMediaSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayItems = items.length > 0 ? items : [];
  const total = displayItems.length;

  const scrollToCard = useCallback((index: number) => {
    if (scrollRef.current) {
      const cardWidth = 380 + 24; // card width + gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  }, []);

  const handleNext = () => {
    const nextIndex = activeIndex < total - 1 ? activeIndex + 1 : 0;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex > 0 ? activeIndex - 1 : total - 1;
    scrollToCard(prevIndex);
  };

  // Sync activeIndex with user scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 380 + 24;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex >= 0 && newIndex < total && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section
      id="media"
      className="w-full bg-[#ffffff] text-neutral-900 py-20 sm:py-28 lg:py-36 overflow-hidden font-sans"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* =========================================================================
            HEADER: MATCHING TESLA MODEL Y IN IMAGE 3
        ========================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-neutral-950 tracking-tight">
            Meet Achtrex Media
          </h2>
          <h3 className="font-clash text-lg sm:text-2xl font-normal text-neutral-800">
            Real-Time Insights &amp; Breakthroughs
          </h3>
          <p className="font-sans text-sm sm:text-base text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
            Explore our latest releases, architectural narratives, and real-time innovations.
          </p>
        </div>

        {/* =========================================================================
            CAROUSEL: HORIZONTAL ROUNDED CARDS MATCHING IMAGE 3
        ========================================================================== */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayItems.map((item, idx) => (
              <div
                key={item.id}
                className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 aspect-[4/5] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 snap-start group bg-neutral-100 flex flex-col justify-end"
              >
                <Link href={`/media/${item.slug}`} className="absolute inset-0 z-0">
                  {/* Media Thumbnail */}
                  <Image
                    src={item.mediaUrl || item.thumbnailUrl || '/studio-assets/service-experience-design.jpg'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 340px, 380px"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  {/* Subtle Dark Gradient at Bottom matching Image 3 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
                </Link>

                {/* Top-Right Round "+" Button Matching Image 3 */}
                <Link
                  href={`/media/${item.slug}`}
                  aria-label={`Open ${item.title}`}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 text-black shadow-lg flex items-center justify-center font-bold text-lg hover:scale-110 hover:bg-white transition-transform cursor-pointer"
                >
                  +
                </Link>

                {/* Card Lower-Third Content (Matching Image 3: Safety / Convenience / Full Self-Driving / Warranties) */}
                <div className="relative z-10 p-6 sm:p-7 pointer-events-none font-clash">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-1.5">
                    {item.category}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-normal text-white leading-tight tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              BOTTOM CONTROLS: CENTER DOTS + RIGHT NEXT ARROW BUTTON (MATCHING IMAGE 3)
          ========================================================================== */}
          <div className="relative mt-8 sm:mt-10 flex items-center justify-between">
            {/* Left Spacer to balance right arrow button */}
            <div className="w-10 h-10 hidden sm:block" />

            {/* Center Slide Indicator Dots */}
            <div className="flex items-center gap-2 mx-auto">
              {displayItems.map((_, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => scrollToCard(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-7 h-2 bg-neutral-900'
                        : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                );
              })}
            </div>

            {/* Right Next Arrow Button (Matching Image 3) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 flex items-center justify-center text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* View All Dispatches Link */}
        <div className="text-center pt-10 sm:pt-14">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 font-clash text-sm text-neutral-900 font-medium hover:text-neutral-600 transition-colors"
          >
            <span>View all media releases &amp; dispatches</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
