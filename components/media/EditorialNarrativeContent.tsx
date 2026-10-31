'use client';

import React from 'react';

interface EditorialNarrativeContentProps {
  content?: string;
  fallbackSummary?: string;
  className?: string;
}

/**
 * Formats editorial narrative content:
 * - If content contains HTML tags (e.g. from the rich text editor), returns as-is.
 * - If content is plain text (legacy entries), wraps paragraphs in <p> and converts newlines to <br/>.
 */
export function formatEditorialToHtml(content?: string, fallbackSummary?: string): string {
  if (!content || !content.trim()) {
    return fallbackSummary ? `<p>${fallbackSummary}</p>` : '';
  }

  // Check if content contains HTML tags (e.g. <p>, <ul>, <strong>, <h2>, etc.)
  const hasHtml = /<\/?([a-z][a-z0-9]*)\b[^>]*>/i.test(content);

  if (hasHtml) {
    return content;
  }

  // Legacy plain text formatting
  return content
    .split(/\n\n+/)
    .map((paragraph) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return '';
      return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`;
    })
    .filter(Boolean)
    .join('');
}

export function EditorialNarrativeContent({
  content,
  fallbackSummary,
  className = '',
}: EditorialNarrativeContentProps) {
  const html = formatEditorialToHtml(content, fallbackSummary);

  if (!html) return null;

  return (
    <div
      className={`editorial-narrative-render space-y-6 font-sans font-light text-base sm:text-xl text-white/80 leading-relaxed
        [&_p]:leading-relaxed [&_p]:mb-6
        [&_h2]:font-clash [&_h2]:text-2xl [&_h2]:sm:text-4xl [&_h2]:font-normal [&_h2]:text-white [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4
        [&_h3]:font-clash [&_h3]:text-xl [&_h3]:sm:text-3xl [&_h3]:font-normal [&_h3]:text-white [&_h3]:tracking-tight [&_h3]:mt-10 [&_h3]:mb-3
        [&_h4]:font-sans [&_h4]:text-lg [&_h4]:sm:text-2xl [&_h4]:font-medium [&_h4]:text-white [&_h4]:mt-8 [&_h4]:mb-2
        [&_ul]:list-disc [&_ul]:pl-7 [&_ul]:my-6 [&_ul]:space-y-3 [&_ul]:marker:text-[#00A9CE]
        [&_ol]:list-decimal [&_ol]:pl-7 [&_ol]:my-6 [&_ol]:space-y-3 [&_ol]:marker:text-[#00A9CE]
        [&_li]:leading-relaxed [&_li]:pl-1.5
        [&_strong]:font-semibold [&_strong]:text-white
        [&_b]:font-semibold [&_b]:text-white
        [&_em]:italic [&_em]:text-white/95
        [&_i]:italic [&_i]:text-white/95
        [&_u]:underline [&_u]:underline-offset-4 [&_u]:decoration-white/40
        [&_s]:line-through [&_s]:text-white/40
        [&_blockquote]:border-l-2 [&_blockquote]:border-[#00A9CE] [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-white/95 [&_blockquote]:bg-white/[0.03] [&_blockquote]:rounded-r-lg
        [&_a]:text-[#00A9CE] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#38bdf8] [&_a]:transition-colors
        [&_code]:font-mono [&_code]:text-xs [&_code]:sm:text-sm [&_code]:bg-white/10 [&_code]:text-[#00A9CE] [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded
        [&_hr]:border-white/15 [&_hr]:my-10
        ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
