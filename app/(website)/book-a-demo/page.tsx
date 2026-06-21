import { BookingClient } from "./booking-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | Achtrex",
  description: "Book a demo with our team to see how Achtrex can power your automotive intelligence.",
  keywords: ["Book a demo", "Achtrex Demo", "API Integration Demo", "Enterprise Data Solutions"],
  openGraph: {
    title: "Book a Demo | Achtrex",
    description: "Book a demo with our team to see how Achtrex can power your automotive intelligence.",
    images: ["/projects/lumi_ui_v2.jpg"],
  }
};

export default function BookADemoPage() {
  return (
    <BookingClient />
  );
}
