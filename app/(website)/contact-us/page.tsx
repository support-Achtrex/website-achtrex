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

export default function ContactUsPage() {
  return (
    <ContactClient />
  );
}
