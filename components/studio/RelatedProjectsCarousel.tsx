'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface RelatedProjectItem {
  title: string;
  category: string;
  image: string;
  slug: string;
  href: string;
}

const DEFAULT_RELATED_PROJECTS: RelatedProjectItem[] = [
  {
    title: 'The Made-in-Italy Metaverse',
    category: 'Spatial Architecture & Web3',
    image: '/case/realtime-cgi/related-metaverse.jpg',
    slug: 'architectural-spatial-experience',
    href: '/projects/architectural-spatial-experience',
  },
  {
    title: 'Dodge Charger EV Real-Time Configurator',
    category: 'Automotive CGI & Unreal Engine',
    image: '/case/realtime-cgi/related-dodge.jpg',
    slug: 'automotive-spatial-configurator',
    href: '/projects/automotive-spatial-configurator',
  },
  {
    title: 'Kinetic Brand Storytelling Experience',
    category: 'CGI Storytelling & Digital Media',
    image: '/case/realtime-cgi/related-storytelling.jpg',
    slug: 'interactive-storytelling-campaign',
    href: '/projects/interactive-storytelling-campaign',
  },
  {
    title: 'Automotive CGI Production & Shaders',
    category: 'Photorealistic CGI Production',
    image: '/case/realtime-cgi/related-automotive.jpg',
    slug: 'realtime-product-customizer',
    href: '/projects/realtime-product-customizer',
  },
  {
    title: 'Stellantis Multichannel Configurator',
    category: 'Car Configurators & Cloud Streaming',
    image: '/case/realtime-cgi/related-configurator.jpg',
    slug: 'automotive-spatial-configurator',
    href: '/projects/automotive-spatial-configurator',
  },
];

interface RelatedProjectsCarouselProps {
  projects?: RelatedProjectItem[];
  className?: string;
}

export function RelatedProjectsCarousel({
  projects = DEFAULT_RELATED_PROJECTS,
  className = '',
}: RelatedProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const total = projects.length;
  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="section_8"
      data-section-color="positive"
      className={`relative w-full bg-[#ffffff] text-[#000000] py-20 sm:py-28 lg:py-36 border-t border-black/10 overflow-hidden ${className}`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =========================================================================
              LEFT DATA / NAVIGATION ZONE
          ========================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[380px] lg:min-h-[460px] pr-0 lg:pr-8">
            {/* Top Bar: Title + View All CTA + Slide Counter */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/15">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-clash text-2xl sm:text-3xl font-medium tracking-tight text-black">
                    Related projects
                  </h3>
                  <Link
                    href="/projects"
                    className="font-clash text-xs sm:text-sm tracking-wider uppercase text-black/60 hover:text-black underline underline-offset-4 transition-colors"
                  >
                    View all
                  </Link>
                </div>

                {/* Number Counter: 01 / 05 */}
                <div className="font-clash text-2xl sm:text-3xl font-normal text-black flex items-center tracking-tight">
                  <span className="tabular-nums">0{currentIndex + 1}</span>
                  <span className="text-black/30 mx-2">/</span>
                  <span className="text-black/40 tabular-nums">0{total}</span>
                </div>
              </div>

              {/* Active Project Info in Oversized Typography */}
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
                      {currentProject.category}
                    </span>
                    <h4 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal leading-[1.08] tracking-tight text-black">
                      {currentProject.title}
                    </h4>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Directional Arrows (Matching Wedoo Custom SVG Navigation) */}
            <div className="flex items-center gap-6 pt-6">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous project"
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
                aria-label="Next project"
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
                transform: `translateX(-${currentIndex * 68}%)`,
              }}
            >
              {projects.map((project, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <div
                    key={project.title + idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-[82%] sm:w-[68%] cursor-pointer group transition-opacity duration-500 ${
                      isSelected ? 'opacity-100' : 'opacity-65 hover:opacity-90'
                    }`}
                  >
                    <Link href={project.href} className="block">
                      <div className="relative aspect-[16/11] bg-neutral-200 overflow-hidden shadow-lg border border-black/10">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 80vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                        {/* View Indicator Badge on Hover */}
                        <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Explore &rarr;
                        </div>
                      </div>

                      {/* Mobile Caption */}
                      <div className="pt-3 block lg:hidden">
                        <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block">
                          {project.category}
                        </span>
                        <h5 className="font-clash text-lg font-normal text-black truncate mt-0.5">
                          {project.title}
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
