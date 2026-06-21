import { Hero } from "@/components/home-page/hero-section";
import { OfferingsTabs } from "@/components/home-page/offerings-tabs";
import { ComparisonSection } from "@/components/home-page/comparison-section";
import { PopularLinks } from "@/components/home-page/popular-links";
import { LatestNews } from "@/components/home-page/latest-news";
import { PortfolioGrid } from "@/components/home-page/portfolio-grid";

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
  <div className="min-h-screen bg-[#F8F9FA] text-slate-900 overflow-x-hidden">
   <Hero />
   <OfferingsTabs />
   <PortfolioGrid />
   <ComparisonSection />
   <PopularLinks />
   <LatestNews />
   
   
  </div>
 );
}
