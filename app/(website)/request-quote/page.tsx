import ContactForm from "@/components/home-page/contact-form";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Quote | Start Your Project with Achtrex",
    description: "Ready to start your digital transformation? Request a customized quote for your web, mobile, or software development project.",
};

export default function RequestQuotePage() {
    return (
        <main className="pt-24 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Request a Quote</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tell us about your project and we'll get back to you with a customized quote.
                    </p>
                </div>
                <ContactForm />
            </div>
        </main>
    );
}
