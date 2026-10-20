'use client';

import Link from 'next/link';
import Image from 'next/image';

interface PosterCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  bgGradient: string;
  accentColor: string;
  textColor: string;
  graphicType: 'car' | 'spatial' | 'ai' | 'digital' | 'story' | 'materials' | 'edge' | 'manifesto';
  image?: string;
}

const POSTERS: PosterCard[] = [
  {
    id: 'configurator',
    tag: 'SPATIAL 01',
    title: 'PBR 3D CONFIGURATOR.',
    subtitle: 'REAL-TIME AUTOMOTIVE HARDWARE RENDER ENGINE',
    badge: '60 FPS EDGE',
    bgGradient: 'from-[#ff5500] via-[#d03b00] to-[#120500]',
    accentColor: '#ff7733',
    textColor: 'text-white',
    graphicType: 'car',
    image: '/case/roadster/roadster-profile.jpg',
  },
  {
    id: 'roadster',
    tag: 'HYPERCAR 02',
    title: 'ENDURANCE IS POWER.',
    subtitle: 'TESLA ROADSTER 0-60 MPH IN 1.9 SECONDS',
    badge: '10,000 NM',
    bgGradient: 'from-[#ff8800] via-[#c43200] to-[#0a0200]',
    accentColor: '#ffaa33',
    textColor: 'text-white',
    graphicType: 'car',
    image: '/case/roadster/roadster-stage.jpg',
  },
  {
    id: 'spatial',
    tag: 'ARCHITECTURAL 03',
    title: 'SPATIAL IS POWER.',
    subtitle: 'VIRTUAL DIGITAL TWINS & IMMERSIVE REAL ESTATE',
    badge: 'UNREAL ENGINE 5',
    bgGradient: 'from-[#0077cc] via-[#004488] to-[#031124]',
    accentColor: '#33aaff',
    textColor: 'text-white',
    graphicType: 'spatial',
    image: '/uploads/1792237186403-ai-2-1.webp',
  },
  {
    id: 'digital',
    tag: 'ENGINEERING 04',
    title: 'DIGITAL PLATFORMS.',
    subtitle: 'HIGH-PERFORMANCE ENTERPRISE SOFTWARE SUITES',
    badge: 'SUB-SECOND EDGE',
    bgGradient: 'from-[#1a2332] via-[#0d1520] to-[#05080e]',
    accentColor: '#00d4ff',
    textColor: 'text-white',
    graphicType: 'digital',
    image: '/uploads/1792236946796-digital-platform-header.jpg',
  },
  {
    id: 'innovation',
    tag: 'DISPATCH 05',
    title: 'WELCOME TO THE FOREFRONT.',
    subtitle: 'WHERE TECHNOLOGY & CREATIVITY COME TOGETHER',
    badge: 'ACHTREX LABS',
    bgGradient: 'from-[#0d0d12] via-[#161622] to-[#050508]',
    accentColor: '#f59e0b',
    textColor: 'text-white',
    graphicType: 'manifesto',
    image: '/case/roadster/roadster-cockpit.jpg',
  },
  {
    id: 'intelligence',
    tag: 'AI AUTONOMY 06',
    title: 'INTELLIGENCE IS POWER.',
    subtitle: 'AUTONOMOUS MULTI-AGENT REASONING & WORKFLOWS',
    badge: 'AGENTIC AI',
    bgGradient: 'from-[#e65100] via-[#bf360c] to-[#120000]',
    accentColor: '#ff9100',
    textColor: 'text-white',
    graphicType: 'ai',
    image: '/uploads/1792237186403-ai-2-1.webp',
  },
  {
    id: 'experience',
    tag: 'EXPERIENCE 07',
    title: 'ACHTREX IS HERE.',
    subtitle: 'CINEMATIC STORYTELLING & INTERACTIVE WORLDS',
    badge: 'STUDIO DIRECT',
    bgGradient: 'from-[#ffffff] via-[#f3f4f6] to-[#e5e7eb]',
    accentColor: '#0066cc',
    textColor: 'text-neutral-900',
    graphicType: 'story',
    image: '/studio-assets/service-experience-design.jpg',
  },
  {
    id: 'materials',
    tag: 'PBR SHADERS 08',
    title: 'GROW WITH THE PERFECT COMBINATION.',
    subtitle: 'PHYSICALLY ACCURATE TANGIBLE MATERIAL SWATCHES',
    badge: '4K PBR',
    bgGradient: 'from-[#ff6b00] via-[#c2410c] to-[#0f0500]',
    accentColor: '#ea580c',
    textColor: 'text-white',
    graphicType: 'materials',
    image: '/studio-assets/grid-product-config.jpg',
  },
  {
    id: 'edge',
    tag: 'DISTRIBUTION 09',
    title: 'RELIABILITY IS POWER.',
    subtitle: 'EDGE DISTRIBUTION & LOW-LATENCY 3D PIXEL STREAMING',
    badge: 'GLOBAL CDN',
    bgGradient: 'from-[#0b101b] via-[#040810] to-[#010204]',
    accentColor: '#38bdf8',
    textColor: 'text-white',
    graphicType: 'edge',
    image: '/case/roadster/roadster-rear.jpg',
  },
];

