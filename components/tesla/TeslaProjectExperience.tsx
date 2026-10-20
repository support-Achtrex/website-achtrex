'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ConceptExperienceItem, ServiceItem, STUDIO_CONFIG } from '@/data/studio-data';

interface TeslaProjectExperienceProps {
  project: ConceptExperienceItem;
  relatedService?: ServiceItem;
  allProjects?: ConceptExperienceItem[];
}

export function TeslaProjectExperience({
  project,
  relatedService,
  allProjects = [],
}: TeslaProjectExperienceProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const otherProjects = allProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 4);

  // Dynamic theme colors
  const bg = project.backgroundColor || '#000000';
  const theme = project.themeColor || '#ffffff';

  // Consolidate big videos
  const allVideos: string[] = [];
  if (project.heroVideo) allVideos.push(project.heroVideo);
  if (Array.isArray(project.galleryVideos)) {
    project.galleryVideos.forEach((v) => {
      if (v && !allVideos.includes(v)) allVideos.push(v);
    });
  }

  // Consolidate big images
  const allImages: string[] = [];
  if (project.secondaryImage) allImages.push(project.secondaryImage);
  if (Array.isArray(project.galleryImages)) {
    project.galleryImages.forEach((img) => {
      if (img && !allImages.includes(img) && img !== project.heroImage) allImages.push(img);
    });
  }

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor: bg }}
      className="relative w-full text-white selection:bg-white selection:text-black font-sans transition-colors duration-500"
    >
      {/* =========================================================================
          SECTION 1: TESLA-STYLE 100vh IMMERSIVE HERO
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

          {/* Cinematic Vignette Overlay Matching Tesla Roadster */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
        </div>

        {/* Top Minimal Navigation */}
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

        {/* Bottom Clean Action Bar (Replaced artificial stats with clean Tesla CTA controls) */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto">
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-white/70 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme }} />
              <span>{project.industry} &bull; Spatial Architecture &bull; Real-Time Execution</span>
            </div>

            {/* Action CTA Pills */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('showcase')}
                className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                Media Showcase
              </button>
              <button
                onClick={() => scrollToSection('specs')}
                className="px-6 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white font-clash text-xs tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                Specifications
              </button>
              <button
                onClick={() => scrollToSection('commission')}
                style={{ backgroundColor: theme, color: theme === '#ffffff' ? '#000000' : '#ffffff' }}
                className="px-6 py-3 rounded-full font-clash text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
              >
                Commission Concept
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MASSIVE CINEMATIC SPREAD (Full-Bleed 21:9 Media Plate)
      ========================================================================== */}
      <section
        id="showcase"
        className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-12">
          {/* Section Headline */}
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              01 // Visual Presentation
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.1] tracking-tight">
              {project.shortDescription}
            </h2>
          </div>

          {/* Massive Full-Bleed 21:9 Visual Canvas */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden shadow-2xl bg-neutral-950">
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
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BIG VIDEO SHOWCASE (Dedicated Cinematic Video Player)
      ========================================================================== */}
      {allVideos.length > 0 && (
        <section
          id="video_experience"
          className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-2">
                  02 // Motion Architecture
                </span>
                <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                  High-Fidelity Real-Time Motion
                </h3>
              </div>
              <button
                onClick={() => setIsVideoMuted(!isVideoMuted)}
                className="px-4 py-2 rounded-full bg-white/10 font-mono text-xs uppercase tracking-widest text-white hover:bg-white/20 transition-colors w-fit"
              >
                {isVideoMuted ? 'Unmute Audio' : 'Mute Audio'}
              </button>
            </div>

            {/* Massive Cinema-Scale Video Plate */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden shadow-2xl bg-neutral-950">
              <video
                autoPlay
                muted={isVideoMuted}
                loop
                playsInline
                preload="auto"
                poster={project.heroImage}
                className="w-full h-full object-cover"
              >
                <source src={allVideos[0]} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 4: EXPANDED BIG MEDIA PORTFOLIO (Images & Videos)
      ========================================================================== */}
      {allImages.length > 0 && (
        <section
          id="gallery"
          className="relative w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-20"
        >
          <div className="w-full max-w-[1720px] mx-auto space-y-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-2">
                03 // Detail Plates &amp; Explorations
              </span>
              <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                High-Resolution Visual Portfolio
              </h3>
            </div>

            {/* Bigger, Expansive Media Spreads: Large 2-column widescreen format */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {allImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] overflow-hidden bg-neutral-950 shadow-2xl group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} Large Detail Plate ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Additional Big Videos if user inserted multiple videos */}
            {allVideos.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8">
                {allVideos.slice(1).map((vidUrl, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[16/10] overflow-hidden bg-neutral-950 shadow-2xl"
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={vidUrl} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 5: PRODUCTION SPECIFICATIONS & DELIVERABLES
      ========================================================================== */}
      <section
        id="specs"
        className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20"
      >
        <div className="w-full max-w-[1720px] mx-auto space-y-16">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              04 // Engineering Blueprint
            </span>
            <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Production Specifications &bull; {project.title}
            </h3>
            <p className="font-clash text-base sm:text-lg text-white/70 font-light mt-4">
              Validated architecture for enterprise production and edge deployment.
            </p>
          </div>

          {/* 3-Column Clean Engineering Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-clash">
            {/* Box 1: Core Parameters */}
            <div className="p-8 bg-white/[0.03] rounded-xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">
                01 / OVERVIEW
              </span>
              <h4 className="text-xl font-medium text-white">Project Scope</h4>
              <ul className="space-y-3 pt-4 text-sm text-white/80 font-light">
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Industry</span>
                  <span className="font-medium text-white">{project.industry}</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Discipline</span>
                  <span className="font-medium text-white">{project.category}</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Runtime Performance</span>
                  <span className="font-medium text-white">60 FPS Hardware-Accelerated</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="font-mono text-xs uppercase text-white/50">Production Year</span>
                  <span className="font-medium text-white">{project.year || '2025'}</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Tested Capabilities */}
            <div className="p-8 bg-white/[0.03] rounded-xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">
                02 / CAPABILITIES
              </span>
              <h4 className="text-xl font-medium text-white">Engineering Scope</h4>
              <div className="pt-4 space-y-2">
                {(project.technicalCapabilities || []).map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-sm text-white/85 font-light">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: theme }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Production Tech Stack */}
            <div className="p-8 bg-white/[0.03] rounded-xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block">
                03 / STACK
              </span>
              <h4 className="text-xl font-medium text-white">Production Stack</h4>
              <div className="pt-4 flex flex-wrap gap-2">
                {(project.techStack || []).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full font-mono text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {relatedService && (
                <div className="pt-4 mt-4">
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
        className="py-28 sm:py-40 px-6 sm:px-12 lg:px-20 text-center"
        style={{
          background: `linear-gradient(to bottom, ${bg}, #050505, ${bg})`,
        }}
      >
        <div className="max-w-4xl mx-auto space-y-8 font-clash">
          <span className="font-mono text-xs uppercase tracking-widest text-white/60 block">
            Client Inquiries &bull; Achtrex
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
              style={{ backgroundColor: theme, color: theme === '#ffffff' ? '#000000' : '#ffffff' }}
              className="px-8 py-4 rounded-full font-clash text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
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
          SECTION 7: NEXT PROJECTS STRIP
      ========================================================================== */}
      {otherProjects.length > 0 && (
        <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20">
          <div className="w-full max-w-[1720px] mx-auto space-y-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
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
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-950">
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
