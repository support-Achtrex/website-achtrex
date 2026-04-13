import React from 'react';
import { AboutContent } from "@/components/about-page/about-content";
import { CTASection } from "@/components/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Achtrex | Building Scalable Data & AI Platforms",
    description: "Learn about Achtrex's mission to empower businesses with data infrastructure and AI-powered platforms.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <AboutContent />
            <CTASection />
        </main>
    );
}
