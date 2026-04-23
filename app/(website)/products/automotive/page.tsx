import AutomotiveClient from "./automotive-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Automotive Dataset | Global Vehicle Intelligence API",
    description: "The backbone of mobility intelligence. Access 2.5M+ vehicle records, VIN-to-Build-Sheet mapping, and real-time specs through our high-availability API engine.",
    keywords: ["Automotive Dataset", "Vehicle Data API", "VIN Decoding", "Recall Database API", "Mobility Intelligence", "Automotive Specs API", "Real-time Vehicle Data"],
    openGraph: {
        title: "Automotive Dataset | Enterprise Vehicle Data Solutions",
        description: "Scale your mobility platform with the most accurate vehicle intelligence engine.",
        images: ["/projects/automotive_ui_new.jpg"],
    }
};

export default function AutomotiveDatasetPage() {
    return <AutomotiveClient />;
}
