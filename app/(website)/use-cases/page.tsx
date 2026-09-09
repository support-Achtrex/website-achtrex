import React from 'react';
import { UseCasesContent } from "@/components/use-cases-page/use-cases-content";
import { InnerPageHeader } from "@/components/inner-page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client & Industry Use Cases | Achtrex",
  description: "Explore enterprise automotive software builds, cognitive AI diagnostics, and strategic consultation delivered by Achtrex. Learn about our successful implementations across various domains.",
  keywords: ["Automotive Software Builds", "Cognitive AI Solutions", "Automotive Consultation", "Client Use Cases", "Achtrex Implementations"],
  openGraph: {
    title: "Achtrex Use Cases | Automotive Software & AI Solutions",
    description: "Explore enterprise automotive software builds, cognitive AI diagnostics, and strategic consultation delivered by Achtrex.",
    images: ["/projects/aaia_ui_v2.png"],
  }
};

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-slate-900 overflow-x-hidden pb-20">
      <InnerPageHeader title="Client & Industry Use Cases" subtitle="Enterprise Automotive Software Builds, Cognitive AI Systems & Advisory Delivered by Achtrex" theme="software" />
      <UseCasesContent />
    </main>
  );
}
