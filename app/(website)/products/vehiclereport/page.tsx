import VehicleReportClient from "./vehiclereport-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vehicle Report Check | VIN Intelligence & History",
    description: "Instant access to comprehensive vehicle history, title records, and technical specs. Integrated VIN decoding and data validation for enterprise platforms.",
    keywords: ["Vehicle History Report", "VIN Check", "Car History API", "Vehicle Title Records", "Automotive Data Validation", "VIN Intelligence"],
    openGraph: {
        title: "Vehicle Report Check | Comprehensive VIN Intelligence",
        description: "Validate vehicle integrity with real-time history and technical data.",
        images: ["/projects/vehiclereport_ui.jpg"],
    }
};

export default function VehicleReportPage() {
    return <VehicleReportClient />;
}
