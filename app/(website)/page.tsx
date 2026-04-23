import { Hero } from "@/components/home-page/hero-section";
import { ServicesGrid } from "@/components/home-page/service-section";
import { LumiSection } from "@/components/home-page/lumi-section";
import { ValueGeneration } from "@/components/home-page/value-generation";

import { PopularLinks } from "@/components/home-page/popular-links";
import { LatestNews } from "@/components/home-page/latest-news";
import { AboutSection } from "@/components/home-page/about-section";
import { CTASection } from "@/components/cta";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Achtrex | Enterprise Data Architectures & Cognitive AI Platforms",
  description: "Achtrex is the definitive architectural laboratory for high-velocity data platforms and autonomous AI agents. We specialize in global mobility datasets and resilient SaaS infrastructure for the digital economy.",
  keywords: [
    "Achtrex Home", "Enterprise SaaS Laboratory", "Next-gen AI Architectures", 
    "Data Engineering Platform", "SaaS Builder Portfolio", "Mobility Intelligence", 
    "High-Frequency Data Pipelines", "Autonomous AI Agents", "Venture Building"
  ],
  openGraph: {
    title: "Achtrex | Enterprise Data & AI Infrastructure",
    description: "Architecting the future of scalable digital economies through high-velocity data and AI.",
    images: ["/projects/lumi_ui_v2.jpg"],
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <ValueGeneration />

      <LumiSection />
      <ServicesGrid />
      <PopularLinks />
      <LatestNews />
      <AboutSection />
      <CTASection />
    </div>
  );
}