import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({ className = "", children, href, ...props }) => {
  return (
    <Link
      target='_blank'
      rel="noopener noreferrer"
      href={href ? href : "/"}
      className={cn(
        "text-sm px-3 py-0.5 rounded-sm bg-white border-transparent ring-1 ring-black/10 shadow-sm shadow-black/10 font-semibold hover:-translate-y-px cursor-pointer tracking-tight transition-all duration-300",
        className
      )}
      {...props}
    >
      {children ? children : "button"}
    </Link>
  );
};

export default Button;