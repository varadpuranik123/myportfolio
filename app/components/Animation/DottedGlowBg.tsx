'use client'

import { Variants, motion } from 'motion/react';


export const dotVariants = {
    initial: { opacity: 0 },
    animate: (i: number) => ({
      opacity: [0.2, 0.6, 0.9],
      transition: {
        duration: 2,
        delay: i * 0.07,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  }
  
  export const DottedGlowBg: React.FC = () => {
    // Set grid size
    const cols = 42
    const rows = 12
    const dotsArr = Array.from({ length: rows * cols })
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden z-0 flex items-center justify-center"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            gap: 1,
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          {dotsArr.map((_, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={dotVariants as Variants}
              initial="initial"
              animate="animate"
              className="rounded-full "
              style={{
                width: 2,
                height: 2,
                margin: "auto",
                background: "radial-gradient(circle, rgba(162,207,174,0.65) 48%, rgba(130,168,145,.08) 90%, transparent 100%)",
                boxShadow: "0 0 8px 2px #82A89155, 0 0 18px 8px #A2CFAE33"
              }}
            />
          ))}
        </div>
      </div>
    )
  }