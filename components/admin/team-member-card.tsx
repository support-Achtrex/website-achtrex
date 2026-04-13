'use client'

import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Mail, Linkedin, Twitter, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface TeamMemberProps {
    id: string;
    name: string;
    email: string;
    role: string;
    image?: string | null;
    socials?: {
        linkedin?: string;
        twitter?: string;
    };
}

interface TeamMemberCardProps {
    member: TeamMemberProps;
    onEdit: (member: TeamMemberProps) => void;
    onDelete: (id: string) => void;
}

const TeamMemberCard = ({ member, onEdit, onDelete }: TeamMemberCardProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="rounded-3xl p-px bg-linear-to-br from-gray-200 to-gray-50 group hover:shadow-lg transition-all duration-300">
            <div className="bg-white rounded-[23px] p-6 flex flex-col items-center text-center h-full relative">
                {/* Actions */}
                <div className="absolute top-4 left-4">
                    <button 
                        onClick={() => onDelete(member.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
                <div className="absolute top-4 right-4" ref={menuRef}>
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="text-gray-300 hover:text-gray-600 transition-colors relative z-10"
                    >
                        <MoreHorizontal size={18} />
                    </button>

                    {/* Dropdown Menu */}
                    {showMenu && (
                        <div className="absolute right-0 top-8 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 w-32 z-20 animate-in fade-in zoom-in-95 duration-200">
                            <button 
                                onClick={() => {
                                    onEdit(member);
                                    setShowMenu(false);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors text-left"
                            >
                                <Edit size={14} />
                                <span>Edit</span>
                            </button>
                            <button 
                                onClick={() => {
                                    onDelete(member.id);
                                    setShowMenu(false);
                                }}
                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors text-left"
                            >
                                <Trash2 size={14} />
                                <span>Delete</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Avatar */}
                <div className="w-24 h-24 rounded-full p-1 bg-linear-to-br from-gray-100 to-white shadow-inner mb-4 mt-2">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        {member.image ? (
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-linear-to-br from-primary/80 to-primary/40 flex items-center justify-center text-white font-bold text-xl">
                                {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                            </div>
                        )}
                    </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-gray-800 font-display mb-1">{member.name}</h3>
                <p className="text-xs text-gray-400 font-manrope mb-6">{member.email}</p>
                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium mb-6 font-manrope">{member.role}</span>

                {/* Social Actions */}
                <div className="flex items-center gap-3 mt-auto">
                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                        <Mail size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                        <Linkedin size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                        <Twitter size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
