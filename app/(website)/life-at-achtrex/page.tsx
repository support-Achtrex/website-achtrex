import { LifeHero } from "@/components/life-at-achtrex/hero";
import { CoreValues } from "@/components/life-at-achtrex/core-values";
import { DayInLife } from "@/components/life-at-achtrex/day-in-life";
import { PerksBenefits } from "@/components/life-at-achtrex/perks-benefits";
import { CTASection } from "@/components/cta";

export default function LifeAtAchtrexPage() {
    return (
        <main className="min-h-screen bg-background">
            <LifeHero />
            <CoreValues />
            <DayInLife />
            <PerksBenefits />
            <CTASection />
        </main>
    );
}
