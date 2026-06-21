import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
 metadataBase: new URL('https://achtrex.com'),
 title: {
  default: "Achtrex | Global Automotive Data Infrastructure & AI Platforms",
  template: "%s | Achtrex - Enterprise Automotive Data"
 },
 description: "Achtrex is a leading enterprise SaaS venture builder. We architect high-velocity data platforms, autonomous AI agents (LUMI), and resilient API infrastructure for automotive and global digital economies.",
 keywords: [
  "Achtrex", "Enterprise SaaS Venture Builder", "Automotive Data Infrastructure", 
  "Cognitive AI Platforms", "Global Automotive API", "Vehicle Intelligence Data", 
  "Vehicle History API", "VIN Decoding Service", "Scalable SaaS Architecture", 
  "Automotive AI Platforms", "Dealership Data Solutions", "Fleet Management API",
  "High-Velocity Data Ingestion", "Enterprise API Gateway", "Mobility Intelligence"
 ],
 authors: [{ name: "Achtrex Engineering Team", url: "https://achtrex.com" }],
 creator: "Achtrex Corporation",
 publisher: "Achtrex",
 formatDetection: {
  email: false,
  address: true,
  telephone: true,
 },
 alternates: {
  canonical: '/',
 },
 icons: {
  icon: [
   { url: "/logo.png" },
   { url: "/logo.png", sizes: "32x32", type: "image/png" },
  ],
  shortcut: "/logo.png",
  apple: "/logo.png",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   'max-video-preview': -1,
   'max-image-preview': 'large',
   'max-snippet': -1,
  },
 },
 openGraph: {
  title: "Achtrex | Global Automotive Data Infrastructure & AI Platforms",
  description: "Architecting high-velocity automotive data platforms and autonomous AI agent frameworks. Discover Achtrex's proprietary enterprise solutions for the mobility ecosystem.",
  url: "https://achtrex.com",
  siteName: "Achtrex",
  locale: "en_US",
  type: "website",
  images: [{
   url: "/projects/lumi_ui_v2.jpg",
   width: 1200,
   height: 630,
   alt: "Achtrex Enterprise AI Platform",
  }],
 },
 twitter: {
  card: "summary_large_image",
  title: "Achtrex | Global Automotive Data Infrastructure & AI Platforms",
  description: "Architecting high-velocity automotive data platforms and cognitive AI platforms for global mobility.",
  images: ["/projects/lumi_ui_v2.jpg"],
  creator: "@achtrex",
 },
 verification: {
  google: "google-site-verification-placeholder",
 },
};

const jsonLd = {
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Achtrex",
 "url": "https://achtrex.com",
 "logo": "https://achtrex.com/logo.png",
 "description": "Enterprise SaaS venture builder specializing in high-velocity data architectures and cognitive AI platforms.",
 "contactPoint": {
  "@type": "ContactPoint",
  "telephone": "+1-973-385-1305",
  "contactType": "customer service",
  "areaServed": ["GH", "US", "GB", "NL"],
  "availableLanguage": "en"
 },
 "sameAs": [
  "https://twitter.com/achtrex",
  "https://linkedin.com/company/achtrex",
  "https://instagram.com/achtrex"
 ],
 "potentialAction": {
  "@type": "SearchAction",
  "target": "https://achtrex.com/blog?q={search_term_string}",
  "query-input": "required name=search_term_string"
 }
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {

 return (
  <html lang="en" suppressHydrationWarning className="scroll-smooth">
   <body className="antialiased min-h-screen flex flex-col text-[#11243b] text-[15px] leading-relaxed selection:bg-primary selection:text-slate-900 overflow-x-hidden">
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <SmoothScrollProvider>
     <ToastProvider>
      {children}
     </ToastProvider>
    </SmoothScrollProvider>
    <GoogleTagManager gtmId="GTM-N3733PLR" />
   </body>
  </html>
 );
}
