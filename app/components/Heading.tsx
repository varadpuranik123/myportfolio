import React from 'react'
import { cn } from '@/lib/utils'

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <div className={cn('text-xl tracking-tighter text-foreground font-mono', className)}>
      {children}
    </div>
  );
};

export default Heading;