import { Navbar } from "@/components/header";
import { Footer } from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-gray-50">
        <div className="max-w-[1920px] mx-auto w-full min-w-[320px] relative shadow-none bg-white">
            <Navbar />
            {children}
            <FloatingWhatsApp />
            <Footer />
        </div>
        </div>
    );
}
