'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ServiceItem, STUDIO_CONFIG } from '@/data/studio-data';
import { Interactive3DViewport } from '@/components/studio/Interactive3DViewport';

export function ServicesOverviewClient({ services }: { services: ServiceItem[] }) {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO (Services Hero)
      ========================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden">
        {/* Top Tagline */}
        <div className="w-full max-w-[1720px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block">
            Capabilities &amp; Solutions
          </span>
        </div>

        {/* Large Services Title pinned left */}
        <div className="w-full max-w-[1720px] mx-auto my-auto py-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal tracking-tight text-white leading-none"
          >
            Services
          </motion.h1>
        </div>

        {/* Bottom Manifesto statement & Vertical Scroll line */}
        <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12">
          {/* Bottom-left vertical scroll indicator */}
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

          {/* Bottom-center manifesto text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl font-clash text-lg sm:text-2xl md:text-3xl text-white/90 font-light leading-snug"
          >
            <p>
              Strategies, experiences, stories, contents, interfaces, intelligence.
            </p>
            <p className="text-white/60 mt-1">
              &hellip;and millions of lines of code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          50/50 SPLIT SERVICE SECTIONS (Achtrex Services with Live DB data)
      ========================================================================== */}
      <div className="w-full">
        {services.map((service, idx) => {
          const isImageLeft = idx % 2 === 0;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Media Half: Interactive 3D for AI Services / High-Res Visual for other services */}
              <div
                className={`relative w-full h-[55vh] lg:h-full min-h-[520px] flex items-center justify-center overflow-hidden group ${
                  isImageLeft ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {service.id === 'ai-intelligent-experiences' ? (
                  <div className="relative w-full h-full min-h-[520px] bg-neutral-950 flex items-center justify-center">
                    <Interactive3DViewport mode="ai-intelligent-experiences" className="w-full h-full" />

                    {/* Ambient Radial Gradient Mask */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />



                    {/* Quick Link Overlay */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="absolute bottom-8 left-8 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-clash text-xs font-medium tracking-wide shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      <span>Explore Service &amp; Deliverables</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                ) : (
                  <>
                    {service.heroImage ? (
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-900" />
                    )}

                    {/* Refined Dark Gradient Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Quick Link Overlay on Hover */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="absolute bottom-8 left-8 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-clash text-xs font-medium tracking-wide shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <span>Explore Service &amp; Deliverables</span>
                      <span>&rarr;</span>
                    </Link>
                  </>
                )}
              </div>

              {/* Editorial Half */}
              <div
                className={`p-8 sm:p-14 lg:p-20 xl:p-24 flex flex-col justify-between bg-[#000000] ${
                  isImageLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Top: Title & Read more link */}
                <div className="pt-4 lg:pt-8">
                  <span className="font-mono text-xs text-[#889fa8] uppercase tracking-widest block mb-4">
                    Service 0{service.number}
                  </span>
                  <h2 className="font-clash text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.02] whitespace-pre-line mb-8">
                    {service.title}
                  </h2>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 font-clash text-sm sm:text-base text-white/80 hover:text-white group transition-colors"
                  >
                    <span>Explore service details</span>
                    <span className="transition-transform group-hover:translate-x-2 duration-300">
                      &rarr;
                    </span>
                  </Link>
                </div>

                {/* Bottom: Subtitle (Left) + Skills List & Case Study (Right) */}
                <div className="pt-16 sm:pt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                  {/* Subtitle */}
                  <div>
                    <h3 className="font-clash text-xl sm:text-2xl font-light text-white/90 leading-snug">
                      {service.subtitle}
                    </h3>
                  </div>

                  {/* Capabilities & Case study */}
                  <div className="flex flex-col justify-between space-y-8">
                    {/* Capabilities list */}
                    <ul className="space-y-1.5 font-clash text-xs sm:text-sm text-white/70">
                      {service.capabilities.slice(0, 6).map((cap) => (
                        <li key={cap} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/50" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Case study deep-link */}
                    {service.featuredCaseSlug && (
                      <div className="pt-4">
                        <span className="font-clash text-[11px] text-[#889fa8] block mb-1">
                          Featured Project
                        </span>
                        <Link
                          href={`/projects/${service.featuredCaseSlug}`}
                          className="font-clash text-xs sm:text-sm text-white hover:text-white/80 underline underline-offset-4 transition-colors"
                        >
                          {service.featuredCaseTitle} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* =========================================================================
          CLOSING STATEMENT (Conversion to Contact)
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#000000] text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            Client Commissions &bull; Full-Lifecycle Studio
          </span>
          <h3 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight">
            Let&rsquo;s talk about your idea.
          </h3>
          <p className="font-clash text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto">
            Have a product, experience or idea you want to bring to life? Let&rsquo;s build something meaningful together.
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
