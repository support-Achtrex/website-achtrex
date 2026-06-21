import { Navbar } from "@/components/header";
import { Footer } from "@/components/footer";
import FloatingWidgets from "@/components/floating-whatsapp";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-transparent">
      <div className="max-w-[1920px] mx-auto w-full min-w-[320px] relative shadow-none bg-[#F8F9FA]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <FloatingWidgets />
        <Footer />
      </div>
    </div>
  );
}
