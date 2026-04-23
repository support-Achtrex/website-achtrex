import LumiClient from "./lumi-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "LUMI Platform | Autonomous AI for Mobility",
    description: "The world's first autonomous AI agent engine for the automotive sector. Automate customer service, lead qualification, and technical support with domain-aware intelligence.",
    keywords: ["LUMI AI", "Automotive AI Agents", "Mobility AI Platform", "Autonomous Customer Service", "AI Lead Qualification", "Automotive Intelligence"],
    openGraph: {
        title: "LUMI Platform | Enterprise AI for Automotive",
        description: "Deploy autonomous AI agents that understand the language of mobility.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function LumiPage() {
    return <LumiClient />;
}
