import { CTASection } from "@/components/cta";
import ContactForm from "@/components/home-page/contact-form";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner & Scale | Enterprise Inquiries",
    description: "Discuss API integration, infrastructure architecture, or enterprise partnerships with the Achtrex technical deployment team. Secure high-volume SLA agreements and custom pipeline access.",
    keywords: ["Contact Achtrex", "SaaS Partnership", "API Integration Support", "Enterprise Data Solutions", "Achtrex Support"],
    openGraph: {
        title: "Achtrex Inquiries | Enterprise Partnerships",
        description: "Connect with our architecture team for high-volume deployments.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="pt-24 pb-12 text-center px-6">
                 <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enterprise Deployments</h1>
                 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                     Contact our architecture team to discuss high-volume SLA agreements, custom pipeline integrations, and exclusive API access.
                 </p>
            </div>
            
            <ContactForm />
            
            <section className="py-24 px-6 bg-[#0a0f1c] text-center border-b border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Global Offices</h3>
                <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-400">
                    <div>
                        <span className="block text-primary text-xs font-bold uppercase tracking-widest mb-2">North America Data Center Support</span>
                        <p>US +1 973 385 1305</p>
                    </div>
                    <div>
                        <span className="block text-secondary text-xs font-bold uppercase tracking-widest mb-2">EMEA Operations</span>
                        <p>GH +233 500 496700</p>
                    </div>
                    <div>
                        <span className="block text-white text-xs font-bold uppercase tracking-widest mb-2">Technical Support</span>
                        <p>support@achtrex.com</p>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
