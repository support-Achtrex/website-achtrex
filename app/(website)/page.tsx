import { HeroSlider } from '@/components/studio/HeroSlider';
import { AboutAchtrexIsometricSection } from '@/components/studio/AboutAchtrexIsometricSection';
import { ServicesGridSection } from '@/components/studio/ServicesGridSection';
import { HomeMediaSection } from '@/components/studio/HomeMediaSection';
import { Metadata } from 'next';
import { MediaDB } from '@/lib/media-db';
import { ServicesDB } from '@/lib/services-db';
import { HeroDB } from '@/lib/hero-db';

export const revalidate = 0; // Fresh updates when admin updates content

export const metadata: Metadata = {
  title: 'Achtrex : Digital Experience & Technology Studio',
  description: 'We design and build digital experiences where technology, creativity and intelligence come together. High-performance 3D configurators, spatial systems, and custom AI products.',
  alternates: {
    canonical: 'https://achtrex.com',
  },
};

export default function StudioHomePage() {
  const mediaItems = MediaDB.getAll();
  const services = ServicesDB.getAll();
  const heroConfig = HeroDB.getConfig();

  return (
    <div className="bg-[#000000] text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* =========================================================================
          CHAPTER 01: FULL-BLEED VIDEO HERO SLIDER
          Featuring Achtrex Selected Projects
      ========================================================================== */}
      <HeroSlider config={heroConfig} />

      {/* =========================================================================
          CHAPTER 02: ABOUT ACHTREX (ISOMETRIC 3D POSTER SHOWCASE MATCHING IMAGE 4)
          Only "About Achtrex" Content
      ========================================================================== */}
      <AboutAchtrexIsometricSection />

      {/* =========================================================================
          CHAPTER 03: SERVICES GRID (Interactive Slider Experience With Bigger Images)
      ========================================================================== */}
      <ServicesGridSection services={services} />

      {/* =========================================================================
          CHAPTER 04: MEDIA SECTION (Matching Tesla Model Y In Image 3)
      ========================================================================== */}
      <HomeMediaSection items={mediaItems} />
    </div>
  );
}
