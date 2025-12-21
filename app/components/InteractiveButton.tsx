import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconPlus } from '@tabler/icons-react';

const InteractiveButton = () => {
    return (
        <div className=" w-fit flex relative items-center justify-center group">
            <div className="absolute inset-0 flex items-center mask-b-from-75% justify-center gap-2 group-active:gap-1 group-active:translate-y-0 group-active:scale-60 scale-0 group-hover:scale-100 group-hover:-translate-y-16 transition-all duration-200 ease-in-out z-9">
                <Image className=' object-contain rounded-sm grayscale ring-2 ring-[#82A891] shadow-sm shadow-[#82A891]/30 lg:size-16 size-12' src="/favicon.png" alt="Hero Image" width={100} height={100} />
                <IconPlus />
                <div className="flex items-center justify-center bg-[#f0fdf4] w-16 h-16 ring-2 ring-[#82A891] shadow-sm shadow-[#82A891]/30 rounded-sm font-bold tracking-tighter text-lg "> YOU </div>
            </div>
            <Link href='' className='perspective-near rotate-x-40 shadow-primary group hover:-translate-y-2 border active:translate-y-5 transition-all duration-200 ease-in-out relative font-semibold text-2xl bg-white rounded-full tracking-tight ring-2 border-y-2 mt-6 ring-[#82A891] '>

                <p className="px-6 py-4 ">Get in Touch</p>
                {/* <div className=" border-b-4 absolute inset-0 rounded-full translate-y-4 active:translate-y-0 group-hover:translate-y-[27px] shadow-2xl "> </div> */}
            </Link>
        </div>
    )
}

export default InteractiveButton