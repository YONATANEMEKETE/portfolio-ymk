import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
}) => {
  return (
    <div className={cn('text-muted-foreground', className)}>
      <ReactMarkdown
        components={{
          // Paragraphs
          p: ({ children }) => (
            <p className="leading-relaxed mb-3 last:mb-0">{children}</p>
          ),
          // Strong/Bold text
          strong: ({ children }) => (
            <strong className="font-semibold text-forground/95 underline cursor-pointer">
              {children}
            </strong>
          ),
          // Emphasis/Italic text
          em: ({ children }) => <em className="italic">{children}</em>,
          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          // Unordered lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 mb-3">{children}</ul>
          ),
          // Ordered lists
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 mb-3">
              {children}
            </ol>
          ),
          // List items
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          // Inline code
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-muted text-foreground font-mono text-sm">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
