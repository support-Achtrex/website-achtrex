import { Hero } from "@/components/home-page/hero-section";
import { ServicesGrid } from "@/components/home-page/service-section";
import { ProductsGrid } from "@/components/home-page/products-grid";


import { PopularLinks } from "@/components/home-page/popular-links";
import { LatestNews } from "@/components/home-page/latest-news";
import { AboutSection } from "@/components/home-page/about-section";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Achtrex | Automotive Data Infrastructure & AI Ecosystem",
  description: "Achtrex is a global mobility technology startup providing scalable automotive data APIs, enterprise VIN intelligence platforms, and LUMI AI - a conversational vehicle intelligence engine.",
  keywords: [
    "Automotive data infrastructure", "VIN API", "automotive AI", 
    "connected mobility", "vehicle intelligence platform", "AutomotiveDataset", 
    "LUMI AI", "mobility tech"
  ],
  openGraph: {
    title: "Achtrex | Intelligent Automotive & AI Infrastructure",
    description: "AI-powered automotive intelligence designed for the next generation of connected mobility.",
    images: ["/projects/lumi_ui_v2.jpg"],
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white overflow-x-hidden">
      <Hero />
      <ProductsGrid />
      <AboutSection />
      <ServicesGrid />
      <PopularLinks />
      <LatestNews />
      
      
    </div>
  );
}
