"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            // Hardcoded check for demo purposes (matching the action logic)
            // Ideally we call the Server Action here
            if (email === 'achtrex' && password === 'support0413') {
                // Set a simple cookie for "auth"
                document.cookie = "auth_token=valid_admin_token; path=/; max-age=86400; SameSite=Strict";

                toast.success('Login successful! Redirecting to dashboard...');
                setTimeout(() => {
                    // Force refresh to update any server components
                    window.location.href = '/admin';
                }, 1000);
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (err) {
            setError('Invalid email or password. Please try again.');
            console.error('Login failed', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-manrope">
            {/* Main Card */}
            <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 p-8 md:p-10">

                {/* Header / Logo */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-48 h-12 relative mb-6">
                        {/* Assuming logo is at /logo.png based on file list, using object-contain to be safe */}
                        <Image
                            src="/logo.png"
                            alt="Achtrex Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 text-center">Sign in to Dashboard</h1>
                    <p className="text-gray-500 text-sm mt-2 text-center font-montserrat">Welcome back! Please enter your details.</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100 flex items-center justify-center">
                            {error}
                        </div>
                    )}

                    {/* Email Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-montserrat ml-1">Email or Username</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                <Mail size={20} />
                            </div>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-montserrat ml-1">Password</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                <Lock size={20} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-12 text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="flex justify-end">
                        <Link
                            href="#"
                            className="text-sm font-bold text-primary hover:text-blue-700 transition-colors font-montserrat"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!isFormValid || isLoading}
                        className={`w-full py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2
                            ${!isFormValid || isLoading
                                ? 'bg-gray-300 cursor-not-allowed shadow-none'
                                : 'bg-primary hover:bg-blue-700 hover:shadow-blue-500/30 active:scale-[0.98]'
                            }`}
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            "Log In"
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400 font-montserrat">
                        &copy; {new Date().getFullYear()} Achtrex. Internal System.
                    </p>
                </div>
            </div>
        </div>
    );
}
