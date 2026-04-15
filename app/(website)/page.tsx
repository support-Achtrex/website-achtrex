import { Hero } from "@/components/home-page/hero-section";
import { ServicesGrid } from "@/components/home-page/service-section";
import { LumiSection } from "@/components/home-page/lumi-section";
import { BusinessModelSection } from "@/components/home-page/business-model-section";
import { PopularLinks } from "@/components/home-page/popular-links";
import { LatestNews } from "@/components/home-page/latest-news";
import { AboutSection } from "@/components/home-page/about-section";
import { CTASection } from "@/components/cta";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Achtrex | Enterprise Data Architectures & Cognitive AI Platforms",
  description: "The official architectural laboratory for high-velocity data platforms and autonomous AI agents. Specializing in mobility datasets and resilient SaaS infrastructure.",
  keywords: ["Achtrex Home", "Enterprise SaaS Laboratory", "Next-gen AI Architectures", "Data Engineering Platform", "SaaS Builder Portfolio"],
  openGraph: {
    title: "Achtrex | Enterprise Data Infrastructure",
    description: "Architecting the future of scalable digital economies.",
    images: ["/projects/lumi_ui_v2.jpg"],
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <BusinessModelSection />
      <LumiSection />
      <ServicesGrid />
      <PopularLinks />
      <LatestNews />
      <AboutSection />
      <CTASection />
    </div>
  );
}