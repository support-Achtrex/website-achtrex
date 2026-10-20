'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ConceptExperienceItem, ServiceItem, STUDIO_CONFIG } from '@/data/studio-data';

interface TeslaProjectExperienceProps {
  project: ConceptExperienceItem;
  relatedService?: ServiceItem;
  allProjects?: ConceptExperienceItem[];
}

// Domain-specific metric highlights matching Tesla Roadster's bottom stat bar
function getProjectMetrics(slug: string, industry: string) {
  switch (slug) {
    case 'automotive-spatial-configurator':
      return [
        { value: '60 FPS', label: 'Frame Budget' },
        { value: '<15 ms', label: 'Streaming Latency' },
        { value: '4K HDR', label: 'Lumen Photorealism' },
        { value: '10,000+', label: 'Config Combinations' },
      ];
    case 'architectural-spatial-experience':
      return [
        { value: 'Sub-mm', label: 'Spatial Accuracy' },
        { value: '100%', label: 'BIM Synchronized' },
        { value: '4K', label: 'Real-Time Lighting' },
        { value: 'Zero Install', label: 'Browser Streaming' },
      ];
    case 'interactive-storytelling-campaign':
      return [
        { value: '3.4x', label: 'Engagement Uplift' },
        { value: '60 FPS', label: 'Kinetic Animation' },
        { value: '<1.2 s', label: 'Cold Load Time' },
        { value: 'Global', label: 'Edge CDN Delivery' },
      ];
    default:
      return [
        { value: '60 FPS', label: 'Runtime Performance' },
        { value: 'Sub-second', label: 'Asset Streaming' },
        { value: 'Enterprise', label: 'Engineering Tier' },
        { value: industry || 'Automotive', label: 'Industry Standard' },
      ];
  }
}

