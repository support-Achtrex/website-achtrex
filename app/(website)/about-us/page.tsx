import React from 'react';
import { AboutContent } from "@/components/about-page/about-content";
import { CTASection } from "@/components/cta";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Mission & Architectural Vision",
    description: "Discover how Achtrex is redefining enterprise data and AI infrastructure. Learn about our mission to architect high-velocity platforms that power the global digital economy.",
    keywords: ["Achtrex Mission", "Data Architecture Vision", "Enterprise AI Strategy", "Venture Builder History", "Scalable Tech Foundation"],
    openGraph: {
        title: "Achtrex Mission | Architecting the Future of Data",
        description: "Learn about our commitment to engineering excellence and scalable proprietary technology.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <AboutContent />
            <CTASection />
        </main>
    );
}
