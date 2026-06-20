import React from 'react';
import { UseCasesContent } from "@/components/use-cases-page/use-cases-content";
import { InnerPageHeader } from "@/components/inner-page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client & Industry Use Cases | Achtrex",
    description: "Explore enterprise automotive infrastructure, APIs & AI systems delivered by Achtrex. Learn about our successful implementations across various domains.",
    keywords: ["Automotive API", "VIN Intelligence", "Vehicle Validation", "Automotive Intelligence", "Client Use Cases", "Achtrex Implementations"],
    openGraph: {
        title: "Achtrex Use Cases | Automotive Data Infrastructure",
        description: "Explore enterprise automotive infrastructure, APIs & AI systems delivered by Achtrex.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function UseCasesPage() {
    return (
        <main className="min-h-screen bg-[#f4f4f4] text-slate-900 overflow-x-hidden pb-20">
            <InnerPageHeader title="Client & Industry Use Cases" subtitle="Enterprise Automotive Infrastructure, APIs & AI Systems Delivered by Achtrex" />
            <UseCasesContent />
        </main>
    );
}
