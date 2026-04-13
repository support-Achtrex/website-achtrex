import { Hero } from "@/components/home-page/hero-section";
import { ServicesGrid } from "@/components/home-page/service-section";
import { PopularLinks } from "@/components/home-page/popular-links";
import { LatestNews } from "@/components/home-page/latest-news";
import { AboutSection } from "@/components/home-page/about-section";
import { CTASection } from "@/components/cta";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <ServicesGrid />
      <PopularLinks />
      <LatestNews />
      <AboutSection />
      <CTASection />
    </div>
  );
}