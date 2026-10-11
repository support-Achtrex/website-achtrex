'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MediaItem } from '@/lib/media-db';

interface HomeMediaSectionProps {
  items: MediaItem[];
}

export function HomeMediaSection({ items }: HomeMediaSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayItems = items.length > 0 ? items : [];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const cardWidth = 360;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="media" className="w-full bg-white text-[#111827] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-neutral-200 overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Editorial Media Intro (Exact reference layout) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between space-y-8 pr-0 lg:pr-6">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#4f46e5] block font-semibold">
                Media
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1e1b4b] tracking-tight leading-[1.12]">
                The digital in real time
              </h2>

              <p className="font-sans text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
                Are you looking for inspiration and concreteness in the digital world? Find out more on Achtrex.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 font-sans text-sm sm:text-base font-semibold text-[#1e40af] hover:text-[#1e3a8a] transition-colors group"
              >
                <span>All the news</span>
                <span className="transition-transform group-hover:translate-x-1 duration-200">&gt;</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Media Cards Carousel */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col space-y-8">
            <div
              ref={scrollRef}
              className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory"
            >
              {displayItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 bg-white border border-neutral-200/90 rounded-none overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 snap-start group"
                >
                  <Link href={`/media/${item.slug}`} className="block flex flex-col h-full">
                    {/* Media Thumbnail */}
                    <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                      <Image
                        src={item.mediaUrl || '/studio-assets/service-experience-design.jpg'}
                        alt={item.title}
                        fill
                        sizes="360px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {item.mediaType === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center pl-1 shadow-lg">
                            ▶
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category Tag */}
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#4f46e5] font-semibold block mb-2">
                          {item.category}
                        </span>

                        {/* Date */}
                        <span className="font-sans text-xs text-neutral-500 block mb-3 font-normal">
                          {item.date}
                        </span>

                        {/* Title */}
                        <h3 className="font-sans font-bold text-lg sm:text-xl text-[#0f172a] leading-snug group-hover:text-[#1e40af] transition-colors mb-3 line-clamp-2">
                          {item.title}
                        </h3>

                        {/* Teaser Summary */}
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom Pagination Dots Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {displayItems.slice(0, Math.min(displayItems.length, 12)).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'bg-[#1e40af] scale-125' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
