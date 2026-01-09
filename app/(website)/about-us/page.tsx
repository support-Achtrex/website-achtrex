import React from 'react';
import { TeamSection } from "@/components/about-page/team-section";
import { StorySection } from "@/components/about-page/story-section";
import { CTASection } from "@/components/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Innovating the Digital Future",
    description: "Learn about Achtrex's mission, vision, and the team driving digital innovation. We are committed to building high-impact technological solutions.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <TeamSection />
            <StorySection />
            <CTASection />
        </main>
    );
}
