'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceItem, SERVICES, STUDIO_CONFIG } from '@/data/studio-data';

interface TeslaServiceExperienceProps {
  service: ServiceItem;
}



function getNextService(currentSlug: string): ServiceItem {
  const currentIndex = SERVICES.findIndex((s) => s.slug === currentSlug);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % SERVICES.length : 0;
  return SERVICES[nextIndex];
}

export function TeslaServiceExperience({ service }: TeslaServiceExperienceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const nextService = getNextService(service.slug);

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
          SECTION 1: TESLA ROADSTER-STYLE FULLSCREEN HERO (100vh)
      ========================================================================== */}
      <section
        id="hero"
        className="relative w-full h-screen min-h-[700px] flex flex-col justify-between pt-32 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
      >
        {/* Fullscreen Edge-to-Edge Background Media */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {service.heroVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={service.heroImage}
              className="w-full h-full object-cover scale-105"
            >
              <source src={service.heroVideo} type="video/mp4" />
            </video>
          ) : service.heroImage ? (
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="object-cover scale-105"
            />
          ) : null}

          {/* Cinematic Vignette Overlay Matching Tesla.com/roadster */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
        </div>

        {/* Top Minimal Taxonomy & Back Link */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            <span>&larr; All Services</span>
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            Achtrex &bull; Service 0{service.number}
          </span>
        </div>

        {/* Center / Lower-Third Minimalist Typography */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto py-8">
          <div className="max-w-5xl">

            <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[6.2vw] font-normal text-white leading-[1.02] tracking-tight">
              {service.title}
            </h1>
            {service.subtitle && (
              <p className="font-clash text-lg sm:text-2xl text-white/90 font-light mt-4 sm:mt-6 max-w-3xl leading-snug">
                {service.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto">
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-white/60">
              Enterprise Engineering &bull; Production Architecture
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('capabilities')}
                className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                Scope &amp; Deliverables
              </button>
              <button
                onClick={() => scrollToSection('commission')}
                className="px-6 py-3 rounded-full bg-white text-black font-clash text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-colors"
              >
                Commission Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FULL-BLEED STRATEGIC PHILOSOPHY
          (Matching Tesla's "Designed for Performance and Aero Efficiency")
      ========================================================================== */}
      <section
        id="philosophy"
        className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              01 // Strategic Philosophy
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              {service.headline}
            </h2>
            <p className="font-clash text-lg sm:text-2xl text-white/75 font-light mt-6 max-w-4xl leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden shadow-2xl bg-neutral-950">
            {service.secondaryImage ? (
              <Image
                src={service.secondaryImage}
                alt={service.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            ) : service.heroImage ? (
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 font-clash">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
                Core Conviction
              </span>
              <p className="text-base sm:text-xl text-white/85 font-light leading-relaxed">
                {service.philosophy}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
                Commercial Impact
              </span>
              <p className="text-base sm:text-xl text-white/85 font-light leading-relaxed">
                {service.whyItMatters}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TECHNICAL SCOPE & CLIENT DELIVERABLES
          (Matching Tesla's "Specs" Breakdown)
      ========================================================================== */}
      <section
        id="capabilities"
        className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              02 // Delivery Standards
            </span>
            <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Scope of Execution &bull; Client Deliverables
            </h3>
            <p className="font-clash text-base sm:text-lg text-white/70 font-light mt-4">
              What your brand and technical organization receive upon commissioning this service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start font-clash">
            {/* Left: Core Capabilities */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
                Technical Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {(service.capabilities || []).map((cap) => (
                  <div
                    key={cap}
                    className="p-3.5 bg-white/[0.03] rounded-lg flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                    <span className="text-xs sm:text-sm text-white/90 font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tangible Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">
                Client Delivery Blueprint
              </span>
              <div className="space-y-3 pt-2">
                {(service.deliverables || []).map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white/[0.03] rounded-xl flex items-start gap-4"
                  >
                    <span className="font-mono text-xs text-white/60 font-semibold pt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-white/90 font-light leading-relaxed">
                      {deliv}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INDUSTRY APPLICATIONS GRID
      ========================================================================== */}
      {Array.isArray(service.industryApplications) && service.industryApplications.length > 0 && (
        <section
          id="industries"
          className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#000000]"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-12">
            <div className="max-w-4xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                03 // Market Applications
              </span>
              <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Real-World Industry Deployments
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-clash">
              {service.industryApplications.map((app) => (
                <div
                  key={app.industry}
                  className="p-6 bg-white/[0.03] rounded-xl space-y-3"
                >
                  <span className="font-mono text-xs text-white/60 uppercase tracking-wider block">
                    {app.industry}
                  </span>
                  <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
                    {app.application}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 5: TESLA-STYLE CLOSING CONVERSION HERO
      ========================================================================== */}
      <section
        id="commission"
        className="py-28 sm:py-40 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-black via-neutral-950 to-black text-center"
      >
        <div className="max-w-4xl mx-auto space-y-8 font-clash">
          <span className="font-mono text-xs uppercase tracking-widest text-white/60 block">
            Direct Client Engagement &bull; Achtrex Studio
          </span>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Partner with Achtrex on your next {service.title} initiative.
          </h3>
          <p className="text-base sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Let&rsquo;s engineer an immersive digital experience that drives meaningful commercial outcomes for your enterprise.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-clash text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Let&rsquo;s talk about your idea &rarr;
            </Link>
            <a
              href={STUDIO_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-clash text-sm font-light hover:bg-white/20 transition-colors"
            >
              Book a Meeting
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-white/40">
            {STUDIO_CONFIG.fullName} &bull; {STUDIO_CONFIG.phoneDisplay} &bull; {STUDIO_CONFIG.email}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: NEXT STUDIO DISCIPLINE STRIP
      ========================================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#000000]">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-1">
              Next Service
            </span>
            <Link href={`/services/${nextService.slug}`} className="group">
              <h4 className="font-clash text-2xl sm:text-4xl text-white font-normal group-hover:text-white/80 transition-colors">
                {nextService.title} &rarr;
              </h4>
            </Link>
          </div>
          <Link
            href="/services"
            className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            View all services &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
