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
    <section className="w-full bg-[#ffffff] text-neutral-900 py-12 sm:py-16">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Category Filters (Clean minimal pill design without borders) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(8);
                  }}
                  className={`px-5 py-2.5 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-950 text-white font-medium shadow-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200'
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 font-mono text-xs uppercase tracking-wider text-neutral-700 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
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
                className="w-full px-6 py-3.5 text-sm bg-neutral-100 rounded-full text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all font-sans"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400 hover:text-black"
                >
                  CLEAR
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs font-mono text-neutral-500 mt-2 text-center">
                Found {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} matching &ldquo;{searchQuery}&rdquo;
              </p>
            )}
          </div>
        )}

        {/* Tesla Model Y Style Cards Grid (Matching Image 3) */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {displayedItems.map((item) => (
              <article
                key={item.id}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end"
              >
                <Link href={`/media/${item.slug}`} className="absolute inset-0 z-0">
                  {/* Media Thumbnail */}
                  <Image
                    src={item.thumbnailUrl || item.mediaUrl || '/studio-assets/service-experience-design.jpg'}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  {/* Subtle Gradient from bottom matching Image 3 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                </Link>

                {/* Top-Right Round "+" Button Matching Image 3 */}
                <Link
                  href={`/media/${item.slug}`}
                  aria-label={`Open ${item.title}`}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 text-black shadow-lg flex items-center justify-center font-bold text-lg hover:scale-110 hover:bg-white transition-transform cursor-pointer"
                >
                  +
                </Link>

                {/* Card Lower-Third Content (Overlaid matching Image 3) */}
                <div className="relative z-10 p-6 sm:p-7 pointer-events-none font-clash">
                  <div className="flex items-center gap-2 mb-2 font-mono text-[10px] uppercase tracking-widest text-white/70">
                    <span>{item.category}</span>
                    <span>&bull;</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-white leading-tight mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  {item.summary && (
                    <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-neutral-50 rounded-2xl p-8 my-8">
            <p className="text-neutral-500 text-sm font-sans mb-4">No media dispatches found matching your filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-full bg-neutral-900 text-white font-mono text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3.5 rounded-full bg-neutral-950 text-white font-mono text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer shadow-md"
            >
              Load More Dispatches
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
