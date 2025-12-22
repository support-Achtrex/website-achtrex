import React from 'react';
import { TeamSection } from "@/components/about-page/team-section";
import { StorySection } from "@/components/about-page/story-section";
import { CTASection } from "@/components/cta";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <TeamSection />
            <StorySection />
            <CTASection />
        </main>
    );
}
