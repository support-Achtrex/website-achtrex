'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '@/data/studio-data';

export interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'all' | 'ai-tech' | 'design' | 'spatial';
  categoryLabel: string;
  image: string;
  video?: string;
  href: string;
}

const REAL_SERVICES: ServiceCardData[] = [
  {
    id: 'creative-strategy',
    number: '01',
    title: 'Creative Strategy & Digital Content',
    subtitle: 'Creative direction, cinematic studio production, storytelling, interactive content and brand worlds.',
    category: 'design',
    categoryLabel: 'Design & Content',
    image: '/studio-assets/grid-creative-studio.png',
    href: '/services/creative-strategy',
  },
  {
    id: 'digital-products',
    number: '02',
    title: 'Digital Product & Software Engineering',
    subtitle: 'High-performance web platforms, custom applications, enterprise portals, SaaS and cloud systems.',
    category: 'ai-tech',
    categoryLabel: 'Engineering & Platforms',
    image: '/uploads/1792236946796-digital-platform-header.jpg',
    href: '/services/digital-products',
  },
  {
    id: 'ai-dev',
    number: '03',
    title: 'Artificial Intelligence Development Services',
    subtitle: 'Custom AI solutions, autonomous multi-agents, RAG & LLMs, predictive workflows and intelligent systems.',
    category: 'ai-tech',
    categoryLabel: 'AI & Intelligence',
    image: '/uploads/1792237186403-ai-2-1.webp',
    href: '/services/ai-intelligent-experiences',
  },
  {
    id: 'configurators',
    number: '04',
    title: 'Automotive & Real Estate Product Customization',
    subtitle: 'Real-time 3D PBR configurators, tangible material swatches, industrial automated systems and rule engines.',
    category: 'spatial',
    categoryLabel: 'Spatial & Customization',
    image: '/studio-assets/grid-product-config.jpg',
    video: '/studio-assets/video-conveyor-customizer.mp4',
    href: '/services/product-configurators',
  },
];

