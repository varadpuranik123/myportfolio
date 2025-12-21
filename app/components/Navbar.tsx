"use client";
import Link from 'next/link'
import { IconLayoutSidebar, IconX } from '@tabler/icons-react'
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Button from './Button';

// Nav links JSON
const navLinks = [
    { name: 'Work', href: '/Work' },
    { name: 'Components', href: '/templete' },
    { name: 'Services', href: '/service' }
];

const Navbar = () => {
    return (
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </>
    )
}

export default Navbar

export const DesktopNavbar = () => {
    return (
        <nav className="lg:flex relative hidden font-sans justify-between items-center py-2 px-3 border-b border-[#82A891] ">
            <Link href="/" className="text-2xl tracking-tighter uppercase font-mono">Varad</Link>
            <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex  items-center gap-4">
                {navLinks.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        className="text-sm tracking-tight opacity-70 hover:opacity-100 transition-all duration-200 font-semibold "
                    >
                        {name}
                    </Link>
                ))}
            </div>
            <Button href='https://drive.google.com/file/d/1MAS_fTZHq872cINWJ88LZCdNPj7FlIzs/view?usp=sharing'>Resume</Button>
        </nav>
    )
}

export const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-between lg:hidden px-4 py-2 border-b border-[#82A891]">
            <Link href="/" className="text-2xl tracking-tighter uppercase font-mono">Varad</Link>
            <button onClick={() => setOpen(!open)} className=''>
                <IconLayoutSidebar className='w-6 h-6' />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, backdropFilter: 'blur(15px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 flex flex-col justify-between bg-background/40 z-50 w-full h-full "
                    >
                        <div className="flex justify-between border-b border-[#82A891] px-[16.7px] py-2">
                            <Link href="/" className="text-2xl tracking-tighter uppercase font-mono">Varad</Link>
                            <button onClick={() => setOpen(false)}  >
                                <IconX className='w-6 h-6' />
                            </button>
                        </div>
                        <div className=" flex flex-col items-center ">
                            {navLinks.map(({ name, href }, idx) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, delay: idx * 0.1 }}


                                    key={name + idx}
                                    className="flex flex-col items-center w-full">
                                    <Link
                                        key={name}
                                        href={href}
                                        className={`text-5xl ${idx === 0 ? 'border-y' : 'border-b'} text-center py-4 uppercase w-full tracking-tight opacity-70 hover:opacity-100 transition-all duration-200 font-bold `}
                                    >
                                        {name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: navLinks.length * 0.1 }}
                        className="">
                            <Button href='https://drive.google.com/file/d/1MAS_fTZHq872cINWJ88LZCdNPj7FlIzs/view?usp=sharing' className="text-4xl w-full py-4 uppercase px-3 rounded-sm bg-white border-transparent ring-1 ring-black/10 shadow-sm shadow-black/10 font-semibold hover:-translate-y-px cursor-pointer tracking-tight transition-all duration-300">Resume</Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}