import React from 'react';
import { Editor } from '@tiptap/react';
import {
    HelpCircle,
    ChevronDown,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Check,
    Edit3,
    X
} from 'lucide-react';

interface SidebarProps {
    editor: Editor | null;
}

export default function Sidebar({ editor }: SidebarProps) {
    if (!editor) {
        return null;
    }

    // Determine current block type
    const isHeading = editor.isActive('heading');
    const isParagraph = editor.isActive('paragraph');
    const isImage = editor.isActive('image');
    const isBlockquote = editor.isActive('blockquote');

    let currentBlockType = 'Text';
    if (isImage) currentBlockType = 'Image';
    else if (isHeading) currentBlockType = 'Heading';
    else if (isBlockquote) currentBlockType = 'Quote';

    // Determine heading level
    let currentStyle = 'Paragraph';
    if (editor.isActive('heading', { level: 1 })) currentStyle = 'Heading 1';
    if (editor.isActive('heading', { level: 2 })) currentStyle = 'Heading 2';
    if (editor.isActive('heading', { level: 3 })) currentStyle = 'Heading 3';
    if (editor.isActive('heading', { level: 4 })) currentStyle = 'Heading 4';
    if (editor.isActive('blockquote')) currentStyle = 'Quote';


    const setBlockType = (type: string) => {
        if (type === 'Text') editor.chain().focus().setParagraph().run();
        if (type === 'Heading') editor.chain().focus().toggleHeading({ level: 2 }).run();
        if (type === 'Quote') editor.chain().focus().toggleBlockquote().run();
        // Image handling is usually done via insertion, not conversion, but we can keep it simple
    };

    const setBlockStyle = (style: string) => {
         if (style === 'Paragraph') editor.chain().focus().setParagraph().run();
         if (style === 'Heading 1') editor.chain().focus().toggleHeading({ level: 1 }).run();
         if (style === 'Heading 2') editor.chain().focus().toggleHeading({ level: 2 }).run();
         if (style === 'Heading 3') editor.chain().focus().toggleHeading({ level: 3 }).run();
         if (style === 'Quote') editor.chain().focus().toggleBlockquote().run();
    };

    const setAlignment = (align: string) => {
        editor.chain().focus().setTextAlign(align).run();
    };

    const setColor = (color: string) => {
        editor.chain().focus().setColor(color).run();
    };


    return (
        <div className="w-80 bg-transparent rounded-3xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden h-full">
            <div className="p-5 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 font-sans">Edit Block</h3>
                <HelpCircle size={16} className="text-slate-600" />
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {/* Block Type */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-montserrat">Block Type</label>
                    <div className="relative">
                        <select
                            value={currentBlockType}
                            onChange={(e) => setBlockType(e.target.value)}
                            className="w-full appearance-none bg-transparent border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans"
                        >
                            <option value="Text">Text</option>
                            <option value="Heading">Heading</option>
                            <option value="Quote">Quote</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                </div>

                {/* Block Style */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-montserrat">Block Style</label>
                    <div className="relative">
                        <select
                            value={currentStyle}
                            onChange={(e) => setBlockStyle(e.target.value)}
                            className="w-full appearance-none bg-transparent border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans"
                        >
                            <option value="Paragraph">Paragraph</option>
                            <option value="Heading 1">Heading 1</option>
                            <option value="Heading 2">Heading 2</option>
                            <option value="Heading 3">Heading 3</option>
                            <option value="Quote">Quote</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                    </div>
                </div>

                {/* Block Positioning */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-montserrat">Block Positioning</label>
                    <div className="flex bg-transparent p-1 rounded-xl border border-slate-200">
                        <button
                            onClick={() => setAlignment('left')}
                            className={`flex-1 py-1.5 flex justify-center rounded-lg transition-all shadow-sm ${editor.isActive({ textAlign: 'left' }) ? 'bg-transparent text-gray-700' : 'text-slate-500 hover:text-gray-700 hover:bg-transparent'}`}
                        >
                            <AlignLeft size={16} />
                        </button>
                        <button
                            onClick={() => setAlignment('center')}
                            className={`flex-1 py-1.5 flex justify-center rounded-lg transition-all shadow-sm ${editor.isActive({ textAlign: 'center' }) ? 'bg-transparent text-gray-700' : 'text-slate-500 hover:text-gray-700 hover:bg-transparent'}`}
                        >
                            <AlignCenter size={16} />
                        </button>
                        <button
                            onClick={() => setAlignment('right')}
                            className={`flex-1 py-1.5 flex justify-center rounded-lg transition-all shadow-sm ${editor.isActive({ textAlign: 'right' }) ? 'bg-transparent text-gray-700' : 'text-slate-500 hover:text-gray-700 hover:bg-transparent'}`}
                        >
                            <AlignRight size={16} />
                        </button>
                        <button
                            onClick={() => setAlignment('justify')}
                            className={`flex-1 py-1.5 flex justify-center rounded-lg transition-all shadow-sm ${editor.isActive({ textAlign: 'justify' }) ? 'bg-transparent text-gray-700' : 'text-slate-500 hover:text-gray-700 hover:bg-transparent'}`}
                        >
                            <AlignJustify size={16} />
                        </button>
                    </div>
                </div>

                {/* Block Color */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-montserrat">Block Color</label>
                    <div className="flex gap-3 flex-wrap">
                        <button onClick={() => setColor('inherit')} className="w-8 h-8 rounded-full bg-gray-200 hover:ring-2 ring-offset-2 ring-gray-200 transition-all" title="Default"></button>
                        <button onClick={() => setColor('#9333ea')} className="w-8 h-8 rounded-full bg-purple-600 hover:ring-2 ring-offset-2 ring-purple-600 transition-all" title="Purple"></button>
                        <button onClick={() => setColor('#22c55e')} className="w-8 h-8 rounded-full bg-green-500 hover:ring-2 ring-offset-2 ring-green-500 transition-all" title="Green"></button>
                        <button onClick={() => setColor('#f97316')} className="w-8 h-8 rounded-full bg-orange-500 hover:ring-2 ring-offset-2 ring-orange-500 transition-all" title="Orange"></button>
                        <button onClick={() => setColor('#3b82f6')} className="w-8 h-8 rounded-full bg-blue-500 hover:ring-2 ring-offset-2 ring-blue-500 transition-all" title="Blue"></button>
                        <button onClick={() => setColor('#ef4444')} className="w-8 h-8 rounded-full bg-red-500 hover:ring-2 ring-offset-2 ring-red-500 transition-all" title="Red"></button>
                    </div>
                </div>

                <hr className="border-slate-200" />

                {/* Block Details */}
                <div>
                    <h4 className="font-bold text-gray-900 font-sans mb-1">Block Details</h4>
                    <p className="text-xs text-slate-400 font-montserrat leading-relaxed">Here you can edit your block details seamlessly.</p>
                </div>

                {/* Custom Attribute (Mockup for now, could be ID or Class) */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-montserrat">Custom Attribute</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="e.g. custom-class"
                            className="w-full bg-transparent border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans"
                        />
                        <Edit3 size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    </div>
                </div>
            </div>

            <div className="p-5 border-t border-gray-50 space-y-3 bg-transparent">
                <button className="w-full py-3 rounded-xl bg-[#1E1E1E] text-slate-900 text-sm font-bold hover:bg-black transition-colors font-sans flex items-center justify-center gap-2 shadow-lg shadow-gray-200">
                    <span>Save Changes</span>
                    <Check size={16} />
                </button>
                <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-500 text-sm font-bold hover:bg-transparent transition-colors font-sans flex items-center justify-center gap-2">
                    <span>Discard Changes</span>
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
