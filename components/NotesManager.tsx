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
  AlignLeft, AlignCenter, AlignRight, Upload, Table as TableIcon, Columns, Rows
} from 'lucide-react';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { addNote, deleteNote } from '@/app/actions/client-management';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

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
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-transparent/50 rounded-t-xl">
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
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all ${editor.isActive('bold') ? 'bg-transparent shadow-sm text-blue-600' : 'text-slate-400'}`}
        title="Bold"
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all ${editor.isActive('italic') ? 'bg-transparent shadow-sm text-blue-600' : 'text-slate-400'}`}
        title="Italic"
      >
        <Italic size={16} />
      </button>
      <div className="w-px h-4 bg-gray-300 mx-1" />
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all ${editor.isActive('bulletList') ? 'bg-transparent shadow-sm text-blue-600' : 'text-slate-400'}`}
        title="Bullet List"
      >
        <List size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all ${editor.isActive('orderedList') ? 'bg-transparent shadow-sm text-blue-600' : 'text-slate-400'}`}
        title="Ordered List"
      >
        <ListOrdered size={16} />
      </button>
      <div className="w-px h-4 bg-gray-300 mx-1" />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all text-slate-400 hover:text-blue-600 disabled:opacity-50"
        title="Upload Image"
      >
        <ImageIcon size={16} />
      </button>
      <div className="w-px h-4 bg-gray-300 mx-1" />
      <button
        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all text-slate-400 hover:text-blue-600`}
        title="Insert Table"
      >
        <TableIcon size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        disabled={!editor.can().addColumnAfter()}
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all ${!editor.can().addColumnAfter() ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-slate-400 hover:text-blue-600'}`}
        title="Add Column"
      >
        <Columns size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        disabled={!editor.can().addRowAfter()}
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all ${!editor.can().addRowAfter() ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-slate-400 hover:text-blue-600'}`}
        title="Add Row"
      >
        <Rows size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        disabled={!editor.can().deleteTable()}
        className={`p-1.5 rounded hover:bg-transparent hover:shadow-sm transition-all ${!editor.can().deleteTable() ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-slate-400 hover:text-red-500'}`}
        title="Delete Table"
      >
        <Trash2 size={16} />
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
  Table.configure({
    resizable: true,
    HTMLAttributes: {
      class: 'w-full border-collapse border border-slate-300 my-4',
    },
  }),
  TableRow,
  TableHeader.configure({
    HTMLAttributes: {
      class: 'border border-slate-300 bg-slate-100 font-bold p-2 text-left',
    },
  }),
  TableCell.configure({
    HTMLAttributes: {
      class: 'border border-slate-300 p-2',
    },
  }),
];

export default function NotesManager({ subscriberId, initialNotes }: NotesManagerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize selected notes from URL
  const urlNotes = searchParams.get('notes');
  const defaultSelected = urlNotes ? new Set(urlNotes.split(',').map(Number)) : new Set<number>();
  const [selectedNotes, setSelectedNotes] = useState<Set<number>>(defaultSelected);

  const toggleNoteSelection = (noteId: number) => {
    const newSet = new Set(selectedNotes);
    if (newSet.has(noteId)) {
      newSet.delete(noteId);
    } else {
      newSet.add(noteId);
    }
    setSelectedNotes(newSet);
    
    // Update URL to share state with parent action buttons
    const params = new URLSearchParams(searchParams.toString());
    if (newSet.size > 0) {
      params.set('notes', Array.from(newSet).join(','));
    } else {
      params.delete('notes');
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

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

    const content = editor.getHTML();

    if (editor.isEmpty && !content.includes('<table')) {
      alert('Please add some text, an image, or a table before saving.');
      return;
    }

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
        alert(result.error || 'Failed to save note. Payload might be too large.');
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
    <div className="bg-transparent p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-700 flex items-center gap-2">
          <FileText size={18} className="text-blue-500" />
          Project Notes
        </h2>
        {selectedNotes.size > 0 && (
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium border border-blue-100">
            {selectedNotes.size} selected for report
          </span>
        )}
      </div>

      {/* Editor Area */}
      <div className="mb-8 border border-slate-200 rounded-xl overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm bg-transparent">
        <MenuBar editor={editor} />
        <EditorContent
          editor={editor}
          className="[&_.ProseMirror]:min-h-[150px] [&_img]:max-w-[45%] [&_img]:max-h-[300px] [&_img]:inline-block [&_img]:m-1 [&_img]:border [&_img]:border-slate-200 [&_img]:rounded-lg [&_img]:shadow-sm"
        />
        <div className="p-2 bg-transparent border-t border-slate-200 flex justify-end">
          <button
            onClick={handleAddNote}
            disabled={isSubmitting}
            className="bg-blue-600 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-md shadow-blue-100 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
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
      <div className="space-y-4 flex-1">
        {initialNotes.length > 0 ? (
          initialNotes.map((note) => (
            <div key={note.id} className="group bg-transparent p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all relative">
              {/* Note Header */}
              <div className="flex justify-between items-start mb-3 border-b border-gray-50 pb-2">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    checked={selectedNotes.has(note.id)}
                    onChange={() => toggleNoteSelection(note.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    title="Include in Report"
                  />
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-transparent px-2 py-1 rounded-md">
                    <Clock size={12} />
                    {new Date(note.created_at).toLocaleString(undefined, {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })}
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  disabled={isPending}
                  className="text-slate-600 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                  title="Delete Note"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              {/* Note Content */}
              <div className="pt-2">
                <div
                  className="tiptap-view prose prose-sm max-w-none text-gray-700 [&>img]:rounded-lg [&>img]:my-2 [&>img]:bg-transparent [&>img]:border [&>img]:border-slate-200"
                  dangerouslySetInnerHTML={{ __html: note.content }}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-slate-500 bg-transparent/50 rounded-2xl border border-dashed border-slate-200">
            <FileText size={32} className="mx-auto mb-3 text-slate-600" />
            <p className="text-sm">No notes yet. Add your first update above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
