'use client'
import Image from "next/image";
import Link from "next/link";
import { Eye, Clock, MoreVertical, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

interface AdminBlogCardProps {
    slug: string;
    category: string;
    title: string;
    date: string;
    image: string;
    views: string;
    readTime: string;
}

export function AdminBlogCard({ slug, category, title, date, image, views, readTime }: AdminBlogCardProps) {
    const [showActions, setShowActions] = useState(false);

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (confirm('Are you sure you want to delete this post?')) {
            // In a real app, this would call an API
            alert('Post deleted!');
        }
        setShowActions(false);
    };

    return (
        <div className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 h-full relative">
            <div className="absolute top-4 right-4 z-20">
                <div className="relative">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowActions(!showActions);
                        }}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-600 hover:text-primary transition-colors shadow-sm opacity-0 group-hover:opacity-100"
                    >
                        <MoreVertical size={18} />
                    </button>

                    {showActions && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setShowActions(false);
                                }}
                            ></div>
                            <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-30 animate-in fade-in zoom-in-95 duration-100">
                                <Link
                                    href={`/admin/blogs/new`} // Linking to new for demo as requested
                                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors font-manrope"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Edit size={14} />
                                    Edit
                                </Link>
                                <button
                                    onClick={handleDelete}
                                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors font-manrope text-left"
                                >
                                    <Trash2 size={14} />
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-xs font-bold font-montserrat shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium font-montserrat mb-3">
                    <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {readTime}
                    </span>
                    <span>•</span>
                    <span>{date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 font-manrope group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-end">
                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1.5 text-xs font-medium" title="Views">
                            <Eye size={14} />
                            <span>{views}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
