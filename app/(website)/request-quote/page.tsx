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
      <InnerPageHeader title="Request a Quote" subtitle="Submit your requirements for a customized technical proposal." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Enterprise SLAs & Delivery</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                We understand that velocity is a structural advantage. Our enterprise proposals include comprehensive delivery timelines and strict Service Level Agreements.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0 mt-2" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">24-Hour Turnaround</h4>
                  <p className="text-sm text-slate-600 font-medium">Initial technical proposal and architecture scoping within 24 business hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0 mt-2" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">99.99% Guaranteed Uptime</h4>
                  <p className="text-sm text-slate-600 font-medium">Financially backed SLAs for all API and AI infrastructure deployments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0 mt-2" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Dedicated Engineering Team</h4>
                  <p className="text-sm text-slate-600 font-medium">Direct access to the architects building your system via Slack/Teams.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200">
              <h4 className="text-sm font-bold tracking-widest text-[#00a9ce] uppercase mb-2">Technical Feasibility</h4>
              <p className="text-sm text-slate-600 font-medium italic">
                Every quote includes a preliminary architecture diagram to ensure complete alignment before contracts are signed.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
