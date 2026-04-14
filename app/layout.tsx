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
  description: "Achtrex is a leading enterprise SaaS venture builder specializing in high-velocity data architectures, autonomous AI agents (LUMI), and resilient API infrastructure for automotive and global SaaS sectors.",
  keywords: [
    "Achtrex", "Enterprise SaaS", "Data Infrastructure", "AI Platforms", 
    "LUMI AI Agent", "Automotive Intelligence", "Vehicle Data API", 
    "Scalable Architecture", "Venture Builder", "Proprietary Tech", 
    "SaaS Operations", "Real-time Telemetry"
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
      url: "/projects/lumi_ui_v2.jpg", // Using a high-fidelity image for OG
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
    google: "google-site-verification-placeholder", // User should replace this with real key
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Achtrex",
  "url": "https://achtrex.com",
  "logo": "https://achtrex.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-613-366-4271",
    "contactType": "customer service",
    "areaServed": ["GH", "US", "GB"],
    "availableLanguage": "en",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1111B S Governors Ave STE 48362",
      "addressLocality": "Dover",
      "addressRegion": "DE",
      "postalCode": "19904",
      "addressCountry": "US"
    }
  },
  "sameAs": [
    "https://twitter.com/achtrex",
    "https://facebook.com/achtrex",
    "https://linkedin.com/company/achtrex",
    "https://instagram.com/achtrex"
  ]
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
