import CarKasaClient from "./carkasa-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CarKasa | Enterprise Automotive Marketplace Infrastructure",
    description: "The engine behind next-gen automotive marketplaces. Scalable inventory management, VIN-driven automation, and high-conversion UI frameworks.",
    keywords: ["CarKasa", "Automotive Marketplace API", "Inventory Management System", "Vehicle Sales Platform", "Car Dealer Software", "Automotive SaaS"],
    openGraph: {
        title: "CarKasa | Powering the Future of Car Sales",
        description: "Scale your automotive dealership or marketplace with CarKasa's high-performance infrastructure.",
        images: ["/projects/carkasa_ui_new.jpg"],
    }
};

export default function CarkasaPage() {
    return <CarKasaClient />;
}
