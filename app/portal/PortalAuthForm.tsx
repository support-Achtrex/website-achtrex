'use client';

import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, Mail, Lock, Building, Phone, 
  Briefcase, ArrowRight, ShieldCheck
} from 'lucide-react';
import { memberSignUpAction, memberLoginAction } from '@/app/actions/portal-actions';

const SOLUTION_TYPES = [
  'Automotive Data & OEM APIs',
  'AI-Powered Dealership Solutions',
  'Sales & Inventory Management',
  'Fleet Telematics & Tracking Platform',
  'Custom Enterprise Software Development',
  'Cloud Architecture & Microservices'
];

const BUDGET_RANGES = [
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000 - $75,000',
  '$75,000 - $150,000+',
  'Enterprise Custom Quote'
];

export default function PortalAuthForm() {
  const [activeTab, setActiveTab] = useState<'signup' | 'login'>('signup');
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Signup fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [serviceType, setServiceType] = useState(SOLUTION_TYPES[0]);
  const [budget, setBudget] = useState(BUDGET_RANGES[1]);
  const [description, setDescription] = useState('');

  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('company', company);
    formData.append('phone', phone);
    formData.append('projectTitle', projectTitle);
    formData.append('serviceType', serviceType);
    formData.append('budget', budget);
    formData.append('description', description);

    startTransition(async () => {
      const res = await memberSignUpAction(formData);
      if (res?.error) {
        setError(res.error);
      } else if (res?.redirectUrl) {
        window.location.href = res.redirectUrl;
      }
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('email', loginEmail);
    formData.append('password', loginPassword);

    startTransition(async () => {
      const res = await memberLoginAction(formData);
      if (res?.error) {
        setError(res.error);
      } else if (res?.redirectUrl) {
        window.location.href = res.redirectUrl;
      }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex bg-[#00141d]/80 p-1.5 rounded-2xl border border-cyan-500/30 mb-8 max-w-md mx-auto shadow-2xl">
        <button
          type="button"
          onClick={() => { setActiveTab('signup'); setError(null); }}
          className={`flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
            activeTab === 'signup'
              ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          Sign Up &amp; Submit Project
        </button>
        <button
          type="button"
          onClick={() => { setActiveTab('login'); setError(null); }}
          className={`flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
            activeTab === 'login'
              ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          Member Sign In
        </button>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-2xl text-sm mb-6 text-center animate-fadeIn font-semibold shadow-lg">
          {error}
        </div>
      )}

      {activeTab === 'signup' ? (
        <form 
          onSubmit={handleSignUp} 
          className="bg-[#00141d]/75 border border-cyan-500/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden bg-[linear-gradient(to_right,rgba(0,169,206,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,206,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            
            {/* Left Column: Member Account Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-cyan-500/20">
                <span className="w-6 h-6 rounded-full bg-blue-500/30 text-blue-300 font-black text-xs flex items-center justify-center border border-blue-400/50">
                  1
                </span>
                <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">
                  Member Credentials
                </h3>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Motors"
                      className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Request Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-cyan-500/20">
                <span className="w-6 h-6 rounded-full bg-cyan-500/30 text-cyan-300 font-black text-xs flex items-center justify-center border border-cyan-400/50">
                  2
                </span>
                <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">
                  Project Request &amp; Scope
                </h3>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                  Project Title *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                  <input
                    type="text"
                    required
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="e.g. Next-Gen Dealership CRM & Telematics Platform"
                    className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                  Solution Category
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                >
                  {SOLUTION_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-[#00141d] text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                  Budget Allocation
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                >
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b} className="bg-[#00141d] text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                  Project Description &amp; Requirements *
                </label>
                <textarea
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Outline your core goals, desired integrations, timeline, and deliverables..."
                  className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl p-3.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner leading-relaxed"
                />
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span>Instant email confirmation &amp; live architecture workspace initialization</span>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Creating Workspace...</span>
                </>
              ) : (
                <>
                  <span>Create Account &amp; Initialize Project</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        /* Member Login Form */
        <form 
          onSubmit={handleLogin} 
          className="bg-[#00141d]/80 border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg mx-auto relative overflow-hidden bg-[linear-gradient(to_right,rgba(0,169,206,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,169,206,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
        >
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl font-black text-white mb-2">Welcome Back</h3>
            <p className="text-slate-300 text-sm font-medium">Sign in to access your project progress, cart, and architecture diagrams.</p>
          </div>

          <div className="space-y-4 relative z-10">
            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider block mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400" size={16} />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-black/60 border border-white/20 hover:border-white/35 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors shadow-inner"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-full text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Platform</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
