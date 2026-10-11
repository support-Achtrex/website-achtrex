'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { STUDIO_CONFIG } from '@/data/studio-data';

export default function AboutPage() {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO ("We are Achtrex" Editorial Hero)
      ========================================================================== */}
      <section className="relative min-h-[85vh] flex flex-col justify-between pt-36 sm:pt-44 pb-16 px-6 sm:px-12 lg:px-20 border-b border-white/10 overflow-hidden">
        {/* Top Tagline */}
        <div className="w-full max-w-[1720px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
            Technology / Creativity / Intelligence
          </span>
        </div>

        {/* Large Editorial Title */}
        <div className="w-full max-w-[1720px] mx-auto my-auto py-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal tracking-tight text-white leading-none"
          >
            We are Achtrex
          </motion.h1>
        </div>

        {/* Bottom Manifesto statement & Vertical Scroll line */}
        <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-white/10">
          {/* Scroll line */}
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

          {/* Positioning Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl font-clash text-base sm:text-xl md:text-2xl text-white/90 font-light leading-snug"
          >
            <p>
              We design and build digital experiences where technology, creativity and intelligence come together: turning complex systems into intuitive, beautiful, and high-impact digital surfaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          WHAT ACHTREX IS & WHAT WE BELIEVE
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              01 // The Studio
            </span>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
              What We Are
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8 font-clash">
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed">
              Achtrex is a Digital Experience &amp; Technology Studio based in Dubai Silicon Oasis. We bridge the space between strategic design ateliers and deep software engineering laboratories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 text-white/70 font-light text-base leading-relaxed">
              <p>
                Too often, creative direction lives disconnected from software architecture. Agencies produce static key visuals that falter in production; engineering teams build reliable systems that lack emotional resonance.
              </p>
              <p>
                We operate as a single unified force. Every interface we conceptualize is authored with production code constraints, physically accurate lighting models, sub-16ms latency budgets, and rigorous accessibility standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY TECHNOLOGY & CREATIVITY BELONG TOGETHER
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#020304]">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              02 // Conviction
            </span>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
              Why Technology &amp; Creativity Belong Together
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10 font-clash">
            <div className="space-y-4">
              <span className="font-mono text-2xl text-white/40 block">01</span>
              <h3 className="text-xl font-normal text-white">Technology as Material</h3>
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Code, shaders, vector embeddings, and real-time 3D pipelines are not downstream utilities. They are our creative paint, marble, and lenses.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-2xl text-white/40 block">02</span>
              <h3 className="text-xl font-normal text-white">Creativity as Architecture</h3>
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Aesthetics are not cosmetic skin. Distinctive typography, kinetic rhythm, and spatial proportions govern how humans comprehend complex information.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-2xl text-white/40 block">03</span>
              <h3 className="text-xl font-normal text-white">Calm Intelligence</h3>
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                Artificial intelligence is most powerful when it operates quietly, synthesizing noisy data into confident decisions without sci-fi gimmickry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK & WHAT WE BUILD
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              03 // Discipline
            </span>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
              The Problems We Solve
            </h2>
            <p className="font-clash text-sm text-white/60 font-light mt-4 leading-relaxed">
              We partner with organizations requiring high-fidelity digital touchpoints across luxury, industrial, and technology sectors.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12 font-clash">
            <div className="border-b border-white/10 pb-10">
              <h3 className="text-2xl text-white mb-3">Real-Time Product &amp; Spatial Configurators</h3>
              <p className="text-white/70 font-light text-base leading-relaxed">
                Replacing flat 2D catalogs with interactive 3D WebGL configurators that allow customers to explore finishes, mechanics, and lighting in real time with production-accurate CAD fidelity.
              </p>
            </div>

            <div className="border-b border-white/10 pb-10">
              <h3 className="text-2xl text-white mb-3">Intelligent AI Digital Products &amp; Agent Workflows</h3>
              <p className="text-white/70 font-light text-base leading-relaxed">
                Engineering domain-specific RAG knowledge systems, autonomous agent task orchestrators, and non-modal streaming interfaces that eliminate manual repetitive workflows.
              </p>
            </div>

            <div className="border-b border-white/10 pb-10">
              <h3 className="text-2xl text-white mb-3">Immersive Brand Journeys &amp; Digital Flagships</h3>
              <p className="text-white/70 font-light text-base leading-relaxed">
                Crafting digital flagships that unite documentary cinematography, kinetic type choreography, and smooth 60fps interaction into memorable digital flagships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRESENCE & CONTACT
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              04 // Location
            </span>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
              Dubai Headquarters
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 font-clash">
            <div>
              <h3 className="text-xl text-white mb-3">Achtrex Technology - FZCO</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Dubai Silicon Oasis<br />
                Digital Park A5 Building, 6009<br />
                Dubai, United Arab Emirates
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs text-[#889fa8] uppercase block mb-1">Direct Telephone</span>
                <a
                  href={STUDIO_CONFIG.phoneHref}
                  className="text-base text-white hover:text-white/80 transition-colors"
                >
                  {STUDIO_CONFIG.phone}
                </a>
              </div>
              <div>
                <span className="font-mono text-xs text-[#889fa8] uppercase block mb-1">Studio Inquiry</span>
                <a
                  href={STUDIO_CONFIG.emailHref}
                  className="text-base text-white hover:text-white/80 transition-colors"
                >
                  {STUDIO_CONFIG.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/40 hover:border-white pb-1 font-mono transition-colors"
                >
                  <span>Book a Meeting &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
