'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '@/data/studio-data';

interface ServiceEditorialModuleProps {
  service: ServiceItem;
  theme?: 'negative' | 'positive';
}

export function ServiceEditorialModule({
  service,
  theme = 'negative',
}: ServiceEditorialModuleProps) {
  const isPositive = theme === 'positive';

  return (
    <section
      id={`service-${service.id}`}
      className={`relative py-24 sm:py-36 border-b transition-colors duration-500 overflow-hidden ${
        isPositive
          ? 'bg-[#FFFFFF] text-[#000000] border-black/10'
          : 'bg-[#000000] text-[#FFFFFF] border-white/10'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* TOP ROW: Large Display Title with Outline Typography + Link */}
        <div className="mb-14 sm:mb-20">
          <Link
            href={`/services/${service.slug}`}
            data-cursor="EXPLORE"
            className="group block"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-2">
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                <span
                  className={`block transition-transform duration-300 group-hover:translate-x-3 ${
                    isPositive ? 'outline-text-black' : 'outline-text-white'
                  }`}
                >
                  {service.title}
                </span>
                <span
                  className={`block text-xl sm:text-2xl md:text-3xl font-light tracking-normal mt-2 transition-transform duration-300 group-hover:translate-x-3 ${
                    isPositive ? 'text-black/60' : 'text-white/60'
                  }`}
                >
                  {service.subtitle}
                </span>
              </h2>

              <div
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest uppercase transition-transform duration-300 group-hover:translate-x-1 ${
                  isPositive ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'
                }`}
              >
                <span>Go to Service</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>
        </div>

        {/* MIDDLE ROW: Left Zone (Capabilities & Case Study) + Right Zone (Philosophy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column: Capabilities bullet list & Case study link */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span
                className={`text-[11px] font-mono tracking-[0.25em] uppercase block mb-4 ${
                  isPositive ? 'text-black/40' : 'text-white/40'
                }`}
              >
                Capabilities
              </span>
              <ul className="space-y-2">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className={`text-sm sm:text-base font-light tracking-wide ${
                      isPositive ? 'text-black/85' : 'text-white/85'
                    }`}
                  >
                    &bull; {cap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study Deep Link */}
            {service.featuredCaseSlug && (
              <div className="pt-6 border-t border-current/10">
                <span
                  className={`text-[11px] font-mono tracking-[0.25em] uppercase block mb-2 ${
                    isPositive ? 'text-black/40' : 'text-white/40'
                  }`}
                >
                  Go to the case study
                </span>
                <Link
                  href={`/projects/${service.featuredCaseSlug}`}
                  data-cursor="VIEW"
                  className={`text-base sm:text-lg font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity ${
                    isPositive ? 'text-black' : 'text-white'
                  }`}
                >
                  {service.featuredCaseTitle}
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Editorial Philosophy Paragraph */}
          <div className="lg:col-span-7">
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-light leading-relaxed max-w-3xl ${
                isPositive ? 'text-black/90' : 'text-white/90'
              }`}
            >
              {service.description}
            </p>
          </div>
        </div>

        {/* BOTTOM ROW: Large Cinematic Visual Frame (Dominates the screen) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-current/10 group shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isPositive
                ? 'bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-40 group-hover:opacity-20'
                : 'bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40'
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
}
