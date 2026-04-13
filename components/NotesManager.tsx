'use client';

import React, { useState, useTransition } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import {
    Bold, Italic, List, ListOrdered, Image as ImageIcon,
    Send, Trash2, Clock, MoreVertical, FileText, Loader2,
    AlignLeft, AlignCenter, AlignRight, Upload
} from 'lucide-react';
import { addNote, deleteNote } from '@/app/actions/client-management';
import { useRouter } from 'next/navigation';

interface Note {
    id: number;
    content: string;
    created_at: string;
}

interface NotesManagerProps {
    subscriberId: number;
    initialNotes: Note[];
}

const MenuBar = ({ editor }: { editor: any }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    if (!editor) {
        return null;
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Resize image to max 800px width/height
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                const maxW = 800;
                const maxH = 800;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxW) {
                        height *= maxW / width;
                        width = maxW;
                    }
                } else {
                    if (height > maxH) {
                        width *= maxH / height;
                        height = maxH;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                ctx?.drawImage(img, 0, 0, width, height);
                // Compress to 70% quality
                const dataUrl = canvas.toDataURL('image/jpeg', 0.7);

                editor.chain().focus().setImage({ src: dataUrl }).run();
            };
            img.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);

        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-100 bg-gray-50/50 rounded-t-xl">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
            />
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('bold') ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
                title="Bold"
            >
                <Bold size={16} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('italic') ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
                title="Italic"
            >
                <Italic size={16} />
            </button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('bulletList') ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
                title="Bullet List"
            >
                <List size={16} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('orderedList') ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500'}`}
                title="Ordered List"
            >
                <ListOrdered size={16} />
            </button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <button
                onClick={() => fileInputRef.current?.click()}
                className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all text-gray-500 hover:text-blue-600 disabled:opacity-50"
                title="Upload Image"
            >
                <ImageIcon size={16} />
            </button>
        </div>
    );
};

const extensions = [
    StarterKit,
    ImageExtension.configure({
        inline: true,
        allowBase64: true,
    }),
    LinkExtension.configure({
        openOnClick: false,
    }),
    Placeholder.configure({
        placeholder: 'Write a note, update, or paste an image...',
    }),
];

export default function NotesManager({ subscriberId, initialNotes }: NotesManagerProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const editor = useEditor({
        extensions,
        content: '',
        immediatelyRender: false, // Fixes hydration mismatch
        editorProps: {
            attributes: {
                class: 'prose prose-sm max-w-none focus:outline-none min-h-[100px] p-4 text-gray-700',
            },
        },
    });

    const handleAddNote = async () => {
        if (!editor) return;

        if (editor.isEmpty) {
            alert('Please add some text or an image before saving.');
            return;
        }

        const content = editor.getHTML();

        // Basic check for extreme size
        if (content.length > 9 * 1024 * 1024) {
            alert('Note is too large (likely due to images). Please try fewer images.');
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await addNote(subscriberId, content);
            if (result.success) {
                editor.commands.clearContent();
                startTransition(() => {
                    router.refresh();
                });
            } else {
                alert('Failed to save note. Payload might be too large.');
            }
        } catch (error) {
            console.error('Failed to add note', error);
            alert('An unexpected error occurred while saving.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteNote = async (noteId: number) => {
        if (!confirm('Are you sure you want to delete this note?')) return;

        startTransition(async () => {
            await deleteNote(subscriberId, noteId);
            router.refresh();
        });
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText size={18} className="text-blue-500" />
                Project Notes
            </h2>

            {/* Editor Area */}
            <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm bg-white">
                <MenuBar editor={editor} />
                <EditorContent
                    editor={editor}
                    className="[&_.ProseMirror]:min-h-[150px] [&_img]:max-w-[45%] [&_img]:max-h-[300px] [&_img]:inline-block [&_img]:m-1 [&_img]:border [&_img]:border-gray-200 [&_img]:rounded-lg [&_img]:shadow-sm"
                />
                <div className="p-2 bg-gray-50 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={handleAddNote}
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-md shadow-blue-100 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Send size={16} />
                                Add Note
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Notes List */}
            <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2 max-h-[600px]">
                {initialNotes.length > 0 ? (
                    initialNotes.map((note) => (
                        <div key={note.id} className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative">
                            {/* Note Header */}
                            <div className="flex justify-between items-start mb-3 border-b border-gray-50 pb-2">
                                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md">
                                    <Clock size={12} />
                                    {new Date(note.created_at).toLocaleString(undefined, {
                                        dateStyle: 'medium',
                                        timeStyle: 'short'
                                    })}
                                </div>
                                <button
                                    onClick={() => handleDeleteNote(note.id)}
                                    disabled={isPending}
                                    className="text-gray-300 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                                    title="Delete Note"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>

                            {/* Note Content */}
                            <div
                                className="prose prose-sm max-w-none text-gray-700 [&>img]:rounded-lg [&>img]:my-2 [&>img]:bg-gray-50 [&>img]:border [&>img]:border-gray-100"
                                dangerouslySetInnerHTML={{ __html: note.content }}
                            />
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-400 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
                        <FileText size={32} className="mx-auto mb-3 text-gray-300" />
                        <p className="text-sm">No notes yet. Add your first update above.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
