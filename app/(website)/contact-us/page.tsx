import { ContactClient } from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Start Building | Contact Achtrex",
 description: "Get in touch with our team to start building better automotive products.",
 keywords: ["Contact Achtrex", "SaaS Partnership", "API Integration Support", "Enterprise Data Solutions", "Achtrex Support"],
 openGraph: {
 title: "Start Building | Contact Achtrex",
 description: "Get in touch with our team to start building better automotive products.",
 images: ["/projects/lumi_ui_v2.jpg"],
 }
};

import { Suspense } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Achtrex",
  "description": "Get in touch with our team to start building better automotive products.",
  "url": "https://achtrex.com/contact-us",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Achtrex Support",
    "telephone": "+1-613-366-4271",
    "email": "support@achtrex.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  }
};

export default function ContactUsPage() {
 return (
 <Suspense>
 <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <ContactClient />
 </Suspense>
 );
}