export function ServicesGridSection({ services }: { services?: ServiceItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Merge with live services from DB if available
  const items: ServiceCardData[] = REAL_SERVICES
    .filter((defaultItem) => {
      if (!services || services.length === 0) return true;
      return services.some(
        (s) => s.id === defaultItem.id || s.slug === defaultItem.href.replace('/services/', '')
      );
    })
    .map((defaultItem) => {
      if (!services || services.length === 0) return defaultItem;
      const dbItem = services.find(
        (s) => s.id === defaultItem.id || s.slug === defaultItem.href.replace('/services/', '')
      );
      if (!dbItem) return defaultItem;
      return {
        ...defaultItem,
        number: dbItem.number || defaultItem.number,
        title: dbItem.title || defaultItem.title,
        subtitle: dbItem.subtitle || defaultItem.subtitle,
        image: dbItem.heroImage || defaultItem.image,
        video: dbItem.heroVideo !== undefined ? dbItem.heroVideo : defaultItem.video,
      };
    });

  const total = items.length;
  const currentService = items[currentIndex] || items[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section
      id="services-grid"
      data-section-color="positive"
      className="relative w-full bg-[#ffffff] text-[#000000] py-20 sm:py-28 lg:py-36 border-t border-b border-black/10 overflow-hidden font-sans"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =========================================================================
              LEFT DATA / NAVIGATION ZONE (Slider Navigation & Taxonomy)
          ========================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[380px] lg:min-h-[480px] pr-0 lg:pr-8">
            {/* Top Bar: Title + View All CTA + Slide Counter */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/15">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <h3 className="font-clash text-2xl sm:text-3xl font-medium tracking-tight text-black">
                    Services
                  </h3>
                  <Link
                    href="/services"
                    className="font-clash text-xs sm:text-sm tracking-wider uppercase text-black/60 hover:text-black underline underline-offset-4 transition-colors"
                  >
                    View all
                  </Link>
                </div>

                {/* Number Counter: 01 / 04 */}
                <div className="font-clash text-2xl sm:text-3xl font-normal text-black flex items-center tracking-tight">
                  <span className="tabular-nums">0{currentIndex + 1}</span>
                  <span className="text-black/30 mx-2">/</span>
                  <span className="text-black/40 tabular-nums">0{total}</span>
                </div>
              </div>

              {/* Active Service Info in Oversized Editorial Typography */}
              <div className="py-8 sm:py-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-black/50 block mb-3">
                      {currentService.categoryLabel || `Discipline 0${currentIndex + 1}`}
                    </span>
                    <Link href={currentService.href} className="group block">
                      <h4 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal leading-[1.08] tracking-tight text-black group-hover:text-black/75 transition-colors">
                        {currentService.title}
                      </h4>
                    </Link>

                    {currentService.subtitle && (
                      <p className="mt-4 sm:mt-5 text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-md">
                        {currentService.subtitle}
                      </p>
                    )}

                    <div className="pt-6 sm:pt-8">
                      <Link
                        href={currentService.href}
                        className="inline-flex items-center gap-2 font-clash text-sm text-black font-medium group hover:text-black/70 transition-colors"
                      >
                        <span>Explore discipline</span>
                        <span className="transition-transform group-hover:translate-x-1.5 duration-200">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Directional Arrows (Matching Reference Custom SVG Navigation) */}
            <div className="flex items-center gap-6 pt-6">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous service"
                className="group relative w-16 h-16 flex items-center justify-center cursor-pointer focus:outline-none transition-transform duration-300"
              >
                <svg
                  viewBox="0 0 74 81"
                  className="w-10 h-10 fill-black transition-transform duration-300 group-hover:-translate-x-2.5 rotate-90"
                  aria-hidden="true"
                >
                  <path d="M35.2,65.3V7.8h5.2V65c1.3-1.7,2.8-3.5,4.8-5.3c3.8-3.8,8.8-7.2,13.7-9.3v6.2c-2.4,1-5,2.3-7.5,4.2 c-5.2,3.8-9.9,8.7-12.4,13.2h-2.6c-1.3-2.2-3-4.5-5.2-7c-4.5-4.8-9.8-8.9-14.7-10.6v-6.1c2.5,1,5.1,2.3,7.4,4 C28.9,57.7,32.9,61.9,35.2,65.3z" />
                </svg>
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                aria-label="Next service"
                className="group relative w-16 h-16 flex items-center justify-center cursor-pointer focus:outline-none transition-transform duration-300"
              >
                <svg
                  viewBox="0 0 74 81"
                  className="w-10 h-10 fill-black transition-transform duration-300 group-hover:translate-x-2.5 -rotate-90"
                  aria-hidden="true"
                >
                  <path d="M35.2,65.3V7.8h5.2V65c1.3-1.7,2.8-3.5,4.8-5.3c3.8-3.8,8.8-7.2,13.7-9.3v6.2c-2.4,1-5,2.3-7.5,4.2 c-5.2,3.8-9.9,8.7-12.4,13.2h-2.6c-1.3-2.2-3-4.5-5.2-7c-4.5-4.8-9.8-8.9-14.7-10.6v-6.1c2.5,1,5.1,2.3,7.4,4 C28.9,57.7,32.9,61.9,35.2,65.3z" />
                </svg>
              </button>
            </div>
          </div>

          {/* =========================================================================
              RIGHT CAROUSEL TRACK (Slide Cards)
          ========================================================================== */}
          <div className="lg:col-span-7 relative overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 sm:gap-8 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                transform: `translateX(-${currentIndex * 72}%)`,
              }}
            >
              {items.map((service, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <div
                    key={service.id || service.href}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-[82%] sm:w-[70%] cursor-pointer group transition-opacity duration-500 ${
                      isSelected ? 'opacity-100' : 'opacity-65 hover:opacity-90'
                    }`}
                  >
                    <Link href={service.href} className="block">
                      <div className="relative aspect-[16/11] bg-neutral-200 overflow-hidden shadow-lg border border-black/10">
                        {service.video ? (
                          <video
                            src={service.video}
                            poster={service.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          />
                        ) : (
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 85vw, 50vw"
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                            priority={idx === 0}
                          />
                        )}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                        {/* View Indicator Badge on Hover */}
                        <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Explore &rarr;
                        </div>
                      </div>

                      {/* Mobile Caption */}
                      <div className="pt-3 block lg:hidden">
                        <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block">
                          {service.categoryLabel || `0${idx + 1}`}
                        </span>
                        <h5 className="font-clash text-lg font-normal text-black truncate mt-0.5">
                          {service.title}
                        </h5>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export alias for consistency
export { ServicesGridSection as ServicesSliderSection };
