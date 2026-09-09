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
    absolute: "Achtrex | Automotive Technology Partner — Software Builds, Cognitive AI & Consultation"
  },
  description: "Achtrex is an enterprise automotive technology partner delivering bespoke automotive software builds, cognitive AI diagnostics, and strategic automotive consultation.",
  keywords: [
    "automotive software builds", "cognitive AI automotive solutions", 
    "automotive consultation", "dealer management software", "automotive diagnostics"
  ],
  openGraph: {
    title: "Achtrex | Automotive Software Builds, Cognitive AI & Consultation",
    description: "Enterprise automotive software builds, cognitive AI diagnostic engines, and strategic advisory designed for modern mobility.",
    images: ["/images/solutions/auto_software_builds.jpg"],
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-900 overflow-x-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. "Find out how Achtrex can support your business" — supply chain flow graphic */}
      <BusinessSupportSection />

      {/* 3. Discover The Solutions — 3 Core Automotive Solutions */}
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
