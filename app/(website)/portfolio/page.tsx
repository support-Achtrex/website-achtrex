import { CTASection } from "@/components/cta";
import { PortfolioGrid } from "@/components/portfolio-page/portfolio-grid";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen relative bg-[image:var(--bg-dark-blue)]">
            <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
            <div className="pt-20 relative z-10">
                <PortfolioGrid />
                <CTASection />
            </div>
        </main>
    );
}
