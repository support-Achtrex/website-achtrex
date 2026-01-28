
'use client';

import React, { useState } from 'react';
import { EMAIL_TEMPLATES, EmailTemplate } from '@/lib/templates';
import { Check, Copy, Layout, Search } from 'lucide-react';

interface TemplateSelectorProps {
    onSelect: (template: EmailTemplate) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const filteredTemplates = EMAIL_TEMPLATES.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                    type="text"
                    placeholder="Search templates..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-primary transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredTemplates.map((template) => (
                    <button
                        key={template.id}
                        type="button"
                        onClick={() => {
                            setSelectedId(template.id);
                            onSelect(template);
                        }}
                        className={`text-left p-4 rounded-xl border transition-all group relative ${selectedId === template.id
                                ? 'border-primary bg-primary/5 shadow-sm'
                                : 'border-gray-100 bg-white hover:border-primary/30 hover:shadow-sm'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <h4 className={`font-bold text-sm ${selectedId === template.id ? 'text-primary' : 'text-gray-800'}`}>
                                {template.name}
                            </h4>
                            {selectedId === template.id && (
                                <Check size={14} className="text-primary" />
                            )}
                        </div>
                        <p className="text-[10px] text-gray-400 line-clamp-1">{template.subject}</p>

                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Layout size={12} className="text-gray-300" />
                        </div>
                    </button>
                ))}
            </div>

            {filteredTemplates.length === 0 && (
                <div className="text-center py-10 text-gray-400 text-sm">
                    No templates found matching your search.
                </div>
            )}
        </div>
    );
};
