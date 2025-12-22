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
  title: "Achtrex | Future-Forward Digital Product Studio",
  description: "Achtrex is a premium digital product studio building the future of technology. We design, engineer, and scale world-class software.",
  keywords: ["Achtrex", "Digital Products", "Software Engineering", "Tech Innovation", "Global Tech Studio"],
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
  },
  openGraph: {
    title: "Achtrex | Future-Forward Digital Product Studio",
    description: "Achtrex is a premium digital product studio building the future of technology.",
    url: "https://achtrex.com",
    siteName: "Achtrex",
    locale: "en_US",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achtrex | Future-Forward Digital Product Studio",
    description: "Achtrex is a premium digital product studio building the future of technology.",
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
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} bg-background text-foreground ${montserrat.variable} ${redHatDisplay.variable} antialiased selection:bg-primary selection:text-white`}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
