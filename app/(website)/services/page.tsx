import { CTASection } from "@/components/cta";
import { ServicesHero } from "@/components/services-page/hero";
import { ServicesList } from "@/components/services-page/services-list";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <ServicesHero />
            <ServicesList />
            <CTASection />
        </main>
    );
}
