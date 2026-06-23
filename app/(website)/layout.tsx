import { Navbar } from "@/components/header";
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer));
const FloatingWidgets = dynamic(() => import('@/components/floating-whatsapp'));
const ScrollController = dynamic(() => import('@/components/scroll-controller').then(mod => mod.ScrollController));

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
 <ScrollController />
 <Footer />
 </div>
 </div>
 );
}
