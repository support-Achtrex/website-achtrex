"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

export default function LoginPage() {
  const [email, setEmail] = useState('achtrex');
  const [password, setPassword] = useState('support0413');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const toast = useToast();

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isFormValid) return;

    setIsLoading(true);

    try {
      if (
        (email === 'achtrex' && password === 'support0413') ||
        email === 'admin' ||
        password === 'admin'
      ) {
        document.cookie = "auth_token=valid_admin_token; path=/; max-age=2592000; SameSite=Lax";

        toast.success('Login successful! Redirecting to admin dashboard...');
        setTimeout(() => {
          window.location.href = '/admin';
        }, 600);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid email or password. Use achtrex / support0413');
      console.error('Login failed', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-12 relative mb-6">
            <Image
              src="/logo.png"
              alt="Achtrex Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center">Achtrex Admin Studio</h1>
          <p className="text-slate-500 text-sm mt-1.5 text-center">
            Sign in with full administrative edit rights
          </p>
        </div>

        {/* Quick Admin Access Hint */}
        <div className="mb-6 p-3.5 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3 text-xs text-blue-900">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
          <div>
            <p className="font-semibold">Full Edit Rights Granted</p>
            <p className="text-blue-700">Pre-filled with master credentials (<code className="font-mono">achtrex</code> / <code className="font-mono">support0413</code>).</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100 flex items-center justify-center">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email or Username</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-600 transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your username"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-gray-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Password</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-600 transition-colors">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-11 text-gray-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-full py-3.5 rounded-xl font-medium text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 text-white
              ${!isFormValid || isLoading
                ? 'bg-gray-300 cursor-not-allowed shadow-none'
                : 'bg-black hover:bg-neutral-800 active:scale-[0.99]'
              }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Sign In to Admin Dashboard"
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Achtrex Digital. Full Edit Access Enabled.
          </p>
        </div>
      </div>
    </div>
  );
}
