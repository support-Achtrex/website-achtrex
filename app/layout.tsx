import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { GoogleTagManager } from "@next/third-parties/google";

const overusedGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/overused-grotesk/OverusedGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/overused-grotesk/OverusedGrotesk-Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/overused-grotesk/OverusedGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/overused-grotesk/OverusedGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/overused-grotesk/OverusedGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/overused-grotesk/OverusedGrotesk-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/overused-grotesk/OverusedGrotesk-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-overused-grotesk",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/jetbrains-mono/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/jetbrains-mono/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
 metadataBase: new URL('https://achtrex.com'),
  title: {
    default: "Achtrex | Automotive Software, Cognitive AI & Automotive Consultation",
    template: "%s | Achtrex - Automotive Software & AI Solutions"
  },
  description: "Achtrex engineers bespoke automotive software builds, cognitive AI diagnostics, and strategic operational consultation for automotive businesses worldwide.",
  keywords: [
    "Achtrex", "Automotive Software Builds", "Cognitive AI Solutions", "Automotive Consultation", 
    "Dealership Management Software", "Workshop Scheduling Systems", "AI Vehicle Diagnostics", 
    "Automotive Advisory", "Fleet Software Solutions", "Mobility Platforms"
  ],
 authors: [{ name: "Achtrex Engineering Team", url: "https://achtrex.com" }],
 creator: "Achtrex",
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
    title: "Achtrex | Enterprise Automotive Software, Cognitive AI & Advisory",
    description: "Achtrex is an enterprise automotive technology partner delivering bespoke automotive software builds, cognitive AI diagnostics, and strategic operational consultation.",
    url: "https://achtrex.com",
    siteName: "Achtrex",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/images/solutions/auto_software_builds.jpg",
      width: 1200,
      height: 630,
      alt: "Achtrex Enterprise Automotive Software & AI",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achtrex | Enterprise Automotive Software, Cognitive AI & Advisory",
    description: "Achtrex is an enterprise automotive technology partner delivering bespoke automotive software builds, cognitive AI diagnostics, and strategic operational consultation.",
    images: ["/images/solutions/auto_software_builds.jpg"],
    creator: "@achtrex",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Achtrex",
    "url": "https://achtrex.com",
    "logo": "https://achtrex.com/logo.png",
    "description": "Enterprise automotive technology partner delivering bespoke software builds, domain-trained cognitive AI diagnostics, and strategic operational consultation.",
 "contactPoint": [
  {
   "@type": "ContactPoint",
   "telephone": "+971-50-222-9587",
   "contactType": "customer service",
   "areaServed": ["US", "CA", "GB", "NL"],
   "availableLanguage": ["en", "fr"]
  }
 ],
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
 },
 {
 "@context": "https://schema.org",
 "@type": "WebSite",
 "name": "Achtrex",
 "url": "https://achtrex.com"
 }
];

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {

 return (
 <html lang="en" suppressHydrationWarning className="scroll-smooth">
 <head>
    <link rel="preload" as="image" href="/aaia-poster.jpg" fetchPriority="high" />
 </head>
  <body className={`${overusedGrotesk.className} ${overusedGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col bg-[#F8F9FA] text-[#171717] leading-relaxed selection:bg-[#F37021] selection:text-white overflow-x-hidden`}>
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
