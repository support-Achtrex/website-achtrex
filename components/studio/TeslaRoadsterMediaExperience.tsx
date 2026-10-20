'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MediaItem } from '@/lib/media-db';
import { STUDIO_CONFIG } from '@/data/studio-data';

interface TeslaRoadsterMediaExperienceProps {
  item: MediaItem;
  relatedItems?: MediaItem[];
}

export function TeslaRoadsterMediaExperience({
  item,
  relatedItems = [],
}: TeslaRoadsterMediaExperienceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Synchronize header light/dark theme dynamically based on current visible section
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section-color]');
    if (!sections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerTriggerPoint = scrollY + 80;

      setIsHeroVisible(scrollY < window.innerHeight * 1.15);

      let activeColor = 'negative';
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (headerTriggerPoint >= top && headerTriggerPoint < bottom) {
          activeColor = sec.getAttribute('data-section-color') || 'negative';
        }
      });

      document.documentElement.setAttribute(
        'data-header-theme',
        activeColor === 'positive' ? 'light' : 'dark'
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.removeAttribute('data-header-theme');
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white selection:bg-white selection:text-black font-sans"
    >
      {/* =========================================================================
          SECTION 1: IMMERSIVE HERO (Tesla Reference Top)
      ========================================================================== */}
      <section
        id="roadster_hero"
        data-section-color="negative"
        className="relative w-full h-screen min-h-[680px] flex flex-col justify-between pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
      >
        {/* Fixed Background Media with Smooth Fade on Scroll */}
        <div
          className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden transition-opacity duration-700 ${
            isHeroVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.mediaType === 'video' && item.mediaUrl.endsWith('.mp4') ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/case/roadster/roadster-hero.jpg"
              className="w-full h-full object-cover"
            >
              <source src={item.mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/case/roadster/roadster-hero.jpg"
              alt="Tesla Roadster Next-Generation Hypercar"
              fill
              priority
              sizes="100vw"
              className="object-cover scale-105"
            />
          )}

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        </div>

        {/* Top Breadcrumb & Tag */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              <span>&larr; Achtrex Media Newsroom</span>
            </Link>
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-white/10 text-white rounded-full border border-white/20">
              {item.category || 'INNOVATION'}
            </span>
          </div>
        </div>

        {/* Main Title & Tagline */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-5xl transition-all duration-1000 ease-out">
            <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-white/70 block mb-3">
              Next-Gen All-Electric Hypercar
            </span>
            <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[6.5vw] font-normal text-white leading-[1.0] tracking-tight">
              Roadster
            </h1>
            <p className="font-clash text-lg sm:text-2xl md:text-3xl text-white/90 font-light mt-4 sm:mt-6 max-w-3xl leading-snug">
              {item.subtitle || 'The quickest car in the world, with record-setting acceleration, range and performance.'}
            </p>
          </div>
        </div>

        {/* Bottom Hero Stats Strip (Direct from Tesla.com/roadster) */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="pt-8 border-t border-white/15 flex flex-wrap items-end justify-between gap-8">
            {/* Quick Stat Trio */}
            <div className="grid grid-cols-3 gap-8 sm:gap-16">
              <div>
                <div className="font-clash text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
                  1.9<span className="text-xl sm:text-2xl ml-1 text-white/70 font-light">s</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest mt-1">
                  0-60 mph
                </div>
              </div>
              <div>
                <div className="font-clash text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
                  +250<span className="text-xl sm:text-2xl ml-1 text-white/70 font-light">mph</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest mt-1">
                  Top Speed
                </div>
              </div>
              <div>
                <div className="font-clash text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
                  620<span className="text-xl sm:text-2xl ml-1 text-white/70 font-light">mi</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest mt-1">
                  Range
                </div>
              </div>
            </div>

            {/* Scroll Indicator Button */}
            <button
              onClick={() => scrollToSection('roadster_specs')}
              aria-label="Scroll to specifications"
              className="flex items-center gap-3 cursor-pointer group focus:outline-none"
            >
              <span className="font-clash text-xs sm:text-sm tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
                Explore Engineering
              </span>
              <div className="w-16 sm:w-20 h-[1px] bg-white/25 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-white animate-[scrollAnim_2.6s_ease-in-out_infinite]" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BASE SPECIFICATIONS DATA BAR (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="roadster_specs"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] py-20 sm:py-24 border-t border-black/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="mb-8 pb-6 border-b border-black/10 flex items-center justify-between">
            <h2 className="font-mono text-xs uppercase tracking-widest text-black/50">
              Verifiable Published Specifications &bull; Tesla Roadster
            </h2>
            <span className="font-mono text-xs text-black/40">
              All-Electric Supercar Architecture
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 font-clash">
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                Acceleration 0-60
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">1.9 s</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                0-100 mph
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">4.2 s</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                1/4 Mile
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">8.8 s</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                Top Speed
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">+250 mph</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                Wheel Torque
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">10,000 Nm</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                Mile Range
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">620 mi</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                Seating
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">4 (2+2)</p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-black/50 uppercase tracking-wider block mb-1">
                Drive
              </span>
              <p className="text-2xl sm:text-3xl font-medium text-black">All-Wheel</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTRODUCTORY STATEMENT & AERODYNAMICS (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="roadster_aero"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] pb-24 sm:pb-36 lg:pb-44 pt-8"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-24">
          {/* Large Statement Heading */}
          <div className="max-w-5xl">
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-black leading-[1.12] tracking-tight">
              Designed for Performance and Aero Efficiency
            </h2>
            <p className="font-clash text-lg sm:text-2xl text-black/75 font-light mt-6 max-w-4xl leading-relaxed">
              As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.
            </p>
          </div>

          {/* Asymmetrical 2-Column Spread: Left Image, Right Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-neutral-100 border border-black/10 shadow-2xl">
              <Image
                src="/case/roadster/roadster-profile.jpg"
                alt="Tesla Roadster Aerodynamic Side Profile"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-black/60 bg-white/80 px-2.5 py-1">
                Plate 01 &bull; Continuous Surface Aerodynamic Profile
              </div>
            </div>

            <div className="lg:col-span-5 font-clash space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-black/50 block">
                Aerodynamic Architecture
              </span>
              <h3 className="text-2xl sm:text-4xl text-black font-normal tracking-tight">
                Sculpted Airflow &bull; Zero Compromise
              </h3>
              <p className="text-base sm:text-lg text-black/80 font-light leading-relaxed">
                Every curve, air intake, and surface transition has been calculated to minimize drag while generating maximum active downforce across high-speed velocity envelopes.
              </p>
              <div className="pt-4 border-t border-black/10 space-y-3 font-clash text-sm text-black/70">
                <p>&bull; Integrated front cooling ducts channelling air through underbody strakes</p>
                <p>&bull; Ultra-low drag coefficient engineered for 620-mile highway efficiency</p>
                <p>&bull; Active rear aero surface deploying under high braking loads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXTERIOR DETAILS & DIFFUSER (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="roadster_exterior"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-24 sm:py-36 lg:py-40 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-24">
          {/* Header Row: 6-col spacer, 3-col title, 3-col text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                Exterior Sculpt
              </span>
              <h3 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                Kinetic Rear Diffuser
              </h3>
            </div>
            <div className="lg:col-span-3 font-clash text-sm sm:text-base text-white/80 font-light leading-relaxed space-y-4">
              <p>
                The rear architecture features an aggressive multi-channel diffuser that seals low-pressure airflow behind the vehicle, cementing stability past 250 mph.
              </p>
              <p>
                Dual high-output rear motors integrate directly into the structural aluminum chassis, lowering the center of gravity beyond any production internal combustion hypercar.
              </p>
            </div>
          </div>

          {/* Full-Width Visual Showcase */}
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-950 border border-white/15 shadow-2xl">
            <Image
              src="/case/roadster/roadster-rear.jpg"
              alt="Tesla Roadster Rear Diffuser and Active Aerodynamics"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10 font-mono text-xs text-white/80">
              Plate 02 &bull; Aerodynamic Exit Channels &amp; Integrated Lightblade
            </div>
          </div>

          {/* Two Complementary Plates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl">
              <Image
                src="/case/roadster/roadster-front-white.jpg"
                alt="Tesla Roadster Front Quarter View"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                Sculpted Front Aerodynamic Canopy
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10 shadow-xl">
              <Image
                src="/case/roadster/roadster-aero-white.jpg"
                alt="Tesla Roadster Exhibition View"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                Pristine Monocoque Geometry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INTERIOR COCKPIT & SEATING (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="roadster_interior"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] py-24 sm:py-36 lg:py-44 border-t border-black/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-24">
          {/* Top Row: Square/Wide Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-neutral-100 shadow-2xl border border-black/10">
              <Image
                src="/case/roadster/roadster-interior.jpg"
                alt="Tesla Roadster Minimalist Interior and 2+2 Seating"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-black/60 bg-white/80 px-2.5 py-1">
                Plate 03 &bull; Ergonomic 2+2 Seating Architecture
              </div>
            </div>

            <div className="lg:col-span-5 font-clash space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-black/50 block">
                Interior Architecture
              </span>
              <h3 className="text-3xl sm:text-5xl font-normal text-black tracking-tight leading-[1.08]">
                The first supercar to fit seating for four.
              </h3>
              <p className="text-base sm:text-lg text-black/80 font-light leading-relaxed">
                Supercars historically sacrifice utility for speed. Roadster breaks this paradigm: a true 2+2 grand tourer capable of carrying four occupants without losing an ounce of hypercar poise.
              </p>
              <div className="pt-4 border-t border-black/10 space-y-2 font-clash text-sm text-black/70">
                <p>&bull; Deeply bolstered lightweight composite front bucket seats</p>
                <p>&bull; Integrated carbon-fiber structural backbone and acoustic cabin isolation</p>
                <p>&bull; Real-time telemetric curved glass center display</p>
              </div>
            </div>
          </div>

          {/* Cockpit Detail Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 font-clash space-y-6 order-2 lg:order-1">
              <span className="font-mono text-xs uppercase tracking-widest text-black/50 block">
                Driver Focus
              </span>
              <h3 className="text-2xl sm:text-4xl text-black font-normal tracking-tight">
                Racing Yoke &amp; Panoramic Vision
              </h3>
              <p className="text-base sm:text-lg text-black/80 font-light leading-relaxed">
                The driver cockpit eliminates physical clutter, orienting the pilot with an uninterrupted forward sightline through the low scuttle and sweeping windshield.
              </p>
              <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed">
                Every control is positioned within thumb-reach on the sculptured yoke, while active regenerative braking and triple-motor vectoring respond instantaneously to driver input.
              </p>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-neutral-100 shadow-2xl border border-black/10 order-1 lg:order-2">
              <Image
                src="/case/roadster/roadster-cockpit.jpg"
                alt="Tesla Roadster Yoke Steering and Cockpit Controls"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-black/60 bg-white/80 px-2.5 py-1">
                Plate 04 &bull; Minimalist Cockpit &amp; Yoke Controls
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: REMOVABLE GLASS ROOF (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="roadster_roof"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-24 sm:py-36 lg:py-40 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                Convertible Versatility
              </span>
              <h3 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                Glass Roof
              </h3>
            </div>
            <div className="lg:col-span-3 font-clash text-sm sm:text-base text-white/80 font-light leading-relaxed space-y-4">
              <p>
                A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience.
              </p>
              <p>
                Crafted from UV-treated laminated acoustic glass, the roof delivers the structural torsional stiffness of a closed monocoque with the sensory thrill of an open roadster.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl">
              <Image
                src="/case/roadster/roadster-roof-white.jpg"
                alt="Tesla Roadster Lightweight Glass Roof Structure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/80">
                Plate 05 &bull; Removable Canopy Top
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl">
              <Image
                src="/case/roadster/roadster-stage.jpg"
                alt="Tesla Roadster Open-Air Stage Debut"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/80">
                Plate 06 &bull; Aerodynamic Targa Profile
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: COMPLETE ENGINEERING SPECIFICATIONS (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="roadster_engineering_table"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] py-24 sm:py-36 border-t border-black/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-4xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-black/50 block mb-3">
              Official Technical Specifications
            </span>
            <h3 className="font-clash text-3xl sm:text-5xl font-normal text-black tracking-tight">
              Engineering Benchmark Data
            </h3>
            <p className="font-clash text-base sm:text-lg text-black/70 font-light mt-4">
              All metrics verified from Tesla official published performance specifications for the second-generation Roadster.
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-clash">
            {/* Box 1: Acceleration */}
            <div className="p-8 border border-black/10 bg-neutral-50 rounded-none space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-black/40 block">01 / VELOCITY</span>
              <h4 className="text-xl font-medium text-black">Acceleration Records</h4>
              <ul className="space-y-3 pt-4 border-t border-black/10 text-sm text-black/80 font-light">
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">0 to 60 mph</span>
                  <span className="font-medium text-black">1.9 seconds</span>
                </li>
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">0 to 100 mph</span>
                  <span className="font-medium text-black">4.2 seconds</span>
                </li>
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">1/4 Mile Time</span>
                  <span className="font-medium text-black">8.8 seconds</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-black/50">Top Speed</span>
                  <span className="font-medium text-black">&gt; 250 mph (402+ km/h)</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Powertrain & Battery */}
            <div className="p-8 border border-black/10 bg-neutral-50 rounded-none space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-black/40 block">02 / PROPULSION</span>
              <h4 className="text-xl font-medium text-black">Triple-Motor Drivetrain</h4>
              <ul className="space-y-3 pt-4 border-t border-black/10 text-sm text-black/80 font-light">
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">Wheel Torque</span>
                  <span className="font-medium text-black">10,000 Nm</span>
                </li>
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">Electric Range</span>
                  <span className="font-medium text-black">620 miles (1,000 km)</span>
                </li>
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">Drive Layout</span>
                  <span className="font-medium text-black">All-Wheel Drive</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-black/50">Motors</span>
                  <span className="font-medium text-black">1 Front, 2 Rear</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Architecture & Utility */}
            <div className="p-8 border border-black/10 bg-neutral-50 rounded-none space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-black/40 block">03 / ARCHITECTURE</span>
              <h4 className="text-xl font-medium text-black">Chassis &amp; Configuration</h4>
              <ul className="space-y-3 pt-4 border-t border-black/10 text-sm text-black/80 font-light">
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">Seating Capacity</span>
                  <span className="font-medium text-black">4 Adults (2+2)</span>
                </li>
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">Roof Type</span>
                  <span className="font-medium text-black">Lightweight Removable Glass</span>
                </li>
                <li className="flex justify-between py-1 border-b border-black/5">
                  <span className="font-mono text-xs uppercase text-black/50">Base Reserve</span>
                  <span className="font-medium text-black">$50,000</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-black/50">Base Hypercar Price</span>
                  <span className="font-medium text-black">$200,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: ACHTREX AUTOMOTIVE DIGITAL TWIN SHOWCASE (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="achtrex_showcase"
        data-section-color="negative"
        className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black text-center"
      >
        <div className="max-w-4xl mx-auto space-y-8 font-clash">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block">
            Achtrex Automotive Digital Twins &bull; Real-Time CGI Showcase
          </span>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Commission a Real-Time 3D Automotive Experience
          </h3>
          <p className="text-base sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            From Unreal Engine 5 pixel-streamed vehicle configurators to hyper-realistic interactive product showcases, Achtrex engineers photorealistic spatial experiences for leading mobility brands.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/projects/automotive-spatial-configurator"
              className="px-8 py-4 rounded-full bg-white text-black font-clash text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Explore 3D Car Configurator Case Study &rarr;
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-clash text-sm font-light hover:bg-white/10 transition-colors"
            >
              Commission an Automotive Digital Twin
            </Link>
          </div>

          <div className="pt-8 text-xs font-mono text-white/40">
            {STUDIO_CONFIG.fullName} &bull; {STUDIO_CONFIG.phoneDisplay} &bull; {STUDIO_CONFIG.email}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: RELATED MEDIA STORIES (Positive / Light Theme)
      ========================================================================== */}
      {relatedItems.length > 0 && (
        <section
          data-section-color="positive"
          className="w-full bg-[#f8fafc] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-gray-200 text-black"
        >
          <div className="w-full max-w-[1720px] mx-auto">
            <div className="max-w-5xl mx-auto mb-12 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-black/50 block mb-1">
                  Achtrex Newsroom
                </span>
                <h2 className="font-clash text-2xl sm:text-4xl text-black font-normal">
                  More Stories &amp; Releases
                </h2>
              </div>
              <Link
                href="/media"
                className="font-clash text-xs sm:text-sm uppercase tracking-wider underline underline-offset-4 text-black/60 hover:text-black transition-colors"
              >
                View all releases &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedItems.map((rel) => (
                <article
                  key={rel.id}
                  className="bg-white border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow group"
                >
                  <Link href={`/media/${rel.slug}`} className="block flex flex-col h-full">
                    <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                      <Image
                        src={rel.mediaUrl || '/studio-assets/service-experience-design.jpg'}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-black/50">
                            {rel.category}
                          </span>
                          <span className="font-mono text-xs text-black/40">
                            {rel.date}
                          </span>
                        </div>
                        <h3 className="font-clash font-normal text-base sm:text-lg text-black leading-snug group-hover:text-black/70 transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                      </div>
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        <span className="text-xs font-semibold text-black/80 group-hover:underline">
                          Read article &rarr;
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
    </div>
  );
}
