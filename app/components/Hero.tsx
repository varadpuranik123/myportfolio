"use client";
import React from 'react'
import { Variants, motion } from 'motion/react';
import Image from 'next/image';
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconPaperclip } from '@tabler/icons-react';
import Link from 'next/link';
import Button from './Button';

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

const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-start lg:h-[558px] h-fit border-b border-[#82A891] overflow-hidden">
      <div id="hero-banner" className="relative z-10 w-full border-b border-[#82A891] ">
      <DottedGlowBg />
        <div className="w-full lg:h-64 h-42 flex items-center font-bold text-foreground/75 text-center justify-center font-mono lg:text-3xl text-xl tracking-tight capitalize mask-radial-from-10% ">
          Crafting clean interfaces,<br /> &amp; meaningful motion
        </div>
      </div>

      <div id="hero-image" className=" absolute lg:left-6 left-3 lg:top-[40%] top-[28%] z-40 border-4 border-[#82A891] bg-[#82A891] rounded-md overflow-hidden">
        <Image className=' object-cover rounded-sm grayscale lg:size-24 size-22' src="/favicon.png" alt="Hero Image" width={100} height={100} />
      </div>

      <div id="hero-name" className="mt-20 lg:px-6 px-3 flex w-full justify-between items-end">
        <div className="flex flex-col items-start justify-end">
            <p className="lg:text-4xl text-2xl font-mono tracking-tighter uppercase">Varad Puranik</p>
            <p className="lg:text-base md:text-base text-[10px] leading-tight text-foreground/75 tracking-tight -mt-0.5 font-semibold">UI/UX Designer • Frontend Developer</p>
        </div>
        <div className="flex lg:gap-4 gap-2 ">
            <Link href="https://github.com/varadpuranik123" target="_blank" rel="noopener noreferrer">
              <IconBrandGithub className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />
            </Link>
            <Link href="https://x.com/VaradPuran71532" target="_blank" rel="noopener noreferrer">
              <IconBrandX className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />
            </Link>
            <Link href="https://www.linkedin.com/in/vdpop/" target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />
            </Link>
            <Link href="https://drive.google.com/file/d/1MAS_fTZHq872cINWJ88LZCdNPj7FlIzs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <IconPaperclip className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />
            </Link>
        </div>
      </div>
      <div className=" lg:px-6 px-3 mt-4 w-full leading-tight">
        <h3 className="lg:text-lg text-base tracking-tight font-semibold capitalize ">I design first, then engineer them into reality.</h3>
        <p className="lg:text-base text-sm tracking-tight font-medium capitalize ">I approach every project by solving the design problem first structure, clarity, motion, and user intent then translate those decisions into scalable code</p>
      </div>
      <div id="hero-button" className=" flex lg:flex-row flex-col justify-between w-full lg:items-center items-start gap-2 lg:px-6 px-3 my-4 lg:my-0 lg:mt-4 gap-y-4">
        <div className="">
            <Button href="Work" className='lg:text-base text-sm capitalize px-4 py-1'>View Work</Button>
            <Link href="templete" className='lg:text-base font-semibold tracking-tight hover:opacity-75 transition-all duration-200 text-sm capitalize px-4 py-1 bg- ring-0 shadow-none border-none'>Explore Components</Link>   
        </div>
        <div className="flex items-start gap-2 pl-2 w-fit h-6 overflow-hidden mask-t-from-75% mask-b-from-75%">
            <div className="w-2 h-2 mt-1.5  bg-foreground rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-foreground animate-ping rounded-full"></div>
            </div>
          <motion.div
            initial={{
              y: 0
            }}
            animate={{
              y: [0, 0, -20, -20, -40],
              transition: {
                repeat: Infinity,
                duration: 2,
              }
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              y: { duration: 1 }
            }}
            className=" ">
            <p className="text-sm tracking-tight font-semibold capitalize">
              Open to full-time
            </p>
            <p className="text-sm tracking-tight font-semibold capitalize">
              Open to freelance
            </p>
            <p className="text-sm tracking-tight font-semibold capitalize">
              Open to full-time
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero