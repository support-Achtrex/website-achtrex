import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://achtrex.com'), // Replace with actual domain
  title: {
    default: "Achtrex | Scalable Data & AI Platforms",
    template: "%s | Achtrex"
  },
  description: "Achtrex is an enterprise SaaS builder specializing in scalable data architectures, AI platforms, and high-performance APIs.",
  keywords: [
    "Achtrex", "SaaS Builder", "Data Platform", "AI Developer Platform",
    "API Infrastructure", "Enterprise Software", "Tech Innovation"
  ],
  authors: [{ name: "Achtrex Engineering", url: "https://achtrex.com" }],
  creator: "Achtrex",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/logo.png",
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
    title: "Achtrex | Scalable Data & AI Platforms",
    description: "Achtrex is an enterprise SaaS builder specializing in scalable data architectures, AI platforms, and high-performance APIs.",
    url: "https://achtrex.com",
    siteName: "Achtrex",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/logo.png", // Ideally update to a 1200x630 OG image
      width: 800,
      height: 600,
      alt: "Achtrex Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achtrex | Scalable Data & AI Platforms",
    description: "Achtrex is an enterprise SaaS builder specializing in scalable data architectures, AI platforms, and high-performance APIs.",
    images: ["/logo.png"],
    creator: "@achtrex",
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
