import React from 'react';
import { AboutContent } from "@/components/about-page/about-content";
import { InnerPageHeader } from "@/components/inner-page-header";


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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Achtrex",
  "description": "Discover how Achtrex is redefining enterprise data and AI infrastructure.",
  "url": "https://achtrex.com/about-us",
  "publisher": {
    "@type": "Organization",
    "name": "Achtrex"
  }
};

export default function AboutPage() {
 return (
 <main className="min-h-screen bg-[#f4f4f4] text-slate-900 overflow-x-hidden">
 <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <InnerPageHeader title="About Achtrex" subtitle="Architecting the Future of Data and Cognitive Mobility Infrastructure" />
 <AboutContent />
 </main>
 );
}
