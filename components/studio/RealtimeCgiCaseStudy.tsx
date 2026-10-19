'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CaseStudyVideoPlayer } from './CaseStudyVideoPlayer';
import { RelatedProjectsCarousel } from './RelatedProjectsCarousel';
import { ConceptExperienceItem } from '@/data/studio-data';

interface RealtimeCgiCaseStudyProps {
  project?: ConceptExperienceItem;
}

export function RealtimeCgiCaseStudy({ project }: RealtimeCgiCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Synchronize header light/dark theme dynamically based on current visible section
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section-color]');
    if (!sections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerTriggerPoint = scrollY + 80;

      // Update hero video visibility to avoid bleed on subsequent sections
      setIsHeroVisible(scrollY < window.innerHeight * 1.15);

      let activeColor = 'negative';
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (headerTriggerPoint >= top && headerTriggerPoint < bottom) {
          activeColor = sec.getAttribute('data-section-color') || 'negative';
        }
      });

      document.documentElement.setAttribute(
        'data-header-theme',
        activeColor === 'positive' ? 'light' : 'dark'
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.removeAttribute('data-header-theme');
    };
  }, []);

  const scrollToSection2 = () => {
    const el = document.getElementById('section_2');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#000000] text-white selection:bg-black selection:text-white"
    >
      {/* =========================================================================
          SECTION 1: IMMERSIVE HERO
      ========================================================================== */}
      <section
        id="section_1"
        data-section-color="negative"
        className="relative w-full h-screen min-h-[640px] flex items-end pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
      >
        {/* Fixed Background Video Covering Full Viewport (Matching Wedoo .hero-project .img-wrapper) */}
        <div
          className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden transition-opacity duration-700 ${
            isHeroVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/case/realtime-cgi/hero-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/hero-videos/realtime-cgi-cover.mp4" type="video/mp4" />
          </video>
          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)]" />
        </div>

        {/* Content Container (Pinned to Bottom) */}
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl"
          >
            <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] font-normal text-white leading-[1.02] tracking-tight">
              Real-time CGI and
              <br />
              Immersive Experiences
            </h1>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator at Bottom Left (Matching Wedoo .wd-scroll-container) */}
        <button
          onClick={scrollToSection2}
          aria-label="Scroll down to project details"
          className="absolute left-6 sm:left-12 lg:left-20 bottom-6 sm:bottom-8 z-20 flex items-center gap-3 cursor-pointer group focus:outline-none"
        >
          <span className="font-clash text-xs sm:text-sm tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-16 sm:w-24 h-[1px] bg-white/25 relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-white animate-[scrollAnim_2.6s_ease-in-out_infinite]" />
          </div>
        </button>
      </section>

      {/* =========================================================================
          SECTION 2: PROJECT DATA (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="section_2"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] pt-20 sm:pt-28 pb-16 sm:pb-24 border-t border-black/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="sr-only">Project Specifications and Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Clients */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Clients
              </p>
              <p className="font-clash text-base sm:text-lg text-black/75 font-light">
                Enterprise &amp; Global Brands
              </p>
            </div>

            {/* Column 2: Year */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Year
              </p>
              <p className="font-clash text-base sm:text-lg text-black/75 font-light">
                2025
              </p>
            </div>

            {/* Column 3: Activities */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Activities
              </p>
              <div className="font-clash text-base sm:text-lg text-black/75 font-light space-y-1">
                <p>CGI Production</p>
                <p>Unreal Engine 5 Development</p>
                <p>Pixel Streaming &amp; System Integration</p>
              </div>
            </div>

            {/* Column 4: Related Services */}
            <div className="space-y-2">
              <p className="font-clash text-lg sm:text-xl font-medium text-black">
                Related services
              </p>
              <div className="font-clash text-base sm:text-lg text-black space-y-1.5">
                <Link
                  href="/services/product-configurators"
                  className="block hover:text-black/60 underline underline-offset-4 transition-colors"
                >
                  Automotive &amp; Real Estate Product Customization
                </Link>
                <Link
                  href="/services/creative-strategy"
                  className="block hover:text-black/60 underline underline-offset-4 transition-colors"
                >
                  Creative Strategy &amp; Digital Content
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: INTRODUCTORY STATEMENT (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="section_3"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] py-16 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-normal text-black leading-[1.12] tracking-tight text-left">
              Revolutionize Product Configuration with Real-Time CGI: Unmatched
              Interactivity and Detail.
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: IMMERSIVE EXPERIENCE (Positive / Light Theme)
      ========================================================================== */}
      <section
        id="section_4"
        data-section-color="positive"
        className="relative z-10 w-full bg-[#ffffff] text-[#000000] pb-24 sm:pb-36 lg:pb-44"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16">
          {/* Top Row: Large Square Image Left, Text Container Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            {/* Left Col: 1 Large Square Image */}
            <div className="lg:col-span-6 relative aspect-square overflow-hidden bg-neutral-100 shadow-xl border border-black/10">
              <Image
                src="/case/realtime-cgi/real-engine-square-1.jpg"
                alt="Unreal Engine Photorealistic Real-time CGI"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                priority
              />
            </div>

            {/* Right Col: Editorial Copy (col-lg-6 with 2-col offset layout) */}
            <div className="lg:col-span-6 pb-2 sm:pb-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
                <div className="md:col-span-5">
                  <h3 className="font-clash text-2xl sm:text-3xl md:text-4xl font-normal text-black tracking-tight">
                    Immersive Experience
                  </h3>
                </div>
                <div className="md:col-span-7 font-clash text-base sm:text-lg text-black/80 font-light leading-relaxed space-y-4">
                  <p>
                    With real-time CGI and Unreal Engine, configuring products
                    like cars or homes becomes an engaging and visually stunning
                    experience.
                  </p>
                  <p>
                    Users can customize every detail with precision and
                    photorealism, transforming the process into an unprecedented
                    interactive journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Two Square Images Side-by-Side on the Right Half */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-square overflow-hidden bg-neutral-100 shadow-lg border border-black/10">
                <Image
                  src="/case/realtime-cgi/real-engine-square-2.jpg"
                  alt="Real-time interactive rendering component"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden bg-neutral-100 shadow-lg border border-black/10">
                <Image
                  src="/case/realtime-cgi/real-engine-square-3.jpg"
                  alt="Lumen lighting and nanite geometry detail"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CAR CONFIGURATOR (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="section_5"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-24 sm:py-32 lg:py-40 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16">
          {/* Header Row: 6-col spacer, 3-col title, 3-col text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-3">
              <h3 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                Car Configurator
              </h3>
            </div>
            <div className="lg:col-span-3 font-clash text-sm sm:text-base text-white/80 font-light leading-relaxed space-y-4">
              <p>
                Configuring a vehicle with such high visual fidelity has never
                been more rewarding.
              </p>
              <p>
                Thanks to Lumen, UE5’s rendering engine delivers photorealistic
                and highly evocative images.
              </p>
              <p>
                The interaction design focuses on ease of use, allowing users to
                rotate the camera, zoom into the finest details, and interact
                with various components to admire and personalize every part.
              </p>
            </div>
          </div>

          {/* Full-Width Video Player: Video 5 */}
          <CaseStudyVideoPlayer
            id="video_5"
            vimeoId="927118579"
            poster="/case/realtime-cgi/car-config-video-poster.jpg"
            title="Real-Time 3D Car Configurator"
          />

          {/* Asymmetrical Right-Aligned Detail Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                <Image
                  src="/case/realtime-cgi/car-config-detail.jpg"
                  alt="Automotive real-time cockpit customization"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERLUDE VIDEO SHOWCASE (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="section_9"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] pb-24 sm:pb-32 lg:pb-40"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20">
          <CaseStudyVideoPlayer
            id="video_9"
            vimeoId="932784462"
            poster="/case/realtime-cgi/hero-poster.jpg"
            title="Cinematic Real-Time Camera Choreography"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: REAL ESTATE AND PIXEL STREAMING (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="section_6"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-24 sm:py-32 lg:py-40 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16">
          {/* Header Row: 6-col spacer, 3-col title, 3-col text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-3">
              <h3 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                Real estate
                <br />
                and Pixel streaming
              </h3>
            </div>
            <div className="lg:col-span-3 font-clash text-sm sm:text-base text-white/80 font-light leading-relaxed space-y-4">
              <p>
                The real estate sector increasingly requires real-time CGI
                pre-visualizations to streamline the property buying process.
                Realistic details and interactivity enable buyers to virtually
                explore properties and make real-time modifications, reducing
                decision times and enhancing the overall purchasing experience.
              </p>
              <p>
                With Unreal Engine’s Pixel Streaming technology, users can
                interact with applications and view them in real time through a
                web browser, without the need to download or install any
                software.
              </p>
            </div>
          </div>

          {/* Full-Width Video Player: Video 6 */}
          <CaseStudyVideoPlayer
            id="video_6"
            vimeoId="927116243"
            poster="/case/realtime-cgi/real-estate-video-poster.jpg"
            title="Real Estate and Pixel Streaming Walkthrough"
          />

          {/* Asymmetrical Right-Aligned Detail Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                <Image
                  src="/case/realtime-cgi/real-estate-detail.jpg"
                  alt="Architectural luxury villa walkthrough"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: VIRTUAL SHOWROOM (Negative / Dark Theme)
      ========================================================================== */}
      <section
        id="section_7"
        data-section-color="negative"
        className="relative z-10 w-full bg-[#000000] text-[#ffffff] py-24 sm:py-32 lg:py-40 border-t border-white/10"
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16">
          {/* Header Row: 6-col spacer, 3-col title, 3-col text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-3">
              <h3 className="font-clash text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                Virtual Showroom
              </h3>
            </div>
            <div className="lg:col-span-3 font-clash text-sm sm:text-base text-white/80 font-light leading-relaxed">
              <p>
                A virtual showroom enables you to reach a global audience by
                presenting products interactively and customized to their
                preferences, offering a much more engaging and immersive
                aesthetic experience.
              </p>
            </div>
          </div>

          {/* Full-Width Video Player: Video 7 */}
          <CaseStudyVideoPlayer
            id="video_7"
            vimeoId="892196666"
            poster="/case/realtime-cgi/showroom-video-poster.jpg"
            title="Interactive Virtual Showroom"
          />

          {/* Asymmetrical Right-Aligned Detail Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                <Image
                  src="/case/realtime-cgi/showroom-detail.jpg"
                  alt="Virtual showroom product exhibition"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: RELATED PROJECTS (Positive / Light Theme)
      ========================================================================== */}
      <RelatedProjectsCarousel />
    </div>
  );
}
