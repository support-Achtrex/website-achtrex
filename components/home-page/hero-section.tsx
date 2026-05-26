'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Building2, Lightbulb, User, ArrowLeft, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitContactForm } from '@/app/actions/contact';

export const Hero = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [formData, setFormData] = useState({
      firstName: "", lastName: "", email: "", company: "", phone: "", note: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');
      const form = new FormData();
      form.append('name', `${formData.firstName} ${formData.lastName}`.trim());
      form.append('email', formData.email);
      form.append('company', formData.company);
      form.append('phone', formData.phone);
      form.append('source', `Homepage Modal: ${selectedOption}`);
      form.append('message', formData.note || `Inquiry from ${selectedOption}`);

      try {
          const result = await submitContactForm(form);
          if (result.success) setStatus('success');
          else {
              setErrorMessage(result.error || "Failed to submit request.");
              setStatus('error');
          }
      } catch (error) {
          setErrorMessage("An unexpected error occurred.");
          setStatus('error');
      }
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setTimeout(() => {
          setSelectedOption(null);
          setStatus('idle');
          setFormData({ firstName: "", lastName: "", email: "", company: "", phone: "", note: "" });
      }, 300);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#070b14]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/ai_car_hero_v4.png" 
            alt="Achtrex Autonomous Vehicle Architecture" 
            fill 
            className="object-cover object-center" 
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/90 via-[#070b14]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-48 flex flex-col items-start text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[30px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-tight mb-6 text-white max-w-[1000px]"
        >
          Engineering the Intelligence Layer <br className="hidden lg:block" />
          Behind Modern Automotive Platforms
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[16px] sm:text-[17px] text-gray-400 font-medium leading-[1.7] max-w-[650px] mb-10"
        >
          Achtrex builds scalable automotive intelligence infrastructure <br className="hidden md:block" />
          powering vehicle data systems, enterprise APIs, AI-driven automation, <br className="hidden md:block" />
          and the future of connected mobility technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => router.push('/contact-us')}
            className="relative group overflow-hidden rounded-lg p-[2px] transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-full bg-[#070b14] hover:bg-[#0c1222] text-white font-bold text-[16px] px-8 py-3.5 rounded-[6px] transition-colors duration-500">
              Talk with our team
            </div>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative group rounded-lg overflow-hidden p-[1px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50 rounded-lg group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#070b14]/90 backdrop-blur-sm text-white font-bold text-[16px] px-8 py-3.5 rounded-lg hover:bg-[#111112] transition-colors">
              Start building
            </div>
          </button>
        </motion.div>
      </div>

      {/* Bottom Logos Banner */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-20 hidden md:block">
          <div className="bg-transparent/5 backdrop-blur-md border border-white/10 rounded-2xl flex justify-between items-center px-10 py-3.5">
              
              <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-black text-base tracking-tighter">Automotive</span>
                  <span className="text-[#38bdf8] font-bold text-base">Dataset</span>
              </div>

              <div className="w-px h-5 bg-transparent/10"></div>

              <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-bold text-base tracking-widest">LUMI</span>
                  <span className="text-[#a855f7] font-medium text-base">AI</span>
              </div>

              <div className="w-px h-5 bg-transparent/10"></div>

              <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-bold text-base tracking-tight">Achtrex</span>
                  <span className="text-[#34d399] font-light text-base ml-1">Core</span>
              </div>

              <div className="w-px h-5 bg-transparent/10"></div>

              <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-bold text-base tracking-tight">Enterprise</span>
                  <span className="text-gray-400 font-light text-base ml-1">Gateway</span>
              </div>

          </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 text-left">
          <div className="bg-[#0a0a0b] border border-gray-800 rounded-[24px] w-full max-w-[600px] p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-white z-10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            {!selectedOption ? (
              <div className="space-y-5 mt-4">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Choose your path</h2>
                
                {/* Option 1: Business */}
                <button onClick={() => setSelectedOption('Business')} className="relative group rounded-[20px] w-full overflow-hidden p-[2px] text-left">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[20px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-[#111112] text-white flex items-center gap-6 p-5 rounded-[18px] transition-colors group-hover:bg-[#1a1a1c]">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Business</h3>
                      <p className="text-gray-400 text-[14px] font-medium leading-tight">I want to use Achtrex's APIs for my company</p>
                    </div>
                  </div>
                </button>

                {/* Option 2: Personal */}
                <button onClick={() => setSelectedOption('Personal use')} className="relative group rounded-[20px] w-full overflow-hidden p-[2px] text-left">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-[20px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-[#111112] text-white flex items-center gap-6 p-5 rounded-[18px] transition-colors group-hover:bg-[#1a1a1c]">
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Personal use</h3>
                      <p className="text-gray-400 text-[14px] font-medium leading-tight">I want to use Achtrex's APIs to build something for fun</p>
                    </div>
                  </div>
                </button>

                {/* Option 3: App User */}
                <button onClick={() => setSelectedOption('App user')} className="relative group rounded-[20px] w-full overflow-hidden p-[2px] text-left">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-[20px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-[#111112] text-white flex items-center gap-6 p-5 rounded-[18px] transition-colors group-hover:bg-[#1a1a1c]">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">App user</h3>
                      <p className="text-gray-400 text-[14px] font-medium leading-tight">I'm trying to connect my account to an Achtrex-powered app</p>
                    </div>
                  </div>
                </button>
              </div>
            ) : status === 'success' ? (
              <div className="py-12 text-center mt-4">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Request Received</h4>
                  <p className="text-gray-400">Our team will be in touch shortly.</p>
                  <button onClick={closeModal} className="mt-8 relative group rounded-full overflow-hidden p-[2px]">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-70" />
                      <div className="relative bg-[#111112] text-white font-bold px-8 py-3 rounded-full transition-colors">Close</div>
                  </button>
              </div>
            ) : (
              <div className="mt-2">
                <button onClick={() => setSelectedOption(null)} className="flex items-center gap-2 text-gray-400 hover:text-white font-semibold mb-6 transition-colors text-sm">
                  <ArrowLeft size={16} /> Back to options
                </button>
                <h2 className="text-2xl font-bold text-white mb-6">Enter your details</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="w-full py-3.5 px-4 bg-[#1a1a1c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                        <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="w-full py-3.5 px-4 bg-[#1a1a1c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work email" className="w-full py-3.5 px-4 bg-[#1a1a1c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                        <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className="w-full py-3.5 px-4 bg-[#1a1a1c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                    </div>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number (optional)" className="w-full py-3.5 px-4 bg-[#1a1a1c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors" />
                    <textarea name="note" value={formData.note} onChange={handleChange} placeholder="How can we help? (optional)" rows={3} className="w-full py-3.5 px-4 bg-[#1a1a1c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none" />
                    
                    {status === 'error' && (
                        <p className="text-red-400 text-sm">{errorMessage}</p>
                    )}
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="relative group rounded-xl overflow-hidden p-[2px] w-full mt-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-[#111112] text-white font-bold text-[15px] px-8 py-3.5 rounded-[10px] transition-colors disabled:opacity-70 flex justify-center items-center w-full h-full">
                            {status === 'loading' ? 'Submitting...' : 'Send Request'}
                        </div>
                    </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};