import { CTASection } from "@/components/cta";
import PartnerForm from "./PartnerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner Program | Achtrex",
    description: "Join the Achtrex Partner Program to offer your clients best-in-class Data and AI solutions. Get access to exclusive co-marketing, training, and rewards.",
    keywords: ["Achtrex Partner", "Reseller Program", "AI Partnership", "Data Platform Partner"],
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero Section */}
            <div className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                            Partner with <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] text-transparent bg-clip-text">Achtrex</span>
                        </h1>
                        <p className="text-slate-600 text-lg font-medium">
                            Join our ecosystem of innovators and deliver world-class Data & AI solutions to your clients.
                        </p>
                    </div>
                    <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                        <img src="/projects/partnership_hero.png" alt="Partnership" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            
            {/* Benefits Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl font-bold">01</div>
                            <h3 className="text-xl font-bold text-slate-900">Co-Marketing</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Collaborate on joint webinars, case studies, and events to expand your reach and showcase success.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl font-bold">02</div>
                            <h3 className="text-xl font-bold text-slate-900">Technical Training</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Get direct access to our engineering team and comprehensive training to master the Achtrex stack.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl font-bold">03</div>
                            <h3 className="text-xl font-bold text-slate-900">Referral Rewards</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Earn competitive commissions for every client you refer who successfully signs with Achtrex.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <PartnerForm />
            
            <CTASection />
        </main>
    );
}
