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
    <div className="flex items-center gap-2 mb-8 p-2 bg-transparent rounded-xl w-fit border border-slate-200 flex-wrap">
      {/* Text Style */}
      <div className="flex items-center gap-1 px-2 border-r border-slate-200">
         <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Heading 1"
        >
          <Heading1 size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Heading 2"
        >
          <Heading2 size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Heading 3"
        >
          <Heading3 size={16} />
        </button>
         <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('paragraph') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Paragraph"
        >
          <Type size={16} />
        </button>
      </div>

      {/* Formatting */}
      <div className="flex items-center gap-1 px-2 border-r border-slate-200">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('bold') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Bold"
        >
          <Bold size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('italic') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Italic"
        >
          <Italic size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('underline') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Underline"
        >
          <Underline size={16} />
        </button>
         <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('strike') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Strikethrough"
        >
          <Strikethrough size={16} />
        </button>
      </div>

       {/* Alignment */}
      <div className="flex items-center gap-1 px-2 border-r border-slate-200">
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Align Center"
        >
          <AlignCenter size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Align Right"
        >
          <AlignRight size={16} />
        </button>
         <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive({ textAlign: 'justify' }) ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Justify"
        >
          <AlignJustify size={16} />
        </button>
      </div>

      {/* Lists & Extras */}
      <div className="flex items-center gap-1 px-2">
         <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('bulletList') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Bullet List"
        >
          <List size={16} />
        </button>
         <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('orderedList') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Ordered List"
        >
          <ListOrdered size={16} />
        </button>
         <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1.5 rounded-lg transition-colors ${editor.isActive('blockquote') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Blockquote"
        >
          <Quote size={16} />
        </button>
        <button
          onClick={setLink}
          className={`p-1.5 rounded-full transition-colors ${editor.isActive('link') ? 'bg-transparent text-primary shadow-sm' : 'text-slate-500 hover:bg-transparent'}`}
          title="Link"
        >
          <LinkIcon size={16} />
        </button>
        <button
          onClick={addImage}
          className="p-1.5 hover:bg-transparent rounded-full text-slate-500 transition-colors"
          title="Image"
        >
          <ImageIcon size={16} />
        </button>
      </div>
    </div>
  );
}
