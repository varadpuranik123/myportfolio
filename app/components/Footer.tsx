"use client";
import Link from 'next/link'
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconPaperclip } from '@tabler/icons-react';
import { motion } from 'motion/react';



const Footer = () => {


    const links = [
        { label: "Work", href: "/" },
        { label: "Components", href: "/" },
        { label: "Services", href: "/" },
        { label: "Blog", href: "/" },
        { label: "Contact", href: "/" },
    ]

    return (
        <section className='w-full min-h-[50vh] border-b border-[#82A891] flex flex-col font-sans lg:py-8 md:py-8 py-4 justify-between '>
            <div className="w-full flex flex-col justify-between items-start p-6 ">
                <div className="flex flex-col items-start justify-end">
                    <p className="lg:text-2xl text-base font-mono tracking-tighter font-medium uppercase">Varad Puranik</p>
                    <p className="lg:text-sm text-xs leading-tight text-foreground/75 tracking-tight -mt-0.5 font-semibold">UI/UX Designer • Frontend Developer</p>
                    <div className="flex lg:gap-4 gap-2 mt-4 flex-row-reverse">
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
                <div className="flex w-full items-center lg:gap-6 md:gap-6 gap-3 mt-16  ">
                    <h3 className="text-lg tracking-tight font-semibold">Links</h3>
                    {links.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            className="text-sm tracking-tight font-semibold flex flex-col gap-1 opacity-75 hover:opacity-100 transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="border-y border-[#82A891] flex items-center justify-between px-6 py-3">
                <p className="lg:text-sm text-xs lg:max-w-full md:max-w-full max-w-32 font-semibold tracking-tight">© 2025 Varad Puranik. All rights reserved.</p>
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

export default Footer