import ProductsClient from "./products-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Enterprise Solutions | Achtrex",
  description: "Explore the Achtrex solutions ecosystem: from high-frequency vehicle data APIs to autonomous AI frameworks. Our proprietary utility layers power the next generation of digital infrastructure.",
  keywords: ["Achtrex Solutions", "Automotive Data API", "AI Frameworks", "Vehicle History Solutions", "SaaS Infrastructure", "Enterprise API Solutions"],
  openGraph: {
    title: "Products & Enterprise Solutions | Achtrex",
    description: "Explore the Achtrex solutions ecosystem: from high-frequency vehicle data APIs to autonomous AI frameworks.",
    images: ["/projects/lumi_ui_v2.jpg"],
  }
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Products & Enterprise Solutions | Achtrex",
  "description": "Explore the Achtrex solutions ecosystem: from high-frequency vehicle data APIs to autonomous AI frameworks.",
  "url": "https://achtrex.com/products",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Achtrex",
    "url": "https://achtrex.com"
  }
};

export default function ProductsPage() {
 return (
   <>
     <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
     />
     <ProductsClient />
   </>
 );
}
