'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'all' | 'ai-tech' | 'design' | 'spatial';
  categoryLabel: string;
  image: string;
  video?: string;
  href: string;
}

const REAL_SERVICES: ServiceCardData[] = [
  {
    id: 'ai-dev',
    number: '04',
    title: 'Artificial Intelligence Development Services',
    subtitle: 'Custom AI solutions, autonomous multi-agents, RAG & LLMs, predictive workflows and intelligent systems.',
    category: 'ai-tech',
    categoryLabel: 'AI & Intelligence',
    image: '/studio-assets/preview-lumen.jpg',
    video: '/hero-videos/lumen-intelligent-cover.mp4',
    href: '/services/ai-intelligent-experiences',
  },
  {
    id: 'creative-strategy',
    number: '02',
    title: 'Creative Strategy & Digital Content',
    subtitle: 'Creative direction, cinematic studio production, storytelling, interactive content and brand worlds.',
    category: 'design',
    categoryLabel: 'Design & Content',
    image: '/studio-assets/preview-afterdark.jpg',
    video: '/hero-videos/after-dark-cover.mp4',
    href: '/services/creative-strategy',
  },
  {
    id: 'digital-products',
    number: '03',
    title: 'Digital Products',
    subtitle: 'High-performance web platforms, custom applications, enterprise portals, SaaS and cloud systems.',
    category: 'ai-tech',
    categoryLabel: 'Engineering & Platforms',
    image: '/studio-assets/preview-aura.jpg',
    video: '/hero-videos/aura-vehicle-cover.mp4',
    href: '/services/digital-products',
  },
  {
    id: 'cgi-immersive',
    number: '05',
    title: 'CGI, 3D & Immersive Experiences',
    subtitle: 'Photorealistic CGI, real-time 3D, WebGL/WebGPU viewports, spatial computing and virtual spaces.',
    category: 'spatial',
    categoryLabel: 'Spatial & 3D',
    image: '/studio-assets/preview-008df38e.jpg',
    video: '/studio-assets/video-spatial-installation.mp4',
    href: '/services/cgi-immersive',
  },
  {
    id: 'experience-design',
    number: '01',
    title: 'Experience Design',
    subtitle: 'Human-centered UX/UI, digital journeys, design systems, tactile micro-interactions and immersive interfaces.',
    category: 'design',
    categoryLabel: 'Design & UX',
    image: '/studio-assets/preview-7e05b651.jpg',
    video: '/studio-assets/video-kinetic-sculpture.mp4',
    href: '/services/experience-design',
  },
  {
    id: 'configurators',
    number: '06',
    title: 'Product Configuration & Customization',
    subtitle: 'Real-time 3D PBR configurators, tangible material swatches, industrial automated systems and rule engines.',
    category: 'spatial',
    categoryLabel: 'Spatial & Customization',
    image: '/studio-assets/preview-b2311f23-4s.jpg',
    video: '/studio-assets/video-conveyor-customizer.mp4',
    href: '/services/product-configurators',
  },
];

type FilterCategory = 'all' | 'ai-tech' | 'design' | 'spatial';

export function ServicesGridSection() {
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');

  const filteredItems = REAL_SERVICES.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="services-grid" className="w-full bg-white text-gray-900 py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-b border-gray-200">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Header Zone: Exact WEDOO Reference Styling */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#4f46e5] block font-semibold mb-3">
            What We Do
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#0f172a] tracking-tight mb-8">
            We are innovation
          </h2>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'ai-tech', label: 'AI & Engineering' },
              { id: 'design', label: 'Design & Content' },
              { id: 'spatial', label: '3D & Customization' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as FilterCategory)}
                  className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#0f172a] text-white border-[#0f172a] shadow-md shadow-slate-900/15'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-black'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3x2 Grid of Achtrex's Real Services */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[16/11] sm:aspect-[16/11] lg:aspect-[16/11] overflow-hidden bg-black shadow-md rounded-none"
              >
                <Link href={item.href} className="block w-full h-full relative focus:outline-none">
                  {/* High-Resolution Media: Smooth Looping Video or Image */}
                  {item.video ? (
                    <video
                      src={item.video}
                      poster={item.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  )}

                  {/* Dark Gradient Scrim: Deep dark overlay guaranteeing 100% white text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/25 opacity-90 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Zone: Service Number & Hover Pill */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                    <span 
                      className="font-mono text-xs uppercase tracking-widest font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      {item.number}
                    </span>
                    <span 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest border border-white/30"
                      style={{ color: '#ffffff' }}
                    >
                      Explore Service &rarr;
                    </span>
                  </div>

                  {/* Bottom Content: Bright White Bold Title + High-Contrast Subtitle */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 pointer-events-none">
                    {/* Category Label */}
                    <span 
                      className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold block mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                      style={{ color: '#67e8f9' }}
                    >
                      {item.categoryLabel}
                    </span>

                    {/* Service Title in Pure White Bold */}
                    <h3 
                      className="font-sans font-bold text-xl sm:text-2xl tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
                      style={{ color: '#ffffff' }}
                    >
                      {item.title}
                    </h3>

                    {/* Subtitle / Description */}
                    <p 
                      className="font-sans text-xs sm:text-sm font-light mt-2 leading-relaxed line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                      style={{ color: 'rgba(255, 255, 255, 0.92)' }}
                    >
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
