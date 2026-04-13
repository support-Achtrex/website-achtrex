import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Enterprise Data & AI Products",
    description: "Explore Achtrex's proprietary enterprise platforms. From high-availability automotive data APIs to LUMI autonomous AI agent frameworks.",
    keywords: ["Automotive Data API", "LUMI AI", "CarKasa", "Vehicle History Data", "Enterprise SaaS Products"],
    openGraph: {
        title: "Achtrex Products | Enterprise Data & AI Infrastructure",
        description: "Explore our horizontally scalable utility layers and autonomous logic frameworks.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
