
import PartnerForm from "./PartnerForm";
import { InnerPageHeader } from "@/components/inner-page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner Program | Achtrex",
    description: "Join the Achtrex Partner Program to offer your clients best-in-class Data and AI solutions. Get access to exclusive co-marketing, training, and rewards.",
    keywords: ["Achtrex Partner", "Reseller Program", "AI Partnership", "Data Platform Partner"],
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-[#f4f4f4] text-slate-900 pb-20">
            {/* Header */}
            <InnerPageHeader title="Partner with Achtrex" subtitle="Join our ecosystem of innovators and deliver world-class Data & AI solutions to your clients." />
            
            {/* Benefits Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-[#00a9ce]/10 rounded-none flex items-center justify-center text-[#00a9ce] text-xl font-bold">01</div>
                            <h3 className="text-xl font-bold text-slate-900">Co-Marketing</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Collaborate on joint webinars, case studies, and events to expand your reach and showcase success.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-[#00a9ce]/10 rounded-none flex items-center justify-center text-[#00a9ce] text-xl font-bold">02</div>
                            <h3 className="text-xl font-bold text-slate-900">Technical Training</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Get direct access to our engineering team and comprehensive training to master the Achtrex stack.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-[#00a9ce]/10 rounded-none flex items-center justify-center text-[#00a9ce] text-xl font-bold">03</div>
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
            
            
        </main>
    );
}
