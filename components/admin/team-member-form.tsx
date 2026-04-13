'use client'

import React, { useState, useRef } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import Image from 'next/image';

export interface TeamMemberFormData {
    id?: string;
    name: string;
    email: string;
    role: string;
    image?: string | null;
}

interface TeamMemberFormProps {
    initialData?: TeamMemberFormData;
    onSubmit: (formData: FormData) => Promise<{ success: boolean; message?: string }>;
    onCancel: () => void;
    title: string;
    submitLabel: string;
}

const TeamMemberForm = ({ initialData, onSubmit, onCancel, title, submitLabel }: TeamMemberFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(initialData?.image || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData(e.currentTarget);
            if (initialData?.id) {
                formData.append('id', initialData.id);
            }
            
            // If we have an initial image but no new file, we don't need to do anything special
            // The server action should handle "if file is empty, keep old image" logic
            
            const result = await onSubmit(formData);
            
            if (!result.success) {
                setError(result.message || 'Something went wrong');
            }
        } catch (err) {
            setError('An unexpected error occurred');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h2 className="text-xl font-bold text-gray-800 font-display">{title}</h2>
                    <button 
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 flex items-center gap-2">
                            <span className="font-medium">Error:</span> {error}
                        </div>
                    )}

                    {/* Image Upload */}
                    <div className="flex flex-col items-center gap-4">
                        <div 
                            className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dashed border-gray-300 hover:border-primary transition-colors cursor-pointer group bg-gray-50"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {previewUrl ? (
                                <Image 
                                    src={previewUrl} 
                                    alt="Preview" 
                                    fill 
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <Upload size={24} />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-xs font-medium">Change</span>
                            </div>
                        </div>
                        <input 
                            type="file" 
                            name="image" 
                            ref={fileInputRef} 
                            onChange={handleFileChange} 
                            accept="image/*" 
                            className="hidden" 
                        />
                        <button 
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="text-sm text-primary font-medium hover:underline"
                        >
                            {previewUrl ? 'Change Photo' : 'Upload Photo'}
                        </button>
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            defaultValue={initialData?.name}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            placeholder="e.g. John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            defaultValue={initialData?.email}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            placeholder="e.g. john@company.com"
                        />
                    </div>

                    {/* Role */}
                    <div className="space-y-1.5">
                        <label htmlFor="role" className="text-sm font-medium text-gray-700">Role / Position</label>
                        <input 
                            type="text" 
                            id="role" 
                            name="role" 
                            required
                            defaultValue={initialData?.role}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                            placeholder="e.g. Senior Developer"
                        />
                    </div>

                    <div className="pt-2 flex gap-3">
                        <button 
                            type="button" 
                            onClick={onCancel}
                            disabled={isLoading}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 disabled:opacity-70 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                submitLabel
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeamMemberForm;
