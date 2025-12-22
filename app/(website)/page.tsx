import { Hero } from "@/components/home-page/hero-section";
import { ServicesGrid } from "@/components/home-page/service-section";
import { TechPartners } from "@/components/home-page/tech-partners";
import { ProcessSection } from "@/components/home-page/process-section";
import { ProjectsSection } from "@/components/home-page/project-section";
import { CTASection } from "@/components/cta";
import { AboutSection } from "@/components/home-page/about-section";
import { FAQSection } from "@/components/home-page/faq";
import ContactForm from "@/components/home-page/contact-form";
import ContactDetails from "@/components/home-page/contact-details";


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <Hero />
      <ServicesGrid />
      <TechPartners />
      <ProcessSection />
      <ProjectsSection />
      <CTASection />
      <AboutSection />
      <FAQSection />
      <ContactForm />
      <ContactDetails />

    </div>
  );
}