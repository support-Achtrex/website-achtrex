import { LifeHero } from "@/components/life-at-achtrex/hero";
import { CoreValues } from "@/components/life-at-achtrex/core-values";
import { DayInLife } from "@/components/life-at-achtrex/day-in-life";
import { PerksBenefits } from "@/components/life-at-achtrex/perks-benefits";
import { CTASection } from "@/components/cta";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Achtrex | Building the Future of Technology',
    description: 'Join a team of dreamers, doers, and innovators. At Achtrex, we are not just writing code; we are writing the next chapter of technology.',
};

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
