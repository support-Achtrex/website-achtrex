'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface InnovationCard {
  id: string;
  title: string;
  subtitle: string;
  category: 'highlights' | 'industries' | 'technologies' | 'assets';
  categoryLabel: string;
  image: string;
  href: string;
}

const INNOVATION_ITEMS: InnovationCard[] = [
  {
    id: 'ai-dev',
    title: 'Artificial Intelligence',
    subtitle: 'Custom AI solutions, autonomous agents, RAG & LLMs',
    category: 'highlights',
    categoryLabel: 'Digital Technologies',
    image: '/studio-assets/service-ai-intelligent.jpg',
    href: '/services/ai-intelligent-experiences',
  },
  {
    id: 'architecture-systems',
    title: 'Water, Utilities & Environment',
    subtitle: 'High-scale spatial architecture & ecological digital twins',
    category: 'industries',
    categoryLabel: 'Industries',
    image: '/studio-assets/aerial-intro-bg.jpg',
    href: '/projects/architectural-spatial-experience',
  },
  {
    id: 'digital-journeys',
    title: 'Smart Mobility & Journeys',
    subtitle: 'Connected mobility platforms & passenger telemetry',
    category: 'industries',
    categoryLabel: 'Industries',
    image: '/images/home_processes_traffic.jpg',
    href: '/projects/connected-hospitality-platform',
  },
  {
    id: 'transport-logistics',
    title: 'Transportation & Logistics',
    subtitle: 'Real-time telemetry, routing engines & enterprise fleets',
    category: 'industries',
    categoryLabel: 'Industries',
    image: '/studio-assets/project-afterdark.jpg',
    href: '/projects/automotive-spatial-configurator',
  },
  {
    id: 'cgi-spatial',
    title: 'Velvet & Spatial 3D',
    subtitle: 'Photorealistic CGI, real-time spatial computing & assets',
    category: 'assets',
    categoryLabel: 'Proprietary Assets',
    image: '/studio-assets/service-cgi-immersive.jpg',
    href: '/services/cgi-immersive',
  },
  {
    id: 'cognitive-helios',
    title: 'Cognitive Systems & Copilots',
    subtitle: 'Multi-agent orchestration & enterprise knowledge graphs',
    category: 'technologies',
    categoryLabel: 'Digital Technologies',
    image: '/studio-assets/hero-spatial-installation.jpg',
    href: '/projects/intelligent-copilot-interface',
  },
  {
    id: 'experience-design',
    title: 'Experience Design',
    subtitle: 'Human-centered digital products, UX/UI & interaction design',
    category: 'highlights',
    categoryLabel: 'Digital Technologies',
    image: '/studio-assets/service-experience-design.jpg',
    href: '/services/experience-design',
  },
  {
    id: 'configurators',
    title: 'Product Configuration & Customization',
    subtitle: 'Real-time 3D PBR configurators & combinatorial rule engines',
    category: 'assets',
    categoryLabel: 'Proprietary Assets',
    image: '/studio-assets/service-product-configurators.jpg',
    href: '/services/product-configurators',
  },
  {
    id: 'digital-products',
    title: 'Cloud & Infrastructure',
    subtitle: 'Mission-critical web platforms & high-concurrency systems',
    category: 'technologies',
    categoryLabel: 'Digital Technologies',
    image: '/studio-assets/service-digital-products.jpg',
    href: '/services/digital-products',
  },
];

type FilterTab = 'all' | 'industries' | 'technologies' | 'assets';

export function ServicesGridSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filteredItems = INNOVATION_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'industries') return item.category === 'industries';
    if (activeTab === 'technologies') return item.category === 'technologies' || item.id === 'ai-dev' || item.id === 'experience-design';
    if (activeTab === 'assets') return item.category === 'assets';
    return true;
  });

  return (
    <section id="services-grid" className="w-full bg-[#f0f2fa] text-[#111827] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-b border-black/10">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Header Zone: Exact WEDOO Reference Styling */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#6366f1] block font-semibold mb-3">
            What We Do
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#1e1b4b] tracking-tight mb-8">
            We are innovation
          </h2>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
            {[
              { id: 'all', label: 'Highlights' },
              { id: 'industries', label: 'Industries' },
              { id: 'technologies', label: 'Digital Technologies' },
              { id: 'assets', label: 'Proprietary Assets' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as FilterTab)}
                  className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#1e40af] text-white border-[#1e40af] shadow-md shadow-blue-900/15'
                      : 'bg-white/80 text-[#374151] border-neutral-300 hover:bg-white hover:border-neutral-400'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3x3 Innovation Grid Matching Reference */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden bg-neutral-900 shadow-sm"
              >
                <Link href={item.href} className="block w-full h-full relative focus:outline-none">
                  {/* High-Resolution Art-Directed Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />

                  {/* Dark Gradient Scrim to ensure crisp typography */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

                  {/* Subtle Top-Right Category Pill (Appears on Hover) */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/90 border border-white/20">
                      Explore &rarr;
                    </span>
                  </div>

                  {/* Bottom Content: Bold Title + Excerpt */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                    <h3 className="font-sans font-bold text-lg sm:text-xl md:text-[1.35rem] text-white tracking-tight leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-white/80 font-light mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
