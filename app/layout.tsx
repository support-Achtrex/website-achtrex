import type { Metadata } from "next";
import { Manrope, Montserrat, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ['latin']
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin']
})

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://achtrex.com'), // Replace with actual domain
  title: {
    default: "Achtrex | Future-Forward Digital Product Studio",
    template: "%s | Achtrex"
  },
  description: "Achtrex is a premium digital product studio building the future of technology. We specialize in custom software development, mobile apps, and enterprise solutions.",
  keywords: [
    "Achtrex", "Digital Product Studio", "Software Development", "Web Development",
    "Mobile App Development", "UI/UX Design", "Tech Innovation", "Enterprise Software",
    "React Native", "Next.js", "Cloud Solutions"
  ],
  authors: [{ name: "Achtrex Team", url: "https://achtrex.com" }],
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
    title: "Achtrex | Future-Forward Digital Product Studio",
    description: "Achtrex is a premium digital product studio building the future of technology.",
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
    title: "Achtrex | Future-Forward Digital Product Studio",
    description: "Achtrex is a premium digital product studio building the future of technology.",
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
    "telephone": "+233-500-496-700",
    "contactType": "customer service",
    "areaServed": ["GH", "US", "GB"],
    "availableLanguage": "en"
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
        className={`${manrope.variable} bg-background text-foreground ${montserrat.variable} ${redHatDisplay.variable} antialiased selection:bg-primary selection:text-white`}
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
