
import React from 'react';
import { HelpCircle, Mail, MessageSquare, Phone, Book, Search, ExternalLink, Shield, Zap, Globe } from 'lucide-react';

export default function HelpPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-900 via-gray-800 to-primary/20 p-12 text-center text-white shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>

                <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-4">
                        <HelpCircle size={32} className="text-primary-light" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">How can we help you today?</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Welcome to the Achtrex Admin Help Center. Find answers to common questions, explore tutorials, or reach out to our elite support team.
                    </p>

                    <div className="max-w-xl mx-auto mt-8 h-14 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 flex items-center">
                        <Search className="ml-4 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search help articles..."
                            className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder:text-gray-500 font-medium"
                        />
                        <button className="bg-primary hover:bg-primary-dark h-full px-6 rounded-xl font-bold transition-all active:scale-95 shadow-lg">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Documentation", desc: "View our comprehensive technical guides", icon: <Book className="text-blue-500" />, color: "bg-blue-50" },
                    { title: "Community", desc: "Join our developer discord community", icon: <Globe className="text-purple-500" />, color: "bg-purple-50" },
                    { title: "Service Status", desc: "Check current system performance", icon: <Zap className="text-amber-500" />, color: "bg-amber-50" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                        <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                        <div className="mt-6 flex items-center text-primary font-bold text-sm">
                            Learn more <ExternalLink size={14} className="ml-2" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* FAQs */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Shield className="text-primary" size={24} />
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {[
                                { q: "How do I manage client invoices?", a: "Navigate to the Invoices section in the sidebar. You can create, edit, and track payment status for all client billings from there." },
                                { q: "Can I customize email templates?", a: "Yes! In the Marketing Center, you can pick from our premium HTML templates or write your own custom code to engage your audience." },
                                { q: "How do I track project progress?", a: "Enter a Subscriber's detail page. You can add milestones, upload project files, and generate weekly progress reports." },
                                { q: "Is my data secure?", a: "Achtrex uses enterprise-grade encryption and Vercel's secure cloud infrastructure to ensure your data is always protected." }
                            ].map((faq, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all cursor-pointer">
                                    <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="space-y-8">
                    <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <h3 className="text-xl font-bold mb-6 relative z-10">Direct Support</h3>
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Email us 24/7</p>
                                    <p className="font-bold text-sm">support@achtrex.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                    <MessageSquare size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Live Chat</p>
                                    <p className="font-bold text-sm">Average response: 5m</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Priority Line</p>
                                    <p className="font-bold text-sm">+1 (555) ACHTREX</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-10 bg-white text-gray-900 py-4 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all active:scale-95 shadow-lg">
                            Open Support Ticket
                        </button>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                        <div className="flex items-center gap-3 mb-3">
                            <Zap size={20} className="text-primary" />
                            <h4 className="font-bold text-gray-900 text-sm">Pro Tip</h4>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed font-medium">
                            Use the <strong>"Weekly Update"</strong> feature in the Subscriber portal to automatically keep your clients in the loop without typing a single email.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
