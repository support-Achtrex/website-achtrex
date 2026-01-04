import { CTASection } from "@/components/cta";
import ContactDetails from "@/components/home-page/contact-details";
import ContactForm from "@/components/home-page/contact-form";
import { FAQSection } from "@/components/home-page/faq";

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
