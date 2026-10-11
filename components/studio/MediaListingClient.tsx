'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MediaItem } from '@/lib/media-db';

interface MediaListingClientProps {
  initialItems: MediaItem[];
}

const CATEGORIES = ['All', 'ESG', 'Events', 'Stories', 'About us'];

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
    <section className="w-full bg-white text-gray-900 py-16 sm:py-24">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Centered Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#102a43] leading-snug tracking-tight">
            Are you looking for inspiration and concreteness in the digital world? Learn more about Achtrex
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(8);
                }}
                className={`px-5 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1a365d] text-white border border-[#1a365d] shadow-sm'
                    : 'bg-white text-[#1a365d] border border-gray-300 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Accordion Toggle */}
        <div className="max-w-md mx-auto text-center mb-12 sm:mb-16">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#1a365d] font-semibold hover:underline cursor-pointer"
          >
            <span>Are you looking for a specific news item?</span>
            <span className={`transform transition-transform duration-200 text-xs ${showSearch ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {showSearch && (
            <div className="mt-4 pt-1 transition-all">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(8);
                }}
                placeholder="Search by keywords, title, or topic..."
                className="w-full px-4 py-2.5 text-sm bg-neutral-50 border border-gray-300 rounded-sm focus:outline-none focus:border-[#1a365d] focus:bg-white transition-colors"
                autoFocus
              />
              {searchQuery && (
                <p className="text-xs text-gray-500 mt-2 text-left">
                  Found {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} matching &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </div>
          )}
        </div>

        {/* 4-Column Card Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {displayedItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-gray-200 rounded-none overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/media/${item.slug}`} className="block flex flex-col h-full">
                  {/* Media Thumbnail */}
                  <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                    <Image
                      src={item.mediaUrl || '/studio-assets/service-experience-design.jpg'}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {item.mediaType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-10 h-10 rounded-full bg-white/95 text-[#1a365d] flex items-center justify-center pl-1 shadow-md">
                          ▶
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500 block mb-1 font-medium">
                        {item.category}
                      </span>

                      {/* Date */}
                      <span className="font-sans text-xs text-gray-500 block mb-2.5">
                        {item.date}
                      </span>

                      {/* Title */}
                      <h3 className="font-sans font-bold text-base sm:text-lg text-[#0f172a] leading-snug group-hover:text-[#1a365d] transition-colors mb-2.5 line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Teaser */}
                      <p className="font-sans text-xs sm:text-sm text-gray-600 font-light leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-4 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a365d] group-hover:translate-x-1 transition-transform">
                        Read more &gt;
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500 text-base mb-4">No media articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2 bg-[#1a365d] text-white text-xs font-semibold rounded-sm hover:bg-[#152a48] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3 bg-[#1a365d] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-sm hover:bg-[#152a48] transition-all duration-200 shadow-sm cursor-pointer"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
