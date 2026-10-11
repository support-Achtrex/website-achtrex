import Link from 'next/link';
import Image from 'next/image';
import { HeroSlider } from '@/components/studio/HeroSlider';
import { ServicesGridSection } from '@/components/studio/ServicesGridSection';
import { HomeMediaSection } from '@/components/studio/HomeMediaSection';
import { MediaDB } from '@/lib/media-db';

export const revalidate = 0; // Fresh updates when admin updates content

export default function StudioHomePage() {
  const mediaItems = MediaDB.getAll();

  return (
    <div className="bg-[#000000] text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* =========================================================================
          CHAPTER 01: FULL-BLEED VIDEO HERO SLIDER
          Featuring Achtrex Selected Projects
      ========================================================================== */}
      <HeroSlider />

      {/* =========================================================================
          CHAPTER 02: HOME INTRO
          Achtrex Studio Manifesto & Core Positioning (Crisp Editorial White Split Banner)
      ========================================================================== */}
      <section
        id="home-intro"
        className="relative w-full border-t border-b border-neutral-200 overflow-hidden bg-white text-neutral-900"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* LEFT PANEL: Crisp Editorial White Panel */}
          <div className="relative flex flex-col justify-between p-8 sm:p-14 lg:p-16 xl:p-20 bg-white text-neutral-900 border-b lg:border-b-0 lg:border-r border-neutral-200 overflow-hidden min-h-[460px] lg:min-h-[520px]">
            {/* Subtle Right Pill Outline (Refined Architectural Detail) */}
            <div className="absolute -top-10 right-4 sm:right-8 w-24 sm:w-28 h-[130%] rounded-full border border-neutral-200 pointer-events-none hidden md:block" />

            {/* Top Content */}
            <div className="relative z-10 space-y-6 max-w-xl">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 block font-semibold">
                About Achtrex
              </span>

              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-neutral-950 tracking-tight leading-[1.18]">
                We design and build digital experiences where technology, creativity and intelligence come together.
              </h2>

              <p className="font-sans text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                Achtrex creates immersive digital experiences, intelligent products, interactive platforms and technology-driven brand experiences for modern businesses.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-neutral-900 hover:text-black transition-colors font-mono underline underline-offset-4 font-semibold"
                >
                  <span>Discover our story</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Bottom Pagination Dots */}
            <div className="relative z-10 flex items-center gap-2 pt-10 sm:pt-14">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            </div>
          </div>

          {/* RIGHT PANEL: Aerial Photography + Luminous White Filter Wash & Geometric Cutouts */}
          <div className="relative flex flex-col justify-between p-8 sm:p-14 lg:p-16 xl:p-20 bg-white text-neutral-900 overflow-hidden min-h-[460px] lg:min-h-[520px]">
            {/* Full-bleed Aerial Background with Clean White Filter Wash */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/studio-assets/aerial-intro-bg.jpg"
                alt="Achtrex Digital Architecture & Landscapes"
                fill
                className="object-cover opacity-50 contrast-105"
              />
              {/* Luminous White Filter Wash */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/60" />
            </div>

            {/* Overlapping Geometric Capsule & Circle Elements (Top-Right) */}
            <div className="absolute top-0 right-0 w-80 sm:w-96 h-full pointer-events-none overflow-hidden hidden sm:block">
              {/* Circle Cutout Badge */}
              <div className="absolute top-6 right-28 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-neutral-300/80 shadow-xl bg-white/20 backdrop-blur-[1px]">
                <Image
                  src="/studio-assets/aerial-intro-bg.jpg"
                  alt=""
                  fill
                  className="object-cover scale-150 -translate-y-4"
                />
                <div className="absolute inset-0 bg-white/20" />
              </div>

              {/* Vertical Pill 1 */}
              <div className="absolute top-8 right-16 w-16 sm:w-20 h-64 sm:h-88 rounded-full overflow-hidden border border-neutral-300/80 shadow-xl bg-white/20 backdrop-blur-[1px]">
                <Image
                  src="/studio-assets/aerial-intro-bg.jpg"
                  alt=""
                  fill
                  className="object-cover scale-125"
                />
                <div className="absolute inset-0 bg-white/15" />
              </div>

              {/* Vertical Pill 2 */}
              <div className="absolute -top-6 right-2 w-14 sm:w-16 h-72 sm:h-96 rounded-full overflow-hidden border border-neutral-300/70 shadow-xl bg-white/20 backdrop-blur-[1px]">
                <Image
                  src="/studio-assets/aerial-intro-bg.jpg"
                  alt=""
                  fill
                  className="object-cover scale-150 translate-x-2"
                />
                <div className="absolute inset-0 bg-white/10" />
              </div>
            </div>

            {/* Top Content */}
            <div className="relative z-10 space-y-6 max-w-xl">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 block font-semibold">
                Studio Innovation
              </span>

              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-neutral-950 tracking-tight leading-[1.18]">
                At the center of digital transformation
              </h3>

              <p className="font-sans text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                From real-time 3D configurators and spatial environments to autonomous AI architectures, we empower organizations to thrive in high-velocity digital landscapes.
              </p>

              <div className="pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-neutral-900 hover:text-black transition-colors font-mono underline underline-offset-4 font-semibold"
                >
                  <span>Explore Concept Experiences</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Bottom Pagination Dots */}
            <div className="relative z-10 flex items-center gap-2 pt-10 sm:pt-14">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER 03: SERVICES & INNOVATION GRID (WEDOO Reference Style)
      ========================================================================== */}
      <ServicesGridSection />

      {/* =========================================================================
          CHAPTER 04: MEDIA SECTION ("The digital in real time" carousel)
      ========================================================================== */}
      <HomeMediaSection items={mediaItems} />
    </div>
  );
}
