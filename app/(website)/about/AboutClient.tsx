'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { STUDIO_CONFIG } from '@/data/studio-data';

export function AboutClient() {
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
          WHAT WE ARE / ESSENCE (Editorial Split)
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              Studio Essence
            </span>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
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
              Our Thesis
            </span>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
              Why Technology &amp; Creativity Belong Together
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <p className="font-clash text-xl sm:text-2xl text-white/80 font-light leading-relaxed">
              The modern web is no longer just flat hyperlinked documents. It is a spatial canvas of real-time 3D geometry, responsive physics, neural intelligence, and tactile micro-moments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/10">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider block">
                  01 / Discipline
                </span>
                <h3 className="font-clash text-lg text-white font-medium">Engineering Rigor</h3>
                <p className="font-clash text-sm text-white/60 font-light leading-relaxed">
                  Next.js 15, Three.js, WebGL/WebGPU shaders, micro-services, and deterministic state management that scale under production traffic.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider block">
                  02 / Aesthetics
                </span>
                <h3 className="font-clash text-lg text-white font-medium">Kinetic Elegance</h3>
                <p className="font-clash text-sm text-white/60 font-light leading-relaxed">
                  Typographic sensitivity, cinematic editorial pacing, custom sound design, and physically based rendering swatches.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs text-[#F37021] uppercase tracking-wider block">
                  03 / Cognition
                </span>
                <h3 className="font-clash text-lg text-white font-medium">Machine Intelligence</h3>
                <p className="font-clash text-sm text-white/60 font-light leading-relaxed">
                  Contextual AI agents, multi-modal search, generative personalization, and real-time inference seamlessly woven into user journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FULL-BLEED CINEMATIC IMAGE BANNER
      ========================================================================== */}
      <section className="relative w-full h-[60vh] sm:h-[75vh] border-b border-white/10 overflow-hidden">
        <Image
          src="/studio-assets/aerial-intro-bg.jpg"
          alt="Achtrex Digital Experience Atelier"
          fill
          priority
          className="object-cover contrast-110 brightness-90 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <p className="font-clash text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight max-w-4xl drop-shadow-lg">
            &ldquo;Craft is not an embellishment. Craft is the deepest layer of functionality.&rdquo;
          </p>
        </div>
      </section>

      {/* =========================================================================
          STUDIO LOCATION & CREDENTIALS
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-3">
              Headquarters
            </span>
            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Dubai Silicon Oasis
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 font-clash text-white/80 font-light">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#889fa8] block">
                Physical Presence
              </span>
              <p className="text-lg text-white font-normal">
                {STUDIO_CONFIG.address}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Positioned in Dubai&apos;s leading technology and innovation cluster, serving luxury automotive brands, spatial tech ventures, high-growth digital companies, and enterprise innovators across EMEA, the Americas, and APAC.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#889fa8] block">
                Direct Contact
              </span>
              <div className="space-y-2 text-base text-white">
                <p>
                  <a href={STUDIO_CONFIG.emailHref} className="hover:text-white/70 transition-colors underline underline-offset-4">
                    {STUDIO_CONFIG.email}
                  </a>
                </p>
                <p>
                  <a href={STUDIO_CONFIG.phoneHref} className="hover:text-white/70 transition-colors">
                    {STUDIO_CONFIG.phone}
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F37021] hover:text-white transition-colors"
                >
                  <span>Initiate a project dialogue</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION FOOTNOTE
      ========================================================================== */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#000000]">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="font-clash text-3xl sm:text-4xl text-white font-normal">
              Explore Our Work &amp; Disciplines
            </h3>
            <p className="font-clash text-base text-white/70 mt-2 font-light">
              See the interactive configurators, spatial prototypes, and production platforms we have built.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-clash text-sm tracking-wide rounded-full hover:bg-white/90 transition-all font-medium"
            >
              <span>Explore Projects</span>
              <span>&rarr;</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-clash text-sm tracking-wide rounded-full hover:bg-white/10 transition-all"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
