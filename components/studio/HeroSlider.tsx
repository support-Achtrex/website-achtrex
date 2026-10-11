'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface HeroSlide {
  id: string;
  titleLines: string[];
  linkLabel: string;
  linkHref: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'customization',
    titleLines: ['Real-Time 3D', 'Product Customization'],
    linkLabel: 'Explore Concept',
    linkHref: '/projects/realtime-product-customizer',
    mediaType: 'video',
    mediaSrc: '/hero-videos/form-customizer-cover.mp4',
  },
  {
    id: 'innovation',
    titleLines: ['We are', 'innovation'],
    linkLabel: 'Discover Studio',
    linkHref: '/about',
    mediaType: 'image',
    mediaSrc: '/hero-videos/hero-innovation.jpg',
  },
  {
    id: 'ai-development',
    titleLines: ['Artificial Intelligence', 'Development Services'],
    linkLabel: 'Explore Concept',
    linkHref: '/projects/intelligent-copilot-interface',
    mediaType: 'video',
    mediaSrc: '/hero-videos/lumen-intelligent-cover.mp4',
  },
  {
    id: 'cgi-immersive',
    titleLines: ['CGI, 3D &', 'Immersive Experiences'],
    linkLabel: 'Explore Concept',
    linkHref: '/projects/interactive-storytelling-campaign',
    mediaType: 'video',
    mediaSrc: '/hero-videos/after-dark-cover.mp4',
  },
];

const SLIDE_DURATION_MS = 8900; // Exact animation duration (8.9s)

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const currentProgressRef = useRef<number>(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const progressStartTime = useRef<number>(Date.now());
  const animationFrameId = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    currentProgressRef.current = 0;
    progressStartTime.current = Date.now();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    currentProgressRef.current = 0;
    progressStartTime.current = Date.now();
  };

  // Play active video and pause others
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  // Handle continuous smooth progress fill
  useEffect(() => {
    progressStartTime.current = Date.now();

    const updateProgress = () => {
      if (isPaused) {
        animationFrameId.current = requestAnimationFrame(updateProgress);
        return;
      }
      const elapsed = Date.now() - progressStartTime.current;
      const currentProgress = Math.min(elapsed / SLIDE_DURATION_MS, 1);
      currentProgressRef.current = currentProgress;
      if (progressFillRef.current) {
        progressFillRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      if (currentProgress >= 1) {
        nextSlide();
      } else {
        animationFrameId.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [currentIndex, isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-screen bg-[#000000] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        progressStartTime.current = Date.now() - currentProgressRef.current * SLIDE_DURATION_MS;
      }}
    >
      {/* =========================================================================
          1. CINEMATIC BACKGROUND MEDIA LAYER (Crossfade between full-bleed items)
      ========================================================================== */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {slide.mediaType === 'video' ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.mediaSrc}
                  autoPlay={isActive}
                  muted
                  loop
                  playsInline
                  preload={isActive ? 'auto' : 'none'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={slide.mediaSrc}
                    alt={slide.titleLines.join(' ')}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Cinematic Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          2. FOREGROUND EDITORIAL TITLE & CASE STUDY LINK
      ========================================================================== */}
      <div className="absolute top-[44%] sm:top-[48%] -translate-y-1/2 left-6 sm:left-16 lg:left-32 right-6 sm:right-16 z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl pointer-events-auto"
          >
            {/* Display Title */}
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-tight text-white leading-[1.02] mb-5">
              {currentSlide.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {/* Case Study Link with Arrow */}
            <Link
              href={currentSlide.linkHref}
              className="inline-flex items-center gap-3 text-lg sm:text-xl font-clash text-white/90 hover:text-white transition-transform duration-200 hover:translate-x-3 group cursor-pointer"
            >
              <span className="font-light tracking-wide">{currentSlide.linkLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 408 408"
                className="fill-white transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M354.2,219.4H-1.1v-32.1h353.5c-10.5-8-21.6-17.3-32.8-29.7c-23.5-23.5-44.5-54.4-57.5-84.7h38.3 c6.2,14.8,14.2,30.9,26,46.3c23.5,32.1,53.8,61.2,81.6,76.6V212c-13.6,8-27.8,18.5-43.3,32.1c-29.7,27.8-55,60.6-65.5,90.8h-37.7 c6.2-15.4,14.2-31.5,24.7-45.7C307.3,258.4,333.2,233.7,354.2,219.4z" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================================
          3. SCROLL PULSE INDICATOR
      ========================================================================== */}
      <div className="absolute left-6 sm:left-9 bottom-10 z-20 flex items-center gap-3 origin-bottom-left -rotate-90 pointer-events-none">
        <span className="font-clash text-sm uppercase tracking-widest text-white/80">
          Scroll
        </span>
        <div className="relative w-16 h-[1px] bg-white/30 overflow-hidden">
          <div className="absolute inset-0 bg-white animate-[scrollAnim_3s_infinite]" />
        </div>
      </div>

      {/* =========================================================================
          4. PAGINATION DASH BULLETS
      ========================================================================== */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-3 px-4">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group relative h-1.5 sm:h-1.5 w-10 sm:w-20 rounded-full bg-white/40 hover:bg-white/70 overflow-hidden transition-colors cursor-pointer"
            >
              {isActive && (
                <div
                  ref={progressFillRef}
                  className="absolute inset-0 bg-white rounded-full origin-left will-change-transform"
                  style={{ transform: 'scaleX(0)' }}
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
