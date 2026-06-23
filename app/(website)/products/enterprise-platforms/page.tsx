import { Metadata } from "next";
import CustomClient from "./custom-client";

export const metadata: Metadata = {
 title: "Enterprise Automotive Platforms | Achtrex Automotive Solutions",
 description: "Cutting-edge custom development services and API integrations empowering automotive-focused businesses.",
};

export default function EnterprisePlatformsPage() {
 return <CustomClient />;
}
