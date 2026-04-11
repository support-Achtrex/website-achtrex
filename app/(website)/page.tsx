import { Hero } from "@/components/home-page/hero-section";
import { ServicesGrid } from "@/components/home-page/service-section";
import { ProductSection } from "@/components/home-page/product-section";
import { ProcessSection } from "@/components/home-page/process-section";
import { AboutSection } from "@/components/home-page/about-section";
import { CTASection } from "@/components/cta";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <ProductSection />
      <ServicesGrid /> 
      <ProcessSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}