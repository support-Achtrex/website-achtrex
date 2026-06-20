import ContactForm from "@/components/home-page/contact-form";
import { InnerPageHeader } from "@/components/inner-page-header";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Technical Proposal | Enterprise Solutions",
    description: "Submit your requirements for a customized technical proposal. From high-volume API integrations to autonomous AI agent deployments, let's architect your next-gen infrastructure.",
};

export default function RequestQuotePage() {
    return (
        <main className="min-h-screen bg-[#f4f4f4] pb-20 font-sans text-slate-900">
            <InnerPageHeader title="Request a Quote" subtitle="Tell us about your project and we'll get back to you with a customized quote." />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <ContactForm />
            </div>
        </main>
    );
}
