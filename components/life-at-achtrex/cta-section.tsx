'use client'
import { useRouter } from 'next/navigation';

export function CTASection() {
    const router = useRouter();
    return (
        <section className="py-24 px-4 md:px-8 bg-[#005AB0] text-white text-center relative overflow-hidden">
            {/* Background pattern overlay could be added here if needed */}
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                    Ready to write your own success story?
                </h2>
                <p className="text-lg md:text-xl mb-10 font-manrope max-w-2xl mx-auto">
                    Partner with our team to design, build, and scale digital products users love. Together we will build, design and scale products beyond your imaginations.
                </p>
                <button onClick={() => router.push('/contact-us')} className="inline-block bg-white text-[#005AB0] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors font-manrope">
                    Talk to Us Today
                </button>
            </div>
        </section>
    );
}
