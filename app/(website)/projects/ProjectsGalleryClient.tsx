'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ConceptExperienceItem, STUDIO_CONFIG } from '@/data/studio-data';

function ConceptCardMedia({ project }: { project: ConceptExperienceItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full overflow-hidden"
    >
      {project.heroImage && (
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      )}
      {project.heroVideo && (
        <video
          ref={videoRef}
          src={project.heroVideo}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}

export function ProjectsGalleryClient({ projects }: { projects: ConceptExperienceItem[] }) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = [
    'All',
    'Automotive',
    'Real Estate',
    'Artificial Intelligence',
    'Digital Marketing',
    'Retail & E-commerce',
    'Healthcare',
    'Hospitality',
  ];

  const filteredProjects = selectedIndustry === 'All'
    ? projects
    : projects.filter((p) => p.industry.toLowerCase() === selectedIndustry.toLowerCase() || p.category.toLowerCase().includes(selectedIndustry.toLowerCase()));

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO (Concept Experiences Hero)
      ========================================================================== */}
      <section className="relative min-h-[85vh] flex flex-col justify-between pt-36 sm:pt-44 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Top Tagline */}
        <div className="w-full max-w-[1720px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
            Achtrex Concept Experiences / Production Architecture
          </span>
        </div>

        {/* Large Projects Title pinned left */}
        <div className="w-full max-w-[1720px] mx-auto my-auto py-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal tracking-tight text-white leading-none"
          >
            Concepts
          </motion.h1>
        </div>

        {/* Bottom Manifesto statement & Vertical Scroll line */}
        <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8">
          {/* Scroll Indicator */}
          <div className="flex items-center gap-3">
            <span className="[writing-mode:vertical-rl] rotate-180 font-clash text-[10px] tracking-widest uppercase text-white/50">
              Scroll
            </span>
            <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-1/2 bg-white"
              />
            </div>
          </div>

          {/* Editorial Positioning Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl font-clash text-base sm:text-xl md:text-2xl text-white/90 font-light leading-snug"
          >
            <p>
              Tangible demonstrations of what Achtrex designs and builds: uniting real-time 3D configurators, autonomous AI systems, kinetic storytelling, and clinical product engineering across major industries.
            </p>
            <p className="text-[#889fa8] text-xs sm:text-sm mt-3 font-mono">
              &bull; Every concept includes an interactive live simulator ready for client demonstration and commercial commissioning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRY CATEGORY FILTER BAR
      ========================================================================== */}
      <section className="sticky top-20 z-30 bg-black/95 backdrop-blur-md px-6 sm:px-12 lg:px-20 py-4">
        <div className="w-full max-w-[1720px] mx-auto flex items-center gap-6 overflow-x-auto no-scrollbar font-clash text-xs tracking-wider uppercase">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`shrink-0 transition-colors pb-1 cursor-pointer ${
                selectedIndustry === ind
                  ? 'text-white font-medium'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          IMMERSIVE SEQUENCE OF CONCEPT EXPERIENCES
      ========================================================================== */}
      <section className="w-full px-6 sm:px-12 lg:px-20 py-20 sm:py-32">
        <div className="w-full max-w-[1720px] mx-auto space-y-24 sm:space-y-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isReversed = idx % 2 === 1;

              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pb-20 sm:pb-32 ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Visual Media Showcase */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isReversed ? 'lg:col-start-6' : 'lg:col-start-1'
                    }`}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-950 shadow-2xl"
                    >
                      <ConceptCardMedia project={project} />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

                      {/* Interactive Trigger Bottom-Right */}
                      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 font-mono text-xs text-white/80 group-hover:text-white transition-colors">
                        <span>Explore Experience</span>
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                    </Link>
                  </div>

                  {/* Editorial Content Column */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isReversed ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'
                    }`}
                  >
                    {/* Category & Year */}
                    <div className="flex items-center gap-4 text-xs font-mono text-[#889fa8] uppercase tracking-wider">
                      <span>{project.industry}</span>
                      <span>/</span>
                      <span>{project.category}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-clash text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.05] tracking-tight">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-white/80 transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    {/* Subtitle / Focus */}
                    <p className="font-clash text-base sm:text-lg text-white/90 font-light leading-snug">
                      {project.subtitle}
                    </p>

                    {/* Concise Description */}
                    <p className="font-clash text-sm sm:text-base text-white/70 font-light leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technical Capabilities */}
                    <div className="pt-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#889fa8] block mb-2">
                        Core Capabilities
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technicalCapabilities.map((cap) => (
                          <span
                            key={cap}
                            className="font-mono text-[11px] text-white/60 mr-2 after:content-['/'] after:ml-2 after:text-white/20 last:after:content-none"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA link */}
                    <div className="pt-4 flex items-center gap-6">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-3 font-clash text-sm uppercase tracking-wider text-white hover:text-white/70 group border-b border-white/30 hover:border-white pb-1.5 transition-colors"
                      >
                        <span>Launch Concept &amp; Simulator</span>
                        <span className="transition-transform group-hover:translate-x-1.5 duration-300">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================================
          CLOSING STATEMENT (Conversion to Studio Services)
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#000000] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            Client Commissions &bull; Bespoke Engineering
          </span>
          <h3 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight">
            Have a product, experience or idea you want to bring to life?
          </h3>
          <p className="font-clash text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto">
            From initial research and spatial prototyping to production-grade engineering, we partner with modern brands to build meaningful digital experiences.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-clash text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Let&rsquo;s talk about your idea &rarr;
            </Link>
            <Link
              href="/book-a-meeting"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-clash text-sm font-light hover:bg-white/20 transition-colors"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