export function AboutAchtrexIsometricSection() {
  return (
    <section
      id="about-achtrex"
      className="relative w-full bg-[#08090c] text-white py-24 sm:py-32 lg:py-40 overflow-hidden font-sans"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* =========================================================================
              LEFT COLUMN: ONLY "ABOUT ACHTREX" CONTENT (MATCHING SERVICES FONT FORMAT)
          ========================================================================== */}
          <div className="lg:col-span-5 z-20 space-y-6 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#889fa8] block mb-2">
              About Achtrex
            </span>

            <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-normal leading-[1.08] tracking-tight text-white">
              We design and build digital experiences where technology, creativity and intelligence come together.
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Achtrex creates immersive digital experiences, intelligent products, interactive platforms and technology-driven brand experiences for modern businesses.
            </p>

            <div className="pt-4 sm:pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-clash text-sm text-white font-medium group hover:text-white/70 transition-colors"
              >
                <span>Discover our story</span>
                <span className="transition-transform group-hover:translate-x-1.5 duration-200">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: ISOMETRIC 3D ANGLED POSTER GRID (MATCHING IMAGE 4)
          ========================================================================== */}
          <div className="lg:col-span-7 relative w-full h-[540px] sm:h-[620px] lg:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Subtle Radial Vignette Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* 3D Perspective Canvas */}
            <div
              className="relative w-[800px] sm:w-[1000px] lg:w-[1100px] h-[750px] sm:h-[900px] flex items-center justify-center pointer-events-auto select-none"
              style={{
                perspective: '1300px',
              }}
            >
              {/* Isometric Rotated Plane */}
              <div
                className="grid grid-cols-3 gap-6 sm:gap-8 transition-transform duration-700 ease-out"
                style={{
                  transform: 'rotateX(52deg) rotateZ(-32deg) translateY(-20px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {POSTERS.map((poster) => (
                  <div
                    key={poster.id}
                    className={`relative w-[210px] sm:w-[250px] lg:w-[270px] aspect-[1/1.42] rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-gradient-to-br ${poster.bgGradient} ${poster.textColor} p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2`}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Background Visual Asset */}
                    {poster.image && (
                      <div className="absolute inset-0 opacity-30 group-hover:opacity-45 transition-opacity mix-blend-luminosity overflow-hidden">
                        <Image
                          src={poster.image}
                          alt={poster.title}
                          fill
                          sizes="280px"
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Top Tag & Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest opacity-80 font-semibold">
                        {poster.tag}
                      </span>
                      <span
                        className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold shadow-sm"
                        style={{
                          backgroundColor: poster.textColor === 'text-white' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                        }}
                      >
                        {poster.badge}
                      </span>
                    </div>

                    {/* Poster Center Graphic Details */}
                    <div className="relative z-10 py-2 my-auto">
                      <div
                        className="w-12 h-1 mb-3 rounded-full"
                        style={{ backgroundColor: poster.accentColor }}
                      />
                      <h3 className="font-clash text-lg sm:text-xl lg:text-[1.35rem] font-bold tracking-tight leading-[1.08] uppercase">
                        {poster.title}
                      </h3>
                    </div>

                    {/* Poster Lower Subtitle & Achtrex Signature */}
                    <div className="relative z-10 pt-2 border-t border-current/15 flex items-end justify-between">
                      <p className="font-mono text-[8px] sm:text-[9px] opacity-75 uppercase tracking-wider max-w-[170px] leading-snug">
                        {poster.subtitle}
                      </p>
                      <span className="font-clash text-[9px] sm:text-[10px] font-bold uppercase tracking-widest opacity-90 shrink-0">
                        ACHTREX
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
