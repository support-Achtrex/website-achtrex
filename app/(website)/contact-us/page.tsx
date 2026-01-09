import { CTASection } from "@/components/cta";
import ContactDetails from "@/components/home-page/contact-details";
import ContactForm from "@/components/home-page/contact-form";
import { FAQSection } from "@/components/home-page/faq";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Get in Touch with Our Team",
    description: "Have a project in mind? Contact Achtrex today. We look forward to hearing from you and discussing how we can help your business thrive.",
};

export default function ContactUsPage() {
    return (
        <main className="pt-24 bg-background">
            {/* Contact Form Section */}
            <ContactForm />

            {/* Contact Details Section */}
            <ContactDetails />

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
