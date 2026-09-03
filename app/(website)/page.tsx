import { Hero } from "@/components/home-page/hero-section";
import { BusinessSupportSection } from "@/components/home-page/business-support-section";
import { SolutionsGrid } from "@/components/home-page/solutions-grid";
import { SupplyChainServices } from "@/components/home-page/supply-chain-services";
import { AchtrexFaq } from "@/components/home-page/achtrex-faq";
import { WelcomeBanner } from "@/components/home-page/welcome-banner";
import { TrustedAftermarket } from "@/components/home-page/trusted-aftermarket";
import { InsightsResources } from "@/components/home-page/insights-resources";

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
    images: ["/projects/aaia_ui_v2.png"],
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-900 overflow-x-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. "Find out how Achtrex can support your business" — supply chain flow graphic */}
      <BusinessSupportSection />

      {/* 3. Discover The Solutions — all 4 Achtrex solutions */}
      <SolutionsGrid />

      {/* 4. Supply Chain Services — Crimson Banner */}
      <SupplyChainServices />

      {/* 5. Everything you need to know about Achtrex — FAQ (was "Read Our News" slot) */}
      <AchtrexFaq />

      {/* 6. Welcome Banner — Split Slate & Operations Command Center */}
      <WelcomeBanner />

      {/* 7. Trusted Across The Independent Aftermarket — Testimonial Slider */}
      <TrustedAftermarket />

      {/* 8. Insights & Resources 2x2 Grid */}
      <InsightsResources />
    </div>
  );
}
