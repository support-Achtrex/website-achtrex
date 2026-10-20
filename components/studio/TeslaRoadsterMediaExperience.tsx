'use client';

import { useRef } from 'react';
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
          SECTION 1: IMMERSIVE HERO (Matching Tesla Roadster Reference Top)
      ========================================================================== */}
      <section
        id="roadster_hero"
        className="relative w-full h-screen min-h-[700px] flex flex-col justify-between pt-32 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
      >
        {/* Fullscreen Edge-to-Edge Background Media */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {item.mediaType === 'video' && item.mediaUrl.endsWith('.mp4') ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/case/roadster/roadster-hero.jpg"
              className="w-full h-full object-cover scale-105"
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

          {/* Cinematic Vignette Overlay Matching Tesla.com/roadster */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
        </div>

        {/* Top Minimal Taxonomy & Back Link */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto flex items-center justify-between">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            <span>&larr; Achtrex Newsroom</span>
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm">
            {item.category || 'INNOVATION'} &bull; Concept Showcase
          </span>
        </div>

        {/* Center / Lower-Third Minimalist Typography */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto py-8">
          <div className="max-w-5xl">
            <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-white/70 block mb-3">
              Next-Gen All-Electric Hypercar
            </span>
            <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-normal text-white leading-[1.0] tracking-tight">
              Roadster
            </h1>
            <p className="font-clash text-lg sm:text-2xl md:text-3xl text-white/90 font-light mt-4 sm:mt-6 max-w-3xl leading-snug">
              {item.subtitle || 'The quickest car in the world, with record-setting acceleration, range and performance.'}
            </p>
          </div>
        </div>

        {/* Bottom Floating Stats Bar (Direct Tesla Roadster Pattern) */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto">
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-end justify-between gap-6">
            {/* Quick Stat Trio */}
            <div className="grid grid-cols-3 gap-6 sm:gap-16">
              <div>
                <div className="font-clash text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                  1.9<span className="text-lg sm:text-xl ml-1 text-white/70 font-light">s</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest mt-1">
                  0-60 mph
                </div>
              </div>
              <div>
                <div className="font-clash text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                  +250<span className="text-lg sm:text-xl ml-1 text-white/70 font-light">mph</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest mt-1">
                  Top Speed
                </div>
              </div>
              <div>
                <div className="font-clash text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                  620<span className="text-lg sm:text-xl ml-1 text-white/70 font-light">mi</span>
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest mt-1">
                  Range
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('roadster_specs')}
                className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                Specifications
              </button>
              <button
                onClick={() => scrollToSection('roadster_commission')}
                className="px-6 py-3 rounded-full bg-white text-black font-clash text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-colors"
              >
                Commission Digital Twin
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ACCELERATION & RECORD-SETTING VELOCITY (Direct Tesla Video Loop)
      ========================================================================== */}
      <section
        id="roadster_acceleration"
        className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              Record Benchmark // Unprecedented Velocity
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              The Quickest Car in the World
            </h2>
            <p className="font-clash text-lg sm:text-2xl text-white/75 font-light mt-6 max-w-4xl leading-relaxed">
              With record-setting acceleration, range and performance, the all-electric Tesla Roadster delivers an unmatched driving sensation with an 8.8 second quarter mile.
            </p>
          </div>

          {/* Authentic Looping Video Player */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/case/roadster/roadster-acceleration-poster.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/case/roadster/roadster-loop.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-end justify-between gap-4 font-mono text-xs text-white/80">
              <div>Plate 00 &bull; 0-60 mph High Velocity Track Run</div>
              <div className="flex gap-6 sm:gap-12">
                <span>0-60 mph: <strong className="text-white font-medium">1.9 s</strong></span>
                <span>0-100 mph: <strong className="text-white font-medium">4.2 s</strong></span>
                <span>1/4 Mile: <strong className="text-white font-medium">8.8 s</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PERFORMANCE & AERO EFFICIENCY
          (Matching Tesla's "Designed for Performance and Aero Efficiency")
      ========================================================================== */}
      <section
        id="roadster_aero"
        className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              01 // Aerodynamic Architecture
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              Designed for Performance and Aero Efficiency
            </h2>
            <p className="font-clash text-lg sm:text-2xl text-white/75 font-light mt-6 max-w-4xl leading-relaxed">
              As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.
            </p>
          </div>

          {/* Full-Bleed 21:9 Spread */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
            <Image
              src="/case/roadster/roadster-profile.jpg"
              alt="Tesla Roadster Continuous Aerodynamic Surface Profile"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10 font-mono text-xs text-white/80">
              Plate 01 &bull; Continuous Surface Aerodynamic Profile
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-white/10 font-clash">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
                Airflow Management
              </span>
              <p className="text-base sm:text-xl text-white/85 font-light leading-relaxed">
                Every curve, cooling intake, and surface transition has been calculated to minimize drag while generating maximum active downforce across high-speed velocity envelopes.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
                Kinetic Downforce
              </span>
              <p className="text-base sm:text-xl text-white/85 font-light leading-relaxed">
                Integrated front cooling ducts channel airflow through underbody strakes, working in harmony with an active rear aero surface that deploys under high-speed braking and cornering loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: REAR DIFFUSER & EXTERIOR SCULPT
      ========================================================================== */}
      <section
        id="roadster_diffuser"
        className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 font-clash">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
                02 // Rear Architecture
              </span>
              <h3 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                Kinetic Rear Diffuser
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                The rear architecture features an aggressive multi-channel diffuser that seals low-pressure airflow behind the vehicle, cementing high-speed stability past 250 mph.
              </p>
              <div className="pt-6 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                  Structural Propulsion
                </span>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  Dual high-output rear motors integrate directly into the structural aluminum chassis, lowering the center of gravity beyond any production internal combustion hypercar.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
              <Image
                src="/case/roadster/roadster-rear.jpg"
                alt="Tesla Roadster Rear Diffuser and Active Aerodynamics"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                Plate 02 &bull; Aerodynamic Exit Channels &amp; Integrated Lightblade
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-950 shadow-xl">
              <Image
                src="/case/roadster/roadster-front-white.jpg"
                alt="Tesla Roadster Sculpted Front Canopy"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                Sculpted Front Aerodynamic Canopy
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-950 shadow-xl">
              <Image
                src="/case/roadster/roadster-aero-white.jpg"
                alt="Tesla Roadster Monocoque Geometry"
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
          SECTION 4: INTERIOR: SEATING FOR FOUR
          (Matching Tesla's "Interior: Seating for Four")
      ========================================================================== */}
      <section
        id="roadster_interior"
        className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              03 // Interior Architecture
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              The first supercar to fit seating for four.
            </h2>
            <p className="font-clash text-lg sm:text-2xl text-white/75 font-light mt-6 max-w-4xl leading-relaxed">
              Supercars historically sacrifice utility for speed. Roadster breaks this paradigm: a true 2+2 grand tourer capable of seating four occupants without losing an ounce of hypercar poise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
              <Image
                src="/case/roadster/roadster-interior.jpg"
                alt="Tesla Roadster Minimalist Interior and 2+2 Seating"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/80">
                Plate 03 &bull; Ergonomic 2+2 Seating Architecture
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
              <Image
                src="/case/roadster/roadster-cockpit.jpg"
                alt="Tesla Roadster Yoke Steering and Cockpit Controls"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/80">
                Plate 04 &bull; Minimalist Cockpit &amp; Yoke Controls
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GLASS ROOF EXPERIENCE
          (Matching Tesla's "Glass Roof")
      ========================================================================== */}
      <section
        id="roadster_roof"
        className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              04 // Open-Air Convertible Versatility
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              Glass Roof
            </h2>
            <p className="font-clash text-lg sm:text-2xl text-white/75 font-light mt-6 max-w-4xl leading-relaxed">
              A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience without compromising structural torsional stiffness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl">
              <Image
                src="/case/roadster/roadster-roof-white.jpg"
                alt="Tesla Roadster Removable Lightweight Glass Roof"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/80">
                Plate 05 &bull; Removable Canopy Top
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl">
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
          SECTION 6: OFFICIAL TECHNICAL SPECIFICATIONS GRID
          (Matching Tesla Roadster's Specs Section)
      ========================================================================== */}
      <section
        id="roadster_specs"
        className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              05 // Engineering Benchmark
            </span>
            <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Roadster Specifications
            </h3>
            <p className="font-clash text-base sm:text-lg text-white/70 font-light mt-4">
              All metrics verified from Tesla official published performance specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-clash">
            {/* Box 1: Velocity */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">01 / VELOCITY</span>
              <h4 className="text-xl font-medium text-white">Acceleration Records</h4>
              <ul className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/80 font-light">
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">0 to 60 mph</span>
                  <span className="font-medium text-white">1.9 seconds</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">0 to 100 mph</span>
                  <span className="font-medium text-white">4.2 seconds</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">1/4 Mile Time</span>
                  <span className="font-medium text-white">8.8 seconds</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Top Speed</span>
                  <span className="font-medium text-white">&gt; 250 mph (402+ km/h)</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Propulsion */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">02 / PROPULSION</span>
              <h4 className="text-xl font-medium text-white">Triple-Motor Drivetrain</h4>
              <ul className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/80 font-light">
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Wheel Torque</span>
                  <span className="font-medium text-white">10,000 Nm</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Electric Range</span>
                  <span className="font-medium text-white">620 miles (1,000 km)</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Drive Layout</span>
                  <span className="font-medium text-white">All-Wheel Drive</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Motors</span>
                  <span className="font-medium text-white">1 Front, 2 Rear</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Architecture */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">03 / ARCHITECTURE</span>
              <h4 className="text-xl font-medium text-white">Chassis &amp; Configuration</h4>
              <ul className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/80 font-light">
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Seating Capacity</span>
                  <span className="font-medium text-white">4 Adults (2+2)</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Roof Type</span>
                  <span className="font-medium text-white">Removable Lightweight Glass</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Base Reserve</span>
                  <span className="font-medium text-white">$50,000</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Base Hypercar Price</span>
                  <span className="font-medium text-white">$200,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ACHTREX COMMISSION CTA (Closing Hero)
      ========================================================================== */}
      <section
        id="roadster_commission"
        className="py-28 sm:py-40 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black text-center"
      >
        <div className="max-w-4xl mx-auto space-y-8 font-clash">
          <span className="font-mono text-xs uppercase tracking-widest text-white/60 block">
            Achtrex Automotive Digital Twins &bull; Real-Time CGI Showcase
          </span>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Commission a Real-Time 3D Automotive Experience
          </h3>
          <p className="text-base sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            From Unreal Engine 5 pixel-streamed vehicle configurators to hyper-realistic interactive product showcases, Achtrex engineers spatial experiences for leading mobility brands.
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
          SECTION 8: RELATED MEDIA STORIES (Minimal Dark Grid)
      ========================================================================== */}
      {relatedItems.length > 0 && (
        <section className="w-full bg-[#000000] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 text-white">
          <div className="w-full max-w-[1720px] mx-auto space-y-10">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-1">
                  Achtrex Newsroom
                </span>
                <h2 className="font-clash text-2xl sm:text-4xl text-white font-normal">
                  More Stories &amp; Releases
                </h2>
              </div>
              <Link
                href="/media"
                className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                View all releases &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedItems.map((rel) => (
                <article
                  key={rel.id}
                  className="border border-white/10 bg-white/[0.02] overflow-hidden flex flex-col justify-between group"
                >
                  <Link href={`/media/${rel.slug}`} className="block flex flex-col h-full">
                    <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden">
                      <Image
                        src={rel.mediaUrl || '/studio-assets/hero-3d-sculpture.jpg'}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                            {rel.category}
                          </span>
                          <span className="font-mono text-xs text-white/40">
                            {rel.date}
                          </span>
                        </div>
                        <h3 className="font-clash font-normal text-base sm:text-lg text-white leading-snug group-hover:text-white/80 transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                      </div>
                      <div className="pt-4 mt-4 border-t border-white/10">
                        <span className="text-xs font-mono uppercase tracking-wider text-white/70 group-hover:text-white">
                          Read release &rarr;
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