export function TeslaProjectExperience({
  project,
  relatedService,
  allProjects = [],
}: TeslaProjectExperienceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const metrics = getProjectMetrics(project.slug, project.industry);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const otherProjects = allProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 4);

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
          {project.heroVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={project.heroImage}
              className="w-full h-full object-cover scale-105"
            >
              <source src={project.heroVideo} type="video/mp4" />
            </video>
          ) : project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.title}
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
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            <span>&larr; All Projects</span>
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-white/60">
            {project.industry} &bull; {project.year}
          </span>
        </div>

        {/* Center / Lower-Third Minimalist Typography */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto py-8">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/70 block mb-3">
              {project.category}
            </span>
            <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[6.5vw] font-normal text-white leading-[1.0] tracking-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="font-clash text-lg sm:text-2xl text-white/90 font-light mt-4 sm:mt-6 max-w-3xl leading-snug">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Floating Stats Bar (Direct Tesla Roadster Pattern) */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto">
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-end justify-between gap-6">
            {/* Quantitative Metrics Trio/Quartet */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12">
              {metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="font-clash text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-white/60 uppercase tracking-widest mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Pills & Scroll Indicator */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('specs')}
                className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                Specifications
              </button>
              <button
                onClick={() => scrollToSection('commission')}
                className="px-6 py-3 rounded-full bg-white text-black font-clash text-xs tracking-wider uppercase font-medium hover:bg-neutral-200 transition-colors"
              >
                Commission Concept
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FULL-BLEED PERFORMANCE & CHALLENGE SPREAD
          (Matching Tesla's "Designed for Performance and Aero Efficiency")
      ========================================================================== */}
      <section
        id="performance"
        className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24">
          {/* Section Headline */}
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              01 // The Problem Space
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              {project.shortDescription}
            </h2>
          </div>

          {/* Full-Width Visual Canvas */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-none border border-white/10 shadow-2xl bg-neutral-950">
            {project.secondaryImage ? (
              <Image
                src={project.secondaryImage}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            ) : project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10 font-mono text-xs text-white/80">
              {project.industry} &bull; Synthesis Frame 01
            </div>
          </div>

          {/* 2-Column Minimal Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-white/10 font-clash">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
                The Real-World Challenge
              </span>
              <p className="text-base sm:text-xl text-white/85 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
                Architecture &amp; Strategy
              </span>
              <p className="text-base sm:text-xl text-white/85 font-light leading-relaxed">
                {project.conceptArchitecture}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ARCHITECTURE & INTERACTION SPREAD
          (Matching Tesla's "Interior: Seating for Four")
      ========================================================================== */}
      <section
        id="interior"
        className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16 sm:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 font-clash">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
                02 // User Experience Dynamics
              </span>
              <h3 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                Sensory Flow &amp; Interactive Behavior
              </h3>
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                {project.interactiveExperience}
              </p>
              <div className="pt-6 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                  Creative Direction
                </span>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  {project.creativeDirection}
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden rounded-none border border-white/10 shadow-2xl bg-neutral-950">
              {project.heroVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.heroImage}
                  className="w-full h-full object-cover"
                >
                  <source src={project.heroVideo} type="video/mp4" />
                </video>
              ) : project.heroImage ? (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              ) : null}
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                Synthesis Frame 02 &bull; Interactive Loop
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ADDITIONAL PLATES & VISUALIZATIONS (If available)
          (Matching Tesla's Glass Roof / Detail Plates)
      ========================================================================== */}
      {Array.isArray(project.galleryImages) && project.galleryImages.filter(Boolean).length > 0 && (
        <section
          id="gallery"
          className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                03 // Detail Plates
              </span>
              <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                High-Resolution Explorations
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.filter(Boolean).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-950 shadow-xl group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} Plate ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/80">
                    Plate 0{idx + 1} &bull; {project.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 5: TESLA-STYLE TECHNICAL SPECIFICATIONS GRID
          (Matching Tesla Roadster's Specs Table)
      ========================================================================== */}
      <section
        id="specs"
        className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              04 // Engineering Blueprint
            </span>
            <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Technical Specifications &bull; {project.title}
            </h3>
            <p className="font-clash text-base sm:text-lg text-white/70 font-light mt-4">
              Validated parameters for enterprise production and global edge deployment.
            </p>
          </div>

          {/* 3-Column Specs Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-clash">
            {/* Box 1: Core Performance */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">
                01 / PERFORMANCE
              </span>
              <h4 className="text-xl font-medium text-white">Runtime Benchmarks</h4>
              <ul className="space-y-3 pt-4 border-t border-white/10 text-sm text-white/80 font-light">
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Industry</span>
                  <span className="font-medium text-white">{project.industry}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Discipline</span>
                  <span className="font-medium text-white">{project.category}</span>
                </li>
                <li className="flex justify-between py-1 border-b border-white/5">
                  <span className="font-mono text-xs uppercase text-white/50">Frame Budget</span>
                  <span className="font-medium text-white">60 FPS Guaranteed</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Production Year</span>
                  <span className="font-medium text-white">{project.year || '2025'}</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Tested Capabilities */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">
                02 / CAPABILITIES
              </span>
              <h4 className="text-xl font-medium text-white">Validated Engineering Scope</h4>
              <div className="pt-4 border-t border-white/10 space-y-2">
                {(project.technicalCapabilities || []).map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-sm text-white/85 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Validated Tech Stack */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">
                03 / STACK
              </span>
              <h4 className="text-xl font-medium text-white">Production Tech Stack</h4>
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {(project.techStack || []).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {relatedService && (
                <div className="pt-4 border-t border-white/10 mt-4">
                  <span className="font-mono text-xs text-white/40 block mb-1">Related Service:</span>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="text-sm font-medium text-white hover:underline"
                  >
                    {relatedService.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: TESLA-STYLE CLOSING CONVERSION HERO
      ========================================================================== */}
      <section
        id="commission"
        className="py-28 sm:py-40 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black text-center"
      >
        <div className="max-w-4xl mx-auto space-y-8 font-clash">
          <span className="font-mono text-xs uppercase tracking-widest text-white/60 block">
            Client Commission &bull; Achtrex Projects
          </span>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Commission a custom {project.industry} experience.
          </h3>
          <p className="text-base sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Engineered with visual and architectural precision, ready to be customized, expanded, and deployed for your enterprise.
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
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-clash text-sm font-light hover:bg-white/10 transition-colors"
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
          SECTION 7: NEXT CONCEPTS STRIP (Tesla Model Selector Style)
      ========================================================================== */}
      {otherProjects.length > 0 && (
        <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#000000]">
          <div className="w-full max-w-[1720px] mx-auto space-y-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8]">
                Explore More Projects
              </span>
              <Link
                href="/projects"
                className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                View all projects &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block space-y-3"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-950">
                    {p.heroImage ? (
                      <Image
                        src={p.heroImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    ) : null}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 block">
                      {p.industry}
                    </span>
                    <h4 className="font-clash text-base sm:text-lg text-white font-normal group-hover:text-white/80 transition-colors">
                      {p.title} &rarr;
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
