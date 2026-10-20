'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MediaItem } from '@/lib/media-db';

interface MediaListingClientProps {
  initialItems: MediaItem[];
}

const CATEGORIES = ['All', 'Innovation', 'ESG', 'Events', 'Stories', 'About us'];

export function MediaListingClient({ initialItems }: MediaListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredItems = useMemo(() => {
    return initialItems.filter((item) => {
      // Category match
      const catMatches =
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search query match
      const queryMatches =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return catMatches && queryMatches;
    });
  }, [initialItems, selectedCategory, searchQuery]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section className="w-full bg-[#000000] text-white py-16 sm:py-24">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Category Filter Pills (Tesla Roadster Minimalist Pill Design) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(8);
                  }}
                  className={`px-5 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-medium shadow-md'
                      : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
            >
              <span>{showSearch ? 'Close Search' : 'Search Dispatches'}</span>
              <span className={`transform transition-transform text-[10px] ${showSearch ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
          </div>
        </div>

        {/* Search Input Tray */}
        {showSearch && (
          <div className="max-w-2xl mx-auto mb-12 transition-all">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(8);
                }}
                placeholder="Search releases by topic, keywords, or title..."
                className="w-full px-5 py-3 text-sm bg-neutral-950 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors font-mono"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-white/50 hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs font-mono text-white/50 mt-2 text-center">
                Found {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} matching &ldquo;{searchQuery}&rdquo;
              </p>
            )}
          </div>
        )}

        {/* 4-Column Tesla-Style Dark Card Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {displayedItems.map((item) => (
              <article
                key={item.id}
                className="bg-neutral-950/70 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/30 hover:bg-neutral-900/60 transition-all duration-300 group"
              >
                <Link href={`/media/${item.slug}`} className="block flex flex-col h-full">
                  {/* Media Thumbnail */}
                  <div className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden">
                    <Image
                      src={item.thumbnailUrl || item.mediaUrl || '/studio-assets/service-experience-design.jpg'}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    {item.mediaType === 'video' && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 font-mono text-[9px] uppercase tracking-wider text-white">
                        VIDEO
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between font-clash">
                    <div>
                      {/* Category & Date Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#889fa8] font-medium">
                          {item.category}
                        </span>
                        <span className="font-mono text-[10px] text-white/40">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-normal text-white leading-snug group-hover:text-white/80 transition-colors mb-3 line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-white/70 group-hover:text-white">
                        Read Story &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-white/10 bg-neutral-950/40 p-8 my-8">
            <p className="text-white/60 text-sm font-mono mb-4">No media dispatches found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-full border border-white/30 text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-8 border-t border-white/10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3 rounded-full border border-white/30 bg-white/5 text-white font-mono text-xs uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer"
            >
              Load More Dispatches
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
