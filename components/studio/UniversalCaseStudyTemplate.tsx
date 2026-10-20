'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ConceptExperienceItem, ServiceItem, STUDIO_CONFIG } from '@/data/studio-data';
import { CaseStudyVideoPlayer } from './CaseStudyVideoPlayer';
import { RelatedProjectsCarousel, RelatedProjectItem } from './RelatedProjectsCarousel';

interface UniversalCaseStudyTemplateProps {
  project: ConceptExperienceItem;
  relatedService: ServiceItem;
  allProjects?: ConceptExperienceItem[];
}

export function UniversalCaseStudyTemplate({
  project,
  relatedService,
  allProjects = [],
}: UniversalCaseStudyTemplateProps) {
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

  const scrollToSection2 = () => {
    const el = document.getElementById('project_section_2');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Convert other projects into carousel format
  const carouselProjects: RelatedProjectItem[] = (allProjects.length > 0 ? allProjects : [])
    .filter((p) => p.slug !== project.slug)
    .slice(0, 6)
    .map((p) => ({
      title: p.title,
      category: `${p.industry} • ${p.category}`,
      image: p.heroImage || p.secondaryImage || '/studio-assets/project-aura.jpg',
      slug: p.slug,
      href: `/projects/${p.slug}`,
    }));

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white selection:bg-black selection:text-white font-sans"
    >
      {/* =========================================================================
          SECTION 1: IMMERSIVE HERO (Wedoo-Inspired Foundation)
      ========================================================================== */}
      <section
        id="project_section_1"
        data-section-color="negative"
        className="relative w-full h-screen min-h-[640px] flex items-end pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
      >
        {/* Fixed Background Media Covering Viewport */}
        <div
          className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden transition-opacity duration-700 ${
            isHeroVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
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

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        </div>

        {/* Hero Bottom-Pinned Content */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl">
            {/* Taxonomy Breadcrumb */}
            <div className="font-mono text-xs uppercase tracking-widest text-white/70 mb-4 flex items-center gap-3">
              <span>{project.badge || 'ACHTREX CONCEPT'}</span>
              <span className="text-white/30">/</span>
              <span>{project.industry}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/90">{project.category}</span>
            </div>

            {/* Oversized Title */}
            <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] font-normal text-white leading-[1.02] tracking-tight">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="font-clash text-lg sm:text-2xl text-white/80 font-light mt-4 max-w-3xl leading-snug">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Wedoo Horizontal Scroll Indicator */}
        <button
          onClick={scrollToSection2}
          aria-label="Scroll to project details"
          className="absolute left-6 sm:left-12 lg:left-20 bottom-6 sm:bottom-8 z-20 flex items-center gap-3 cursor-pointer group focus:outline-none"
        >
          <span className="font-clash text-xs sm:text-sm tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-16 sm:w-24 h-[1px] bg-white/25 relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-white animate-[scrollAnim_2.6s_ease-in-out_infinite]" />
          </div>
        </button>
      </section>

      {/* =========================================================================
          SECTION 2: PROJECT SPECIFICATIONS DATA (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="project_section_2"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] pt-20 sm:pt-28 pb-16 sm:pb-24 border-t border-black/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="sr-only">Project Metadata and Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Clients / Classification */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Clients
              </p>
              <p className="font-clash text-base sm:text-lg text-black/75 font-light">
                Enterprise &bull; {project.industry}
              </p>
              <span className="font-mono text-xs text-black/40 block">
                {project.badge || 'Achtrex Concept'}
              </span>
            </div>

            {/* Column 2: Year */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Year
              </p>
              <p className="font-clash text-base sm:text-lg text-black/75 font-light">
                {project.year || '2025'}
              </p>
              <span className="font-mono text-xs text-black/40 block">
                Proprietary Architecture
              </span>
            </div>

            {/* Column 3: Activities / Core Capabilities */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Activities
              </p>
              <div className="font-clash text-base sm:text-lg text-black/75 font-light space-y-1">
                {(project.technicalCapabilities || []).slice(0, 3).map((cap) => (
                  <p key={cap}>{cap}</p>
                ))}
              </div>
            </div>

            {/* Column 4: Related Services */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Related services
              </p>
              <div className="font-clash text-base sm:text-lg text-black space-y-1.5">
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="block hover:text-black/60 underline underline-offset-4 transition-colors"
                >
                  {relatedService.title} &rarr;
                </Link>
                <span className="font-mono text-xs text-black/40 block">
                  Service Area {relatedService.number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTRODUCTORY STATEMENT (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="project_section_3"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] py-16 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-black leading-[1.12] tracking-tight text-left">
              {project.shortDescription}
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: IMMERSIVE EXPERIENCE & CHALLENGE NARRATIVE (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="project_section_4"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] pb-24 sm:pb-36 lg:pb-44"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16">
          {/* Top Row: Large Square / 16:10 Visual Left, Text Container Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Col: Primary Visual */}
            <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] overflow-hidden bg-neutral-100 shadow-xl border border-black/10">
              <Image
                src={project.secondaryImage || project.heroImage || '/studio-assets/project-aura.jpg'}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
            </div>

            {/* Right Col: Challenge and Architecture 2-Col Offset */}
            <div className="lg:col-span-6 pb-2 sm:pb-6 space-y-8 font-clash">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-black/50 block mb-2">
                  The Real-World Challenge
                </span>
                <h3 className="text-2xl sm:text-4xl text-black font-normal tracking-tight">
                  Engineering the Boundary
                </h3>
                <p className="text-base sm:text-lg text-black/80 font-light mt-4 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="pt-6 border-t border-black/10">
                <span className="font-mono text-xs uppercase tracking-widest text-black/50 block mb-2">
                  Concept Architecture &amp; Execution
                </span>
                <p className="text-base sm:text-lg text-black/80 font-light leading-relaxed">
                  {project.conceptArchitecture}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INTERACTION DYNAMICS & SENSORY FLOW (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="project_section_5"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-24 sm:py-32 lg:py-40 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16">
          {/* Header Row: 6-col spacer, 3-col title, 3-col text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                User Experience Dynamics
              </span>
              <h3 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                Interactive Behavior &amp; Sensory Flow
              </h3>
            </div>
            <div className="lg:col-span-3 font-clash text-sm sm:text-base text-white/80 font-light leading-relaxed space-y-4">
              <p>{project.interactiveExperience}</p>
              <p className="text-white/60 pt-2 border-t border-white/10 font-mono text-xs">
                {project.creativeDirection}
              </p>
            </div>
          </div>

          {/* Full-Width Video Player or Large Interactive Visual */}
          {project.heroVideo ? (
            <CaseStudyVideoPlayer
              id="project_video_showcase"
              videoSrc={project.heroVideo}
              poster={project.heroImage || '/case/realtime-cgi/hero-poster.jpg'}
              title={`${project.title} Motion Showcase`}
            />
          ) : (
            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
              <Image
                src={project.heroImage || project.secondaryImage || '/studio-assets/project-aura.jpg'}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 font-mono text-xs text-white/80">
                {project.industry} &bull; Photorealistic Synthesis Frame
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ADDITIONAL PROJECT VISUALIZATIONS & GALLERY (Negative / Dark Theme)
      ========================================================================== */}
      {Array.isArray(project.galleryImages) && project.galleryImages.filter(Boolean).length > 0 && (
        <section
          id="project_section_6"
          data-section-color="negative"
          className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10"
        >
          <div className="w-full max-w-[1720px] mx-auto">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                Concept Visualizations &bull; Image Gallery
              </span>
              <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Additional Project Visualizations
              </h3>
              <p className="font-clash text-sm text-white/60 font-light mt-2 max-w-2xl">
                High-fidelity renders, interface details, and spatial environment explorations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {project.galleryImages.filter(Boolean).map((img, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[16/10] rounded-none overflow-hidden border border-white/15 bg-neutral-950 shadow-xl"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Plate ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
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
          SECTION 7: CLIENT COMMISSION BLUEPRINT & DELIVERABLES (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="project_section_7"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              Delivery Standards / Engineering Scope
            </span>
            <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
              What A Client Receives When Commissioning This Experience
            </h3>
            <p className="font-clash text-base sm:text-lg text-white/70 font-light mt-4 leading-relaxed">
              Every Achtrex concept is not merely a conceptual portfolio piece: it is an architectural prototype ready to be customized, expanded, and deployed for your brand.
            </p>
          </div>

          {/* 3-Column Deliverable Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-clash">
            {/* Box 1: Production Codebase */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-2xl text-white/30 block">01</span>
              <h4 className="text-xl text-white font-medium">Production-Grade Codebase</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Full enterprise source code delivered with strict TypeScript, modular React/Next.js components, WebGL rendering loops, and automated end-to-end testing suites.
              </p>
              <ul className="pt-4 border-t border-white/10 space-y-1.5 font-mono text-xs text-white/60">
                <li>&bull; Strict TypeScript &amp; Next.js 15</li>
                <li>&bull; GLSL Custom Shaders &amp; Three.js</li>
                <li>&bull; 60 FPS Guaranteed Frame Budget</li>
              </ul>
            </div>

            {/* Box 2: Enterprise Integration */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-2xl text-white/30 block">02</span>
              <h4 className="text-xl text-white font-medium">Enterprise System Integration</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Seamless hooks into your corporate ecosystem: ERP product catalogs, real-time pricing feeds, headless CMS, customer data platforms, and secure authenticated gateways.
              </p>
              <ul className="pt-4 border-t border-white/10 space-y-1.5 font-mono text-xs text-white/60">
                <li>&bull; Headless CMS &amp; Product Feeds</li>
                <li>&bull; Real-Time WebSockets &amp; State Sync</li>
                <li>&bull; Automated Analytics &amp; Telemetry</li>
              </ul>
            </div>

            {/* Box 3: Edge Infrastructure */}
            <div className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
              <span className="font-mono text-2xl text-white/30 block">03</span>
              <h4 className="text-xl text-white font-medium">Global Edge Infrastructure</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Turnkey deployment to global edge CDN networks with zero-downtime CI/CD pipelines, automated asset compression, and sub-second cold-load times worldwide.
              </p>
              <ul className="pt-4 border-t border-white/10 space-y-1.5 font-mono text-xs text-white/60">
                <li>&bull; Multi-Region Global Edge CDN</li>
                <li>&bull; Progressive Asset LOD Streaming</li>
                <li>&bull; 99.98% High Availability SLA</li>
              </ul>
            </div>
          </div>

          {/* Validated Technology Stack */}
          <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs text-[#889fa8] uppercase tracking-wider mr-2">
              Tested Capabilities:
            </span>
            {(project.technicalCapabilities || []).map((cap) => (
              <span
                key={cap}
                className="px-3.5 py-1.5 bg-white/5 border border-white/10 font-mono text-xs text-white/80"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: COMMISSION CONVERSION SECTION (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="project_commission"
        data-section-color="negative"
        className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black text-center"
      >
        <div className="max-w-4xl mx-auto space-y-8 font-clash">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block">
            Direct Client Commission
          </span>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Commission a custom {project.industry} experience for your brand.
          </h3>
          <p className="text-base sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Have a product, platform or digital experience you want to bring to life? Let&rsquo;s engineer something meaningful together.
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
          SECTION 9: RELATED PROJECTS CAROUSEL (Positive / Light Theme)
      ========================================================================== */}
      <RelatedProjectsCarousel projects={carouselProjects.length > 0 ? carouselProjects : undefined} />
    </div>
  );
}
