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
    default: "Achtrex : Digital Experience & Technology Studio",
    template: "%s | Achtrex Studio"
  },
  description: "We design and build digital experiences where technology, creativity and intelligence come together.",
  keywords: [
    "Achtrex", "digital experience studio", "technology studio", "digital product development",
    "AI development", "AI solutions", "immersive experiences", "CGI and 3D",
    "product configurators", "experience design", "digital experiences"
  ],
  authors: [{ name: "Achtrex Studio", url: "https://achtrex.com" }],
  creator: "Achtrex",
  publisher: "Achtrex Technology - FZCO",
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
    title: "Achtrex : Digital Experience & Technology Studio",
    description: "We design and build digital experiences where technology, creativity and intelligence come together.",
    url: "https://achtrex.com",
    siteName: "Achtrex",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/logo.png",
      width: 735,
      height: 638,
      alt: "Achtrex Digital Experience & Technology Studio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achtrex : Digital Experience & Technology Studio",
    description: "We design and build digital experiences where technology, creativity and intelligence come together.",
    images: ["/logo.png"],
    creator: "@achtrex",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://achtrex.com/#corporation",
    "name": "Achtrex",
    "legalName": "Achtrex Technology - FZCO",
    "url": "https://achtrex.com",
    "logo": "https://achtrex.com/logo.png",
    "image": "https://achtrex.com/studio-assets/service-cgi-immersive.jpg",
    "description": "We design and build digital experiences where technology, creativity and intelligence come together.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Digital Park A5 Building, 6009",
      "addressLocality": "Dubai Silicon Oasis",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971 50 222 9587",
        "contactType": "studio inquiries",
        "email": "hello@achtrex.com",
        "areaServed": ["AE", "US", "GB", "EU", "Worldwide"],
        "availableLanguage": ["en"]
      }
    ],
    "sameAs": [
      "https://twitter.com/achtrex",
      "https://linkedin.com/company/achtrex",
      "https://instagram.com/achtrex"
    ],
    "knowsAbout": [
      "Real-Time 3D Product Configurators",
      "Spatial Computing & Virtual Environments",
      "Artificial Intelligence & Multi-Agent Architectures",
      "WebGL & Three.js Production Engineering",
      "Full-Lifecycle Digital Product Development",
      "Photorealistic CGI & Immersive Content"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Achtrex Studio Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Experience Design",
            "description": "Human-centered UX/UI, digital journeys, design systems, tactile micro-interactions and immersive interfaces.",
            "url": "https://achtrex.com/services/experience-design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative Strategy & Digital Content",
            "description": "Creative direction, cinematic studio production, storytelling, interactive content and brand worlds.",
            "url": "https://achtrex.com/services/creative-strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Products",
            "description": "High-performance web platforms, custom applications, enterprise portals, SaaS and cloud systems.",
            "url": "https://achtrex.com/services/digital-products"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Artificial Intelligence Development Services",
            "description": "Custom AI solutions, autonomous multi-agents, RAG & LLMs, predictive workflows and intelligent systems.",
            "url": "https://achtrex.com/services/ai-intelligent-experiences"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CGI, 3D & Immersive Experiences",
            "description": "Photorealistic CGI, real-time 3D, WebGL/WebGPU viewports, spatial computing and virtual spaces.",
            "url": "https://achtrex.com/services/cgi-immersive"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Configuration & Customization",
            "description": "Real-time 3D PBR configurators, tangible material swatches, industrial automated systems and rule engines.",
            "url": "https://achtrex.com/services/product-configurators"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://achtrex.com/#website",
    "name": "Achtrex Studio",
    "url": "https://achtrex.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://achtrex.com/projects?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
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
        <link rel="preload" as="image" href="/logo.png" fetchPriority="high" />
      </head>
      <body className={`${overusedGrotesk.className} ${overusedGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col bg-[#070A0F] text-white leading-relaxed selection:bg-[#F37021] selection:text-white overflow-x-hidden`}>
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
