'use client';

import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IconCopy, IconCheck } from '@tabler/icons-react';


interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={handleCopy}
        className="absolute cursor-pointer top-4 right-4 z-10 p-1.5 bg-white ring-1 ring-[#82A891]/30 shadow-sm shadow-[#82A891]/10 rounded-md hover:bg-[#82a891]/10 transition-all duration-200 ease-in-out "
        aria-label="Copy code"
      >
        {copied ? (
          <IconCheck className="size-4 text-[#82A891]" />
        ) : (
          <IconCopy className="size-4 text-foreground/70" />
        )}
      </button>
      <pre className="p-2 ring-1 ring-[#82A891]/30 styleScroll shadow-sm shadow-[#82A891]/10 overflow-auto h-100 rounded-md bg-white">
        <SyntaxHighlighter className="" language={language} style={xcode}>
          {code}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
}
