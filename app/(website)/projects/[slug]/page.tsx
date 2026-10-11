import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Interactive3DViewport } from '@/components/studio/Interactive3DViewport';
import { ConceptLiveExperience } from '@/components/studio/ConceptLiveExperience';
import { InteractiveSpatialSimulationSection } from '@/components/studio/InteractiveSpatialSimulationSection';
import { PROJECTS, LEGACY_SLUG_MAP, SERVICES, ConceptExperienceItem, STUDIO_CONFIG } from '@/data/studio-data';
import { ProjectsDB } from '@/lib/projects-db';

export const revalidate = 0;

function getProjectBySlug(slug: string): ConceptExperienceItem {
  const resolved = LEGACY_SLUG_MAP[slug] || slug;
  return ProjectsDB.getBySlug(resolved) || PROJECTS.find((p) => p.slug === resolved) || PROJECTS[0];
}

function getNextProject(currentSlug: string): ConceptExperienceItem {
  const all = ProjectsDB.getAll();
  const currentIndex = all.findIndex((p) => p.slug === currentSlug);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % all.length : 0;
  return all[nextIndex] || PROJECTS[0];
}

export async function generateStaticParams() {
  const canonicalSlugs = PROJECTS.map((p) => ({ slug: p.slug }));
  const legacySlugs = Object.keys(LEGACY_SLUG_MAP).map((slug) => ({ slug }));
  return [...canonicalSlugs, ...legacySlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: `${project.title} : Achtrex Concept`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Achtrex Concept Experience`,
      description: project.shortDescription,
      images: [project.heroImage || project.secondaryImage || '/studio-assets/hero-spatial-installation.jpg'],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }): Promise<React.ReactElement> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(project.slug);
  const relatedService = SERVICES.find((s) => s.id === project.serviceId) || SERVICES[0];

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO (Concept Experience Showcase)
      ========================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-12 px-6 sm:px-12 lg:px-20 border-b border-white/10 overflow-hidden">
        {/* Fullscreen Background Media with Parallax/Vignette */}
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-50 pointer-events-none scale-105"
          />
        ) : project.heroVideo ? (
          <video
            src={project.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none scale-105"
          />
        ) : null}

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

        {/* Taxonomy Breadcrumb */}
        <div className="w-full max-w-[1720px] mx-auto relative z-10 font-mono text-xs text-[#889fa8] uppercase tracking-wider flex items-center gap-3">
          <span>{project.badge}</span>
          <span className="text-white/20">/</span>
          <span className="text-white/80">{project.industry}</span>
          <span className="text-white/20">/</span>
          <span>{project.category}</span>
        </div>

        {/* Large Title & Subtitle */}
        <div className="w-full max-w-[1720px] mx-auto relative z-10 py-12">
          <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-[1.02] max-w-6xl">
            {project.title}
          </h1>
          <p className="font-clash text-xl sm:text-2xl md:text-3xl text-white/80 font-light mt-6 max-w-3xl leading-snug">
            {project.subtitle}
          </p>
        </div>

        {/* Bottom Row: Vertical Scroll Indicator & Breadcrumb */}
        <div className="w-full max-w-[1720px] mx-auto flex items-end justify-between pt-12 relative z-10 border-t border-white/15">
          <div className="flex items-center gap-3">
            <span className="[writing-mode:vertical-rl] rotate-180 font-clash text-[10px] tracking-widest uppercase text-white/50">
              Scroll
            </span>
            <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
              <div className="w-full h-1/2 bg-white animate-pulse" />
            </div>
          </div>

          <div className="font-mono text-xs text-white/60 uppercase tracking-widest hidden sm:block">
            Achtrex Research &amp; Prototyping Lab &bull; {project.year} &bull; Dubai Silicon Oasis
          </div>
        </div>
      </section>

      {/* =========================================================================
          METADATA & SPECIFICATION BAR
      ========================================================================== */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#000000]">
        <div className="w-full max-w-[1720px] mx-auto">
          {/* 4-Column Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 sm:pb-20 border-b border-white/10 font-clash text-sm">
            <div>
              <span className="font-mono text-xs text-[#889fa8] uppercase tracking-wider block mb-2">
                Classification
              </span>
              <p className="text-white text-base">Achtrex Concept</p>
              <span className="font-mono text-[11px] text-white/50 block mt-1">
                Proprietary Demonstration
              </span>
            </div>
            <div>
              <span className="font-mono text-xs text-[#889fa8] uppercase tracking-wider block mb-2">
                Industry &amp; Discipline
              </span>
              <p className="text-white text-base">{project.industry}</p>
              <span className="font-mono text-[11px] text-white/50 block mt-1">
                {project.category}
              </span>
            </div>
            <div>
              <span className="font-mono text-xs text-[#889fa8] uppercase tracking-wider block mb-2">
                Core Capabilities
              </span>
              <div className="text-white text-sm space-y-1">
                {project.technicalCapabilities.slice(0, 3).map((cap) => (
                  <p key={cap} className="font-light">{cap}</p>
                ))}
              </div>
            </div>
            <div>
              <span className="font-mono text-xs text-[#889fa8] uppercase tracking-wider block mb-2">
                Related Studio Discipline
              </span>
              <Link
                href={`/services/${relatedService.slug}`}
                className="inline-block text-white hover:text-white/80 underline underline-offset-4 text-sm font-medium"
              >
                {relatedService.title} &rarr;
              </Link>
              <span className="font-mono text-[11px] text-white/50 block mt-1">
                Service Area {relatedService.number}
              </span>
            </div>
          </div>

          {/* Large Editorial Headline */}
          <div className="py-16 sm:py-24">
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white max-w-5xl leading-[1.1] tracking-tight">
              {project.shortDescription}
            </h2>
          </div>

          {/* 2-Column Challenge vs Architecture Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-white/10 font-clash">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-4">
                The Real-World Challenge
              </span>
              <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-4">
                Concept Architecture &amp; Execution
              </span>
              <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed">
                {project.conceptArchitecture}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIVE INTERACTIVE CONCEPT SIMULATOR (SHOWING THE ACTUAL INTERFACE)
      ========================================================================== */}
      <ConceptLiveExperience
        slug={project.slug}
        title={project.title}
        industry={project.industry}
        category={project.category}
      />

      {/* =========================================================================
          LIVE 3D SPATIAL SIMULATION & MULTI-CHANNEL GRID (HOMEPAGE HERO VIDEOS)
      ========================================================================== */}
      <InteractiveSpatialSimulationSection
        sceneMode={project.sceneMode || 'general'}
        projectTitle={project.title}
      />

      {/* =========================================================================
          INTERACTION DYNAMICS & ASYMMETRICAL EDITORIAL SPREAD
      ========================================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#000000]">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Secondary Visual with Mask & Hover Scale */}
          <div className="lg:col-span-7 relative h-[440px] sm:h-[600px] rounded-2xl overflow-hidden border border-white/10 group">
            {project.secondaryImage ? (
              <Image
                src={project.secondaryImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            ) : project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10 font-mono text-xs text-white/80 uppercase tracking-wider">
              {project.industry} &bull; Visual Synthesis Frame
            </div>
          </div>

          {/* Deep-dive Content */}
          <div className="lg:col-span-5 font-clash space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                User Experience Dynamics
              </span>
              <h4 className="text-2xl sm:text-4xl text-white font-normal tracking-tight">
                Interactive Behavior &amp; Sensory Flow
              </h4>
            </div>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              {project.interactiveExperience}
            </p>

            <div className="pt-6 border-t border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                Creative Direction &amp; Philosophy
              </span>
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                {project.creativeDirection}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT COMMISSION BLUEPRINT: "ACHTREX COULD ACTUALLY BUILD THIS"
      ========================================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#000000]">
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
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
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
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
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
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
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
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL CAPABILITIES & PRODUCTION TECH STACK
      ========================================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#000000]">
        <div className="w-full max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                Engineering Blueprint
              </span>
              <h3 className="font-clash text-3xl sm:text-4xl font-normal text-white tracking-tight">
                Architectural Specifications
              </h3>
              <p className="font-clash text-sm sm:text-base text-white/70 font-light mt-4 leading-relaxed">
                Every Achtrex Concept is built with production constraints in mind: optimized for frame-budget efficiency, accessibility, and high scalability across modern devices.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-8 font-clash">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#889fa8] block mb-4">
                  Tested Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.technicalCapabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-4 rounded-lg border border-white/10 bg-white/[0.02] flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-sm text-white/90 font-light">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-[#889fa8] block mb-4">
                  Validated Technology Stack
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-md bg-white/5 border border-white/15 font-mono text-xs text-white/90 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ASYMMETRICAL IMAGE GALLERY WITH REVEALS
      ========================================================================== */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#000000]">
          <div className="w-full max-w-[1720px] mx-auto">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                Visual Documentation
              </span>
              <h3 className="font-clash text-3xl sm:text-4xl font-normal text-white tracking-tight">
                Concept Visual Records
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-950"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                    Plate 0{idx + 1} &bull; {project.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          COMMISSION CONVERSION SECTION
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black text-center">
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
          NEXT CONCEPT EXPERIENCE LINK
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10 text-center bg-[#000000]">
        <div className="max-w-4xl mx-auto font-clash">
          <span className="font-mono text-xs text-[#889fa8] uppercase tracking-widest block mb-4">
            Next Concept Experience &bull; {nextProject.industry}
          </span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block"
          >
            <h3 className="text-4xl sm:text-6xl md:text-7xl text-white group-hover:text-white/80 transition-colors mb-6 leading-tight">
              {nextProject.title} &rarr;
            </h3>
          </Link>
          <div className="pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              <span>&larr; View All 7 Concept Experiences</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
