'use client';
import Link from 'next/link';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ComponentPreviewLinkProps {
  href: string;
  children: ReactNode;
  direction: 'prev' | 'next';
}

export default function ComponentPreviewLink({ href, children, direction }: ComponentPreviewLinkProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is fully rendered
    const measureHeight = () => {
      if (previewRef.current) {
        const height = previewRef.current.scrollHeight;
        // h-40 = 160px (10rem * 16px = 160px)
        setIsTall(height > 160);
      }
    };

    // Measure after a short delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(measureHeight);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [children]);

  // Also check on resize
  useEffect(() => {
    if (!previewRef.current) return;
    
    const resizeObserver = new ResizeObserver(() => {
      if (previewRef.current) {
        const height = previewRef.current.scrollHeight;
        setIsTall(height > 160);
      }
    });

    resizeObserver.observe(previewRef.current);
    return () => resizeObserver.disconnect();
  }, [children]);

  const isPrev = direction === 'prev';
  const Icon = isPrev ? IconArrowLeft : IconArrowRight;
  const label = isPrev ? 'Previous Components' : 'Next Components';

  return (
    <Link href={href} className="w-fit flex gap-1 items-center group">
      <div className="flex gap-1 items-center relative">
        <div
          ref={previewRef}
          className={`border absolute w-60 flex items-center justify-center -top-20 -left-10 bg-white rounded-md p-2 blur-lg scale-0 group-hover:scale-100 group-hover:blur-none transition-all duration-300 ${
            isTall 
              ? 'h-fit group-hover:-translate-y-[calc(76%+1rem)]' 
              : 'min-h-40 group-hover:-translate-y-26'
          }`}
        >
          {children}
        </div>

        {isPrev ? (
          <>
            <Icon className='size-4 transition-all duration-200 group-hover:-translate-x-0.5' />
            <p className='tracking-tight font-semibold text-sm '>{label}</p>
          </>
        ) : (
          <>
            <p className='tracking-tight font-semibold text-sm '>{label}</p>
            <Icon className='size-4 transition-all duration-200 group-hover:translate-x-0.5' />
          </>
        )}
      </div>
    </Link>
  );
}

