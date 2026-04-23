import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://achtrex.com'),
  title: {
    default: "Achtrex | Enterprise Data Architectures & Cognitive AI Platforms",
    template: "%s | Achtrex"
  },
  description: "Achtrex is a leading enterprise SaaS venture builder. We architect high-velocity data platforms, autonomous AI agents (LUMI), and resilient API infrastructure for automotive and global digital economies.",
  keywords: [
    "Achtrex", "Enterprise SaaS Venture Builder", "Data Infrastructure Architecture", 
    "Cognitive AI Platforms", "LUMI AI Agent Framework", "Automotive Intelligence Data", 
    "Vehicle History API", "VIN Decoding Service", "Scalable SaaS Architecture", 
    "Real-time Telemetry Processing", "Digital Twin Technology", "Planetary Scale Data",
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
    title: "Achtrex | Enterprise Data & AI Infrastructure",
    description: "Architecting high-velocity data platforms and autonomous AI agent frameworks. Discover Achtrex's proprietary enterprise solutions.",
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
    title: "Achtrex | Scalable Data & AI Platforms",
    description: "Next-gen enterprise SaaS builder specializing in data architectures and cognitive AI platforms.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-primary selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
