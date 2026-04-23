import ProductsClient from "./products-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Product Ecosystem | High-Velocity Platforms",
    description: "Explore the Achtrex product ecosystem: from AutomotiveDataset.com's high-frequency vehicle data to LUMI's autonomous AI frameworks. Our proprietary utility layers power the next generation of digital infrastructure.",
    keywords: ["Achtrex Products", "Automotive Data API", "Carkasa Platform", "LUMI AI Framework", "Vehicle History Solutions", "SaaS Infrastructure", "Enterprise API Solutions"],
    openGraph: {
        title: "Achtrex Product Ecosystem | Scaling Global Infrastructure",
        description: "Proprietary utility layers and autonomous logic frameworks for modern enterprises.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function ProductsPage() {
    return <ProductsClient />;
}
