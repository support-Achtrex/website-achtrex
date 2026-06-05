'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { Bold, Italic, List, ListOrdered, Table as TableIcon, Columns, Rows, Trash2 } from 'lucide-react';

interface SimpleRichTextEditorProps {
    name: string;
    defaultValue?: string;
    placeholder?: string;
    rows?: number;
}

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('bold') ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
                title="Bold"
            >
                <Bold size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('italic') ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
                title="Italic"
            >
                <Italic size={16} />
            </button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('bulletList') ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
                title="Bullet List"
            >
                <List size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${editor.isActive('orderedList') ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
                title="Ordered List"
            >
                <ListOrdered size={16} />
            </button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <button
                type="button"
                onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all text-slate-500 hover:text-blue-600`}
                title="Insert Table"
            >
                <TableIcon size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().addColumnAfter().run()}
                disabled={!editor.can().addColumnAfter()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${!editor.can().addColumnAfter() ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-slate-500 hover:text-blue-600'}`}
                title="Add Column"
            >
                <Columns size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().addRowAfter().run()}
                disabled={!editor.can().addRowAfter()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${!editor.can().addRowAfter() ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-slate-500 hover:text-blue-600'}`}
                title="Add Row"
            >
                <Rows size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().deleteTable().run()}
                disabled={!editor.can().deleteTable()}
                className={`p-1.5 rounded hover:bg-white hover:shadow-sm transition-all ${!editor.can().deleteTable() ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-slate-500 hover:text-red-500'}`}
                title="Delete Table"
            >
                <Trash2 size={16} />
            </button>
        </div>
    );
};

export default function SimpleRichTextEditor({ name, defaultValue = '', placeholder, rows = 4 }: SimpleRichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
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
        ],
        content: defaultValue,
        editorProps: {
            attributes: {
                class: `prose prose-sm max-w-none focus:outline-none min-h-[${rows * 24}px] p-4 text-gray-700 bg-white rounded-b-lg`,
                placeholder: placeholder || ''
            },
        },
        immediatelyRender: false,
    });

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
            <input type="hidden" name={name} value={editor?.getHTML() || ''} />
        </div>
    );
}
