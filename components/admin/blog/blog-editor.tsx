"use client";

import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import {
    Eye,
    Check,
    MoreVertical,
} from 'lucide-react';
import LinkNext from 'next/link';
import Toolbar from './editor/toolbar';
import Sidebar from './editor/sidebar';

export default function BlogEditor() {
    const [title, setTitle] = useState('Post Title Here');

    const [updateTrigger, setUpdateTrigger] = useState(0);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Link.configure({
                openOnClick: false,
            }),
            Placeholder.configure({
                placeholder: 'Start writing your amazing story here...',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Underline,
            TextStyle,
            Color,
        ],
        immediatelyRender: false,
        content: '<p>Start writing your amazing story here...</p>',
        editorProps: {
            attributes: {
                class: 'prose prose-lg max-w-none focus:outline-none min-h-[300px]',
            },
        },
        onTransaction: () => {
            setUpdateTrigger(prev => prev + 1);
        },
    });

    const handleSave = () => {
        if (!editor) return;

        const postData = {
            title,
            content: editor.getHTML(),
            json: editor.getJSON(),
            lastUpdated: new Date().toISOString(),
        };

        console.log('Saving Post Data:', postData);
        alert('Post saved! Check console for data.');
    };

    const handlePreview = () => {
        if (!editor) return;

        const htmlContent = editor.getHTML();
        const previewWindow = window.open('', '_blank');
        if (previewWindow) {
            previewWindow.document.write(`
                <html>
                    <head>
                        <title>Preview: ${title}</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
                    </head>
                    <body class="bg-gray-50 p-10">
                        <div class="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-sm">
                            <h1 class="text-4xl font-bold mb-6 font-sans">${title}</h1>
                            <div class="prose prose-lg max-w-none">
                                ${htmlContent}
                            </div>
                        </div>
                    </body>
                </html>
            `);
            previewWindow.document.close();
        }
    };

    return (
        <div className="flex h-[calc(100vh-140px)] gap-6">
            {/* Main Editor Canvas */}
            <div className="flex-1 flex flex-col bg-gray-50 rounded-3xl overflow-hidden border border-gray-200/50 shadow-sm">
                {/* Editor Top Bar */}
                <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-xs text-gray-400 font-montserrat mb-1">
                                <LinkNext href="/admin/blogs" className="hover:text-primary transition-colors">Blogs</LinkNext>
                                <span>/</span>
                                <span>New Post</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter post title..."
                                    className="text-xl font-bold text-gray-900 placeholder:text-gray-300 outline-none bg-transparent font-manrope w-96"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Article</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1 font-montserrat">
                                Last Updated {new Date().toLocaleDateString()} • By Timon Wyse
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handlePreview}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-bold hover:bg-gray-50 transition-colors font-manrope"
                        >
                            <Eye size={16} />
                            <span>Preview</span>
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E1E1E] text-white text-sm font-bold hover:bg-black transition-colors font-manrope shadow-lg shadow-gray-200"
                        >
                            <Check size={16} />
                            <span>Save & Close</span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                </div>

                {/* Editor Content Area */}
                <div className="flex-1 overflow-y-auto p-8 flex justify-center bg-[#F4F5F7]" onClick={() => editor?.chain().focus().run()}>
                    <div className="w-full max-w-3xl bg-white min-h-full rounded-2xl shadow-sm p-12 cursor-text" onClick={(e) => e.stopPropagation()}>
                        <Toolbar editor={editor} />

                        {/* Content Area */}
                        <div>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="font-manrope font-bold text-4xl mb-6 w-full border-none outline-none bg-transparent placeholder:text-gray-300"
                                placeholder="Post Title"
                            />
                            <EditorContent editor={editor} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Block Settings */}
            <Sidebar editor={editor} />
        </div>
    );
}
