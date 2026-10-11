'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '@/app/actions/contact';
import { STUDIO_CONFIG } from '@/data/studio-data';

export default function ContactStudioPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const res = await submitContactForm(formData);
      if (res && res.error) {
        setErrorMessage(res.error);
      } else {
        setIsSuccess(true);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting your inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* =========================================================================
          HERO (Contacts Hero)
      ========================================================================== */}
      <section className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-12 px-6 sm:px-12 lg:px-20 border-b border-white/10 overflow-hidden">
        {/* Top spacing */}
        <div />

        {/* Large Contact Heading & Email */}
        <div className="w-full max-w-[1720px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-white leading-[1.05]"
          >
            Let&apos;s talk about your idea.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-xl sm:text-2xl md:text-3xl text-white/80 font-light max-w-4xl mt-6 leading-relaxed"
          >
            Have a product, experience or idea you want to bring to life? Let&apos;s build something meaningful together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-10 flex flex-wrap items-center gap-8"
          >
            <a
              href={STUDIO_CONFIG.emailHref}
              className="font-clash text-3xl sm:text-5xl md:text-6xl font-light text-[#708894] hover:text-white transition-colors tracking-tight"
            >
              {STUDIO_CONFIG.email}
            </a>

            <a
              href={STUDIO_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-clash text-sm sm:text-base px-6 py-3.5 rounded-full bg-white text-black hover:bg-white/90 font-medium transition-all"
            >
              <span>Book a Meeting</span>
              <span>&rarr;</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom-left vertical scroll indicator */}
        <div className="w-full max-w-[1720px] mx-auto flex items-end justify-start pt-16">
          <div className="flex items-center gap-3">
            <span className="[writing-mode:vertical-rl] rotate-180 font-clash text-[10px] tracking-widest uppercase text-white/50">
              Scroll
            </span>
            <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-1/2 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COME AND SEE US (Outline Country Typography)
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto">
          {/* Section label */}
          <span className="font-clash text-xs sm:text-sm text-[#889fa8] block mb-16 tracking-wide">
            Studio Headquarters &amp; Presence
          </span>

          {/* Location Rows */}
          <div className="space-y-24 sm:space-y-36">
            {/* UAE GROUP */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Massive Outline Country Text */}
              <div className="lg:col-span-5">
                <span className="font-clash text-7xl sm:text-9xl lg:text-[11rem] font-light outline-text-white tracking-tight leading-none select-none block">
                  UAE
                </span>
              </div>

              {/* Dubai */}
              <div className="lg:col-span-7 space-y-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start font-clash">
                  <h3 className="text-3xl sm:text-5xl font-normal text-white">
                    Dubai
                  </h3>
                  <div className="text-sm text-white/70 space-y-1.5 leading-relaxed">
                    <p className="text-white font-medium">Headquarters &amp; Digital Production</p>
                    <p>{STUDIO_CONFIG.address}</p>
                    <p className="pt-1">
                      <a href={STUDIO_CONFIG.phoneHref} className="hover:text-white transition-colors">
                        Tel. {STUDIO_CONFIG.phone}
                      </a>
                    </p>
                    <p>
                      <a href={STUDIO_CONFIG.emailHref} className="text-white hover:underline">
                        {STUDIO_CONFIG.email}
                      </a>
                    </p>
                    <div className="pt-3">
                      <a
                        href={STUDIO_CONFIG.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white underline underline-offset-4"
                      >
                        Book a 30-min discovery meeting &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DIRECT INQUIRY FORM MODULE
      ========================================================================== */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="w-full max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <span className="font-clash text-xs sm:text-sm text-[#889fa8] block mb-4 tracking-wide">
              Direct message
            </span>
            <h2 className="font-clash text-3xl sm:text-5xl font-normal text-white leading-tight">
              Start a project with us
            </h2>
            <div className="pt-8">
              <a
                href={STUDIO_CONFIG.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white underline underline-offset-4"
              >
                Prefer a quick intro call? Book via Calendly &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {isSuccess ? (
              <div className="p-8 sm:p-12 border border-white/20 bg-white/[0.02]">
                <h3 className="font-clash text-2xl sm:text-3xl text-white mb-2">Message received</h3>
                <p className="font-clash text-sm text-white/70 mb-6">
                  Thank you for reaching out. A studio partner from our Dubai team will be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="font-clash text-xs tracking-wider uppercase text-white underline underline-offset-4 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-clash">
                {errorMessage && (
                  <div className="p-4 border border-red-500/30 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors resize-y"
                  />
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-4 text-white hover:text-white/80 transition-colors cursor-pointer"
                  >
                    <span className="text-xl sm:text-2xl font-normal">
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </span>
                    <span className="text-2xl transition-transform group-hover:translate-x-2">&rarr;</span>
                  </button>

                  <a
                    href={STUDIO_CONFIG.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase tracking-wider text-[#889fa8] hover:text-white transition-colors"
                  >
                    Or schedule a meeting via Calendly &rarr;
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
