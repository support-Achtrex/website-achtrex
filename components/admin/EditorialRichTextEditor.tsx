'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Heading4,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link as LinkIcon,
  Unlink,
  Code,
  Minus,
  Undo,
  Redo,
  RemoveFormatting,
  Eye,
  Code2,
  Edit3,
  HelpCircle,
  Sparkles,
  Check
} from 'lucide-react';
import { EditorialNarrativeContent } from '@/components/media/EditorialNarrativeContent';

interface EditorialRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

function normalizeIncomingContent(content?: string): string {
  if (!content || !content.trim()) return '';
  const hasHtml = /<\/?([a-z][a-z0-9]*)\b[^>]*>/i.test(content);
  if (hasHtml) return content;
  return content
    .split(/\n\n+/)
    .map((p) => `<p>${p.trim().replace(/\n/g, '<br />')}</p>`)
    .filter(Boolean)
    .join('');
}

export default function EditorialRichTextEditor({
  value,
  onChange,
  placeholder = 'Write the complete editorial narrative here. Use bold, bullets, headings, and quotes to structure your article...',
  minHeight = '360px',
}: EditorialRichTextEditorProps) {
  const [activeView, setActiveView] = useState<'editor' | 'source' | 'preview'>('editor');
  const initialContent = normalizeIncomingContent(value);
  const [sourceCode, setSourceCode] = useState(initialContent);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const isUpdatingRef = useRef(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#00A9CE] underline underline-offset-2 hover:text-[#38bdf8] transition-colors',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: initialContent,
    immediatelyRender: false,
    onUpdate: ({ editor: ed }) => {
      if (isUpdatingRef.current) return;
      const html = ed.getHTML();
      // If editor only has an empty paragraph, normalize to empty string if needed
      const normalized = html === '<p></p>' ? '' : html;
      setSourceCode(normalized);
      onChange(normalized);
    },
    editorProps: {
      attributes: {
        class: 'editorial-prosemirror-body focus:outline-none p-5 sm:p-6 text-slate-800 text-sm sm:text-base leading-relaxed',
      },
    },
  });

  // Sync external value changes (e.g. switching between articles or resetting form)
  useEffect(() => {
    if (!editor) return;

    const currentHtml = editor.getHTML();
    const cleanCurrent = currentHtml === '<p></p>' ? '' : currentHtml;
    const cleanIncoming = normalizeIncomingContent(value);

    if (cleanIncoming !== cleanCurrent) {
      isUpdatingRef.current = true;
      editor.commands.setContent(cleanIncoming);
      setSourceCode(cleanIncoming);
      isUpdatingRef.current = false;
    }
  }, [value, editor]);

  // Handle manual source code changes
  const handleSourceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setSourceCode(newCode);
    onChange(newCode);
    if (editor) {
      isUpdatingRef.current = true;
      editor.commands.setContent(newCode);
      isUpdatingRef.current = false;
    }
  };

  // Link actions
  const openLinkDialog = () => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href || '';
    setLinkUrl(previousUrl);
    setLinkModalOpen(true);
  };

  const applyLink = () => {
    if (!editor) return;
    if (linkUrl === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      const formatted = linkUrl.startsWith('http') || linkUrl.startsWith('/') ? linkUrl : `https://${linkUrl}`;
      editor.chain().focus().extendMarkRange('link').setLink({ href: formatted }).run();
    }
    setLinkModalOpen(false);
    setLinkUrl('');
  };

  // Quick helper template insertions
  const insertQuickTemplate = (type: 'heading' | 'bullets' | 'quote' | 'callout') => {
    if (!editor) return;
    editor.chain().focus();

    if (type === 'heading') {
      editor.commands.insertContent('<h2>Key Strategic Milestone</h2><p>Provide narrative context regarding this breakthrough or release phase...</p>');
    } else if (type === 'bullets') {
      editor.commands.insertContent('<ul><li>High-fidelity execution across spatial environments</li><li>Sub-millimeter calibrated telemetry response</li><li>Unmatched endurance and operational efficiency</li></ul><p></p>');
    } else if (type === 'quote') {
      editor.commands.insertContent('<blockquote>“This deployment represents a quantum leap in spatial engineering and mission readiness.”</blockquote><p></p>');
    } else if (type === 'callout') {
      editor.commands.insertContent('<p><strong>Executive Note:</strong> Verified specifications have completed official engineering validation.</p>');
    }
  };

  // Calculate statistics
  const wordCount = (value || '').replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  const charCount = (value || '').replace(/<[^>]+>/g, '').length;

  return (
    <div className="border border-slate-200 rounded-2xl bg-white shadow-xs overflow-hidden transition-all focus-within:border-[#1a365d] focus-within:ring-2 focus-within:ring-[#1a365d]/10">
      {/* Top Header & View Tabs */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-2.5 gap-2">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveView('editor')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'editor'
                ? 'bg-white text-[#1a365d] shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Edit3 size={14} />
            <span>Visual Editor</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('source')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'source'
                ? 'bg-white text-[#1a365d] shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Code2 size={14} />
            <span>HTML Source</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('preview')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'preview'
                ? 'bg-[#1a365d] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Eye size={14} />
            <span>Tesla Dark Preview</span>
          </button>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
          <span>{wordCount} words</span>
          <span>&bull;</span>
          <span>{charCount} characters</span>
        </div>
      </div>

      {/* Visual Editor Toolbar */}
      {activeView === 'editor' && editor && (
        <div className="border-b border-slate-200 bg-white p-2 flex flex-wrap items-center gap-1">
          {/* Text Style / Block selector */}
          <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().setParagraph().run()}
              className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                editor.isActive('paragraph') && !editor.isActive('heading') && !editor.isActive('blockquote')
                  ? 'bg-slate-100 text-[#1a365d] font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Normal Paragraph"
            >
              Paragraph
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('heading', { level: 2 })
                  ? 'bg-blue-50 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Heading 2 (Large Section)"
            >
              <Heading2 size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('heading', { level: 3 })
                  ? 'bg-blue-50 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Heading 3 (Subsection)"
            >
              <Heading3 size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('heading', { level: 4 })
                  ? 'bg-blue-50 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Heading 4 (Minor Title)"
            >
              <Heading4 size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('blockquote')
                  ? 'bg-blue-50 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Executive Blockquote"
            >
              <Quote size={16} />
            </button>
          </div>

          {/* Inline Styles (Bold, Italic, Underline, Strike, Code) */}
          <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('bold')
                  ? 'bg-blue-100 text-[#1a365d] font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Bold (Ctrl+B)"
            >
              <Bold size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('italic')
                  ? 'bg-blue-100 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Italic (Ctrl+I)"
            >
              <Italic size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('underline')
                  ? 'bg-blue-100 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Underline (Ctrl+U)"
            >
              <UnderlineIcon size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('strike')
                  ? 'bg-blue-100 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Strikethrough"
            >
              <Strikethrough size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('code')
                  ? 'bg-blue-100 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Inline Code"
            >
              <Code size={16} />
            </button>
          </div>

          {/* Bulleted and Numbered Lists */}
          <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('bulletList')
                  ? 'bg-blue-100 text-[#1a365d] font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Bullet List"
            >
              <List size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('orderedList')
                  ? 'bg-blue-100 text-[#1a365d] font-bold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Numbered List"
            >
              <ListOrdered size={16} />
            </button>
          </div>

          {/* Alignment */}
          <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive({ textAlign: 'left' })
                  ? 'bg-slate-200 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Align Left"
            >
              <AlignLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive({ textAlign: 'center' })
                  ? 'bg-slate-200 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Align Center"
            >
              <AlignCenter size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive({ textAlign: 'right' })
                  ? 'bg-slate-200 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Align Right"
            >
              <AlignRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive({ textAlign: 'justify' })
                  ? 'bg-slate-200 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Justify Text"
            >
              <AlignJustify size={16} />
            </button>
          </div>

          {/* Links and Divider */}
          <div className="flex items-center gap-0.5 border-r border-slate-200 pr-2 mr-1">
            <button
              type="button"
              onClick={openLinkDialog}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                editor.isActive('link')
                  ? 'bg-blue-100 text-[#1a365d]'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Add or Edit Link"
            >
              <LinkIcon size={16} />
            </button>
            {editor.isActive('link') && (
              <button
                type="button"
                onClick={() => editor.chain().focus().unsetLink().run()}
                className="p-1.5 rounded-md text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                title="Remove Link"
              >
                <Unlink size={16} />
              </button>
            )}
            <button
              type="button"
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              className="p-1.5 rounded-md text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Insert Horizontal Divider"
            >
              <Minus size={16} />
            </button>
          </div>

          {/* Clear Formatting, Undo & Redo */}
          <div className="flex items-center gap-0.5 ml-auto">
            <button
              type="button"
              onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Clear Formatting"
            >
              <RemoveFormatting size={16} />
            </button>
            <div className="w-px h-4 bg-slate-200 mx-1" />
            <button
              type="button"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Undo (Ctrl+Z)"
            >
              <Undo size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Redo (Ctrl+Y)"
            >
              <Redo size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Quick Insert Template Chips */}
      {activeView === 'editor' && (
        <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-slate-50 border-b border-slate-100 text-[11px]">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Sparkles size={12} className="text-[#00A9CE]" />
            Quick Insert:
          </span>
          <button
            type="button"
            onClick={() => insertQuickTemplate('heading')}
            className="px-2.5 py-1 rounded bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-[#1a365d] transition-colors cursor-pointer"
          >
            + Section Heading
          </button>
          <button
            type="button"
            onClick={() => insertQuickTemplate('bullets')}
            className="px-2.5 py-1 rounded bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-[#1a365d] transition-colors cursor-pointer"
          >
            + Bullet List
          </button>
          <button
            type="button"
            onClick={() => insertQuickTemplate('quote')}
            className="px-2.5 py-1 rounded bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-[#1a365d] transition-colors cursor-pointer"
          >
            + Executive Quote
          </button>
          <button
            type="button"
            onClick={() => insertQuickTemplate('callout')}
            className="px-2.5 py-1 rounded bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-[#1a365d] transition-colors cursor-pointer"
          >
            + Bold Callout
          </button>
        </div>
      )}

      {/* Editor Main Content Area */}
      {activeView === 'editor' && (
        <div
          className="editorial-editor-content relative bg-white cursor-text"
          style={{ minHeight }}
          onClick={() => editor?.commands.focus()}
        >
          <EditorContent editor={editor} />
        </div>
      )}

      {/* Raw HTML Source Area */}
      {activeView === 'source' && (
        <div className="p-4 bg-slate-900 text-slate-100">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs text-slate-400">
            <span>Direct HTML Source Code Editor</span>
            <span>Edits sync live to the visual editor &amp; website</span>
          </div>
          <textarea
            value={sourceCode}
            onChange={handleSourceChange}
            rows={14}
            className="w-full font-mono text-xs sm:text-sm bg-slate-950 text-emerald-400 p-4 rounded-xl border border-slate-800 focus:outline-none focus:border-[#00A9CE] leading-relaxed resize-y"
            placeholder="<p>Write or paste your custom HTML here...</p>"
          />
        </div>
      )}

      {/* Live Tesla Dark Preview */}
      {activeView === 'preview' && (
        <div className="p-8 sm:p-12 bg-black text-white rounded-b-2xl border-t border-white/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00A9CE] block mb-1">
                  Website Simulation
                </span>
                <h4 className="font-clash text-lg text-white font-normal">
                  Live Editorial Rendering on Dark Background
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/10 text-white/80">
                Tesla Article Layout
              </span>
            </div>

            {value && value.trim() ? (
              <EditorialNarrativeContent content={value} />
            ) : (
              <div className="py-12 text-center text-white/40 text-sm font-light border border-dashed border-white/15 rounded-xl">
                The editorial narrative is currently empty. Type or format text in the Visual Editor tab to see it previewed here.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Link Dialog Modal */}
      {linkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <LinkIcon size={16} className="text-[#00A9CE]" />
                Insert or Edit Link
              </h4>
              <button
                type="button"
                onClick={() => setLinkModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm"
              >
                &times;
              </button>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Target URL
              </label>
              <input
                type="text"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://example.com or /case-studies"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a365d]"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    applyLink();
                  }
                }}
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setLinkModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={applyLink}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1a365d] hover:bg-[#152a48] rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Check size={14} />
                <span>Apply Link</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Explicit prose-mirror styling overrides for bulleting, numbering, bold, etc. */}
      <style jsx global>{`
        .editorial-editor-content .ProseMirror {
          min-height: 280px;
          outline: none !important;
        }
        .editorial-editor-content .ProseMirror ul {
          list-style-type: disc !important;
          padding-left: 1.75rem !important;
          margin-top: 0.75rem !important;
          margin-bottom: 0.75rem !important;
        }
        .editorial-editor-content .ProseMirror ol {
          list-style-type: decimal !important;
          padding-left: 1.75rem !important;
          margin-top: 0.75rem !important;
          margin-bottom: 0.75rem !important;
        }
        .editorial-editor-content .ProseMirror li {
          display: list-item !important;
          margin-top: 0.35rem !important;
          margin-bottom: 0.35rem !important;
          line-height: 1.6 !important;
        }
        .editorial-editor-content .ProseMirror p {
          margin-top: 0.6rem !important;
          margin-bottom: 0.6rem !important;
          line-height: 1.7 !important;
        }
        .editorial-editor-content .ProseMirror strong,
        .editorial-editor-content .ProseMirror b {
          font-weight: 700 !important;
          color: #0f172a !important;
        }
        .editorial-editor-content .ProseMirror em,
        .editorial-editor-content .ProseMirror i {
          font-style: italic !important;
        }
        .editorial-editor-content .ProseMirror u {
          text-decoration: underline !important;
          text-underline-offset: 3px !important;
        }
        .editorial-editor-content .ProseMirror s {
          text-decoration: line-through !important;
          color: #94a3b8 !important;
        }
        .editorial-editor-content .ProseMirror h2 {
          font-size: 1.45rem !important;
          font-weight: 700 !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.5rem !important;
          color: #0f172a !important;
          line-height: 1.3 !important;
        }
        .editorial-editor-content .ProseMirror h3 {
          font-size: 1.25rem !important;
          font-weight: 600 !important;
          margin-top: 1.25rem !important;
          margin-bottom: 0.5rem !important;
          color: #1e293b !important;
          line-height: 1.35 !important;
        }
        .editorial-editor-content .ProseMirror h4 {
          font-size: 1.1rem !important;
          font-weight: 600 !important;
          margin-top: 1rem !important;
          margin-bottom: 0.35rem !important;
          color: #334155 !important;
        }
        .editorial-editor-content .ProseMirror blockquote {
          border-left: 3px solid #00A9CE !important;
          padding-left: 1.25rem !important;
          padding-top: 0.5rem !important;
          padding-bottom: 0.5rem !important;
          margin-top: 1rem !important;
          margin-bottom: 1rem !important;
          font-style: italic !important;
          color: #475569 !important;
          background: #f8fafc !important;
          border-radius: 0 0.5rem 0.5rem 0 !important;
        }
        .editorial-editor-content .ProseMirror hr {
          border-color: #e2e8f0 !important;
          margin-top: 1.5rem !important;
          margin-bottom: 1.5rem !important;
        }
        .editorial-editor-content .ProseMirror a {
          color: #00A9CE !important;
          text-decoration: underline !important;
          text-underline-offset: 2px !important;
        }
        .editorial-editor-content .ProseMirror code {
          background-color: #f1f5f9 !important;
          color: #0284c7 !important;
          padding: 0.15rem 0.35rem !important;
          border-radius: 0.25rem !important;
          font-family: monospace !important;
          font-size: 0.85em !important;
        }
        .editorial-editor-content .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #94a3b8;
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  );
}
