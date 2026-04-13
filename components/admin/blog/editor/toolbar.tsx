import React from 'react';
import { Editor } from '@tiptap/react';
import {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    List,
    ListOrdered,
    Image as ImageIcon,
    Link as LinkIcon,
    Quote,
    Heading1,
    Heading2,
    Heading3,
    Type
} from 'lucide-react';

interface ToolbarProps {
    editor: Editor | null;
}

export default function Toolbar({ editor }: ToolbarProps) {
    if (!editor) {
        return null;
    }

    const addImage = () => {
        const url = window.prompt('URL');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        // cancelled
        if (url === null) {
            return;
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    return (
        <div className="flex items-center gap-2 mb-8 p-2 bg-gray-50 rounded-xl w-fit border border-gray-100 flex-wrap">
            {/* Text Style */}
            <div className="flex items-center gap-1 px-2 border-r border-gray-200">
                 <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Heading 1"
                >
                    <Heading1 size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Heading 2"
                >
                    <Heading2 size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Heading 3"
                >
                    <Heading3 size={16} />
                </button>
                 <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('paragraph') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Paragraph"
                >
                    <Type size={16} />
                </button>
            </div>

            {/* Formatting */}
            <div className="flex items-center gap-1 px-2 border-r border-gray-200">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('bold') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Bold"
                >
                    <Bold size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('italic') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Italic"
                >
                    <Italic size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('underline') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Underline"
                >
                    <Underline size={16} />
                </button>
                 <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('strike') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Strikethrough"
                >
                    <Strikethrough size={16} />
                </button>
            </div>

             {/* Alignment */}
            <div className="flex items-center gap-1 px-2 border-r border-gray-200">
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Align Left"
                >
                    <AlignLeft size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Align Center"
                >
                    <AlignCenter size={16} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Align Right"
                >
                    <AlignRight size={16} />
                </button>
                 <button
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'justify' }) ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Justify"
                >
                    <AlignJustify size={16} />
                </button>
            </div>

            {/* Lists & Extras */}
            <div className="flex items-center gap-1 px-2">
                 <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('bulletList') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Bullet List"
                >
                    <List size={16} />
                </button>
                 <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('orderedList') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Ordered List"
                >
                    <ListOrdered size={16} />
                </button>
                 <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('blockquote') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Blockquote"
                >
                    <Quote size={16} />
                </button>
                <button
                    onClick={setLink}
                    className={`p-1.5 rounded-lg transition-colors ${editor.isActive('link') ? 'bg-white text-primary shadow-sm' : 'text-gray-600 hover:bg-white'}`}
                    title="Link"
                >
                    <LinkIcon size={16} />
                </button>
                <button
                    onClick={addImage}
                    className="p-1.5 hover:bg-white rounded-lg text-gray-600 transition-colors"
                    title="Image"
                >
                    <ImageIcon size={16} />
                </button>
            </div>
        </div>
    );
}
