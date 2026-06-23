import { Hero } from "@/components/home-page/hero-section";
import { OfferingsTabs } from "@/components/home-page/offerings-tabs";
import { ComparisonSection } from "@/components/home-page/comparison-section";
import { PopularLinks } from "@/components/home-page/popular-links";
import { LatestNews } from "@/components/home-page/latest-news";
import { PortfolioGrid } from "@/components/home-page/portfolio-grid";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: "Achtrex | Automotive Technology Partner — Data, AI & Custom Platforms"
  },
  description: "Achtrex is a global automotive technology partner providing scalable automotive data APIs, enterprise VIN intelligence platforms, and custom software development solutions.",
  keywords: [
    "automotive software development", "vehicle data API", 
    "dealer management software", "automotive AI solutions"
  ],
  openGraph: {
    title: "Achtrex | Automotive Technology Partner — Data, AI & Custom Platforms",
    description: "Enterprise automotive software solutions designed for the next generation of connected mobility.",
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
