'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ServiceItem, SERVICES, STUDIO_CONFIG } from '@/data/studio-data';
import { Interactive3DViewport, ThreeDSceneMode } from './Interactive3DViewport';

interface ServiceDetailTemplateProps {
  service: ServiceItem;
}

function getSceneMode(id: string, slug: string): ThreeDSceneMode {
  if (id.includes('experience') || slug.includes('experience-design')) return 'experience-design';
  if (id.includes('creative') || slug.includes('creative-strategy')) return 'creative-strategy';
  if (id.includes('digital') || slug.includes('digital-products')) return 'digital-products';
  if (id.includes('ai') || slug.includes('ai-intelligent')) return 'ai-intelligent-experiences';
  if (id.includes('cgi') || slug.includes('cgi-immersive')) return 'cgi-immersive';
  if (id.includes('config') || slug.includes('product-configurators')) return 'product-configurators';
  return 'general';
}

function getNextService(currentSlug: string): ServiceItem {
  const currentIndex = SERVICES.findIndex((s) => s.slug === currentSlug);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % SERVICES.length : 0;
  return SERVICES[nextIndex];
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const sceneMode = getSceneMode(service.id, service.slug);
  const nextService = getNextService(service.slug);
  const isAiService = service.id === 'ai-intelligent-experiences';
  const [mediaMode, setMediaMode] = useState<'3d' | 'image'>(isAiService ? '3d' : 'image');

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO
      ========================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-12 px-6 sm:px-12 lg:px-20 border-b border-white/10 overflow-hidden">
        {/* Fullscreen Cinematic Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover contrast-110 opacity-60 pointer-events-none scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
        </div>

        {/* Top Discipline Tagline */}
        <div className="w-full max-w-[1720px] mx-auto relative z-10">
          <span className="font-mono text-xs text-[#889fa8] uppercase tracking-widest block">
            Discipline {service.number} / 06 &bull; Achtrex Studio Services
          </span>
        </div>

        {/* Large Title Pinned Left */}
        <div className="w-full max-w-[1720px] mx-auto relative z-10 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-none whitespace-pre-line max-w-6xl"
          >
            {service.title}
          </motion.h1>
          <p className="font-clash text-xl sm:text-2xl md:text-3xl text-white/80 font-light mt-6 max-w-3xl leading-snug">
            {service.subtitle}
          </p>
        </div>

        {/* Bottom Scroll Line & Discipline Breadcrumb */}
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
            Achtrex Digital Experience &amp; Technology Studio &bull; Dubai Silicon Oasis
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL STATEMENT & VALUES WITH MEDIA SHOWCASE
      ========================================================================== */}
      <section className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#000000]">
        <div className="w-full max-w-[1720px] mx-auto">
          {/* Large Editorial Headline */}
          <div className="pb-16 sm:pb-24 border-b border-white/10">
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white max-w-5xl leading-[1.1] tracking-tight">
              {service.headline}
            </h2>
            <p className="font-clash text-lg sm:text-xl text-white/70 font-light mt-6 max-w-4xl leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Rationale & Factor Breakdown with Media Presentation */}
          <div className="py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10 items-center">
            {/* Left Zone: Media Presentation */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl">
                {isAiService && mediaMode === '3d' ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-neutral-950">
                    <Interactive3DViewport mode="ai-intelligent-experiences" className="w-full h-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-300 drop-shadow">
                        Neural Quantum Architecture &bull; Drag to Rotate
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {service.secondaryImage ? (
                      <Image
                        src={service.secondaryImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                      Plate {service.number} &bull; {service.title}
                    </div>
                  </>
                )}

                {/* AI View Mode Switcher Pill */}
                {isAiService && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20">
                    <button
                      onClick={() => setMediaMode('3d')}
                      className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                        mediaMode === '3d' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      3D Core
                    </button>
                    <button
                      onClick={() => setMediaMode('image')}
                      className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                        mediaMode === 'image' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      Production UI
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Q&A columns */}
            <div className="lg:col-span-6 space-y-12 font-clash">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
                  Strategic Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl text-white font-medium mb-3">
                  What is the true value of our discipline?
                </h3>
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {service.philosophy}
                </p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                  Commercial Impact
                </span>
                <h3 className="text-xl sm:text-2xl text-white font-medium mb-3">
                  Why this discipline directly drives enterprise growth
                </h3>
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {service.whyItMatters}
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================================
              CAPABILITIES & CLIENT DELIVERABLES CHECKLIST
          ========================================================================== */}
          <div className="py-20 sm:py-28 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Core Capabilities */}
            <div className="lg:col-span-6 space-y-6 font-clash">
              <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
                Technical &amp; Creative Scope
              </span>
              <h3 className="text-2xl sm:text-4xl text-white font-normal tracking-tight">
                Core Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0" />
                    <span className="text-xs sm:text-sm text-white/90 font-light">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tangible Client Deliverables */}
            <div className="lg:col-span-6 space-y-6 font-clash">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block">
                Client Delivery Blueprint
              </span>
              <h3 className="text-2xl sm:text-4xl text-white font-normal tracking-tight">
                What You Receive
              </h3>
              <div className="space-y-3 pt-4">
                {service.deliverables && service.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-4"
                  >
                    <span className="font-mono text-xs text-emerald-400 font-semibold pt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
                      {deliv}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================================
              INDUSTRY APPLICATIONS & SCENARIOS
          ========================================================================== */}
          {service.industryApplications && service.industryApplications.length > 0 && (
            <div className="py-20 sm:py-28 border-b border-white/10">
              <div className="mb-12">
                <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                  Market Context &bull; Real-World Scenarios
                </span>
                <h3 className="font-clash text-2xl sm:text-4xl font-normal text-white tracking-tight">
                  Industry Applications
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-clash">
                {service.industryApplications.map((app) => (
                  <div
                    key={app.industry}
                    className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3"
                  >
                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block">
                      {app.industry}
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {app.application}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              VALIDATED TECH STACK
          ========================================================================== */}
          {service.techStack && service.techStack.length > 0 && (
            <div className="py-16 sm:py-20 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-1">
                  Engineering Blueprint
                </span>
                <h4 className="font-clash text-xl sm:text-2xl text-white font-normal">
                  Production Technology Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/5 font-mono text-xs text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              4-PHASE STRUCTURED PROCESS
          ========================================================================== */}
          <div className="pt-20 sm:pt-28 space-y-16 sm:space-y-24">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
                Execution Lifecycle
              </span>
              <h3 className="font-clash text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Our 4-Phase Delivery Methodology
              </h3>
            </div>

            {service.process.map((step) => (
              <div key={step.step} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/10 pb-16 font-clash">
                <div className="lg:col-span-2">
                  <span className="text-6xl sm:text-8xl font-light text-white/30 leading-none block">
                    {step.step}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="text-2xl sm:text-3xl font-normal text-white">
                    {step.title}
                  </h4>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              VISUAL DOCUMENTATION GALLERY
          ========================================================================== */}
          {service.galleryImages && service.galleryImages.length > 0 && (
            <div className="pt-20 sm:pt-28">
              <div className="mb-12">
                <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
                  Visual Records &amp; Craft
                </span>
                <h3 className="font-clash text-2xl sm:text-4xl font-normal text-white tracking-tight">
                  Studio Artifacts &amp; Systems
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {service.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950"
                  >
                    <Image
                      src={img}
                      alt={`${service.title} system frame ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/70">
                      Figure 0{idx + 1} &bull; {service.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          FEATURED CONCEPT EXPERIENCE DEEP-LINK
      ========================================================================== */}
      {service.featuredCaseSlug && (
        <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10 text-center bg-[#000000]">
          <div className="max-w-4xl mx-auto font-clash space-y-6">
            <span className="font-mono text-xs text-[#889fa8] uppercase tracking-widest block">
              Featured Concept Experience
            </span>
            <Link
              href={`/projects/${service.featuredCaseSlug}`}
              className="group block"
            >
              <h3 className="text-3xl sm:text-5xl md:text-6xl text-white group-hover:text-white/80 transition-colors leading-tight">
                {service.featuredCaseTitle} &rarr;
              </h3>
            </Link>
            <p className="text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto">
              Launch the live interactive demonstration engineered to prove the viability and technical architecture of this discipline.
            </p>
          </div>
        </section>
      )}

      {/* =========================================================================
          COMMISSION CONVERSION SECTION
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-gradient-to-b from-black via-neutral-950 to-black text-center">
        <div className="max-w-4xl mx-auto space-y-8 font-clash">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block">
            Partner With Achtrex Studio
          </span>
          <h3 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-tight">
            Let&rsquo;s talk about your idea.
          </h3>
          <p className="text-base sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Have a product, experience or idea you want to bring to life? Let&rsquo;s build something meaningful together.
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
          NEXT DISCIPLINE IN SEQUENCE
      ========================================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 text-center bg-[#000000]">
        <div className="max-w-4xl mx-auto font-clash">
          <span className="font-mono text-xs text-[#889fa8] uppercase tracking-widest block mb-4">
            Next Studio Discipline &bull; {nextService.number} / 06
          </span>
          <Link
            href={`/services/${nextService.slug}`}
            className="group block"
          >
            <h3 className="text-3xl sm:text-5xl md:text-6xl text-white group-hover:text-white/80 transition-colors mb-6 leading-tight">
              {nextService.title} &rarr;
            </h3>
          </Link>
          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              <span>&larr; View All 6 Studio Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
