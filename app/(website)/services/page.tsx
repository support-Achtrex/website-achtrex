import { CTASection } from "@/components/cta";
import { ServicesHero } from "@/components/services-page/hero";
import { ServicesList } from "@/components/services-page/services-list";

export const metadata = {
    title: "Our Services | Web, Mobile, AI & Blockchain Development",
    description: "Comprehensive digital services including web development, mobile app development, UI/UX design, cloud solutions, and enterprise software.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <ServicesHero />
            <ServicesList />
            <CTASection />
        </main>
    );
}
