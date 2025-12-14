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
  title: "Achtrex | Building Digital Products That Matter",
  description: "Achtrex partners with you to design, build, and scale digital products users love. We specialize in human-centered design, tech-forward innovation, and global ambition.",
  keywords: ["Achtrex", "Digital Products", "Software Development", "Web Design", "Mobile Apps", "Tech Innovation", "Africa Tech", "Global Tech"],
  authors: [{ name: "Achtrex Team" }],
  creator: "Achtrex",
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
    title: "Achtrex | Building Digital Products That Matter",
    description: "Achtrex partners with you to design, build, and scale digital products users love.",
    url: "https://achtrex.com",
    siteName: "Achtrex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Achtrex Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achtrex | Building Digital Products That Matter",
    description: "Achtrex partners with you to design, build, and scale digital products users love.",
    images: ["/logo.png"],
    creator: "@achtrex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} bg-gray-50 ${montserrat.variable} ${redHatDisplay.variable} antialiased`}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
