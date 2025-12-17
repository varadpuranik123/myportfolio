import React from 'react'
import { cn } from '@/lib/utils'

const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn(
      "border-[#82A891] w-full relative max-w-3xl min-h-screen border-x mx-auto flex flex-col",
      className
    )}>
        {children}
    </div>
  )
}

export default Container