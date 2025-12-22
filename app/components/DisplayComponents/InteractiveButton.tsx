import Image from 'next/image'
import { IconPlus } from '@tabler/icons-react';

const InteractiveButton = () => {
    return (
        <div className="cursor-pointer w-fit flex relative items-center justify-center group">
            <div className="absolute inset-0 flex items-center mask-b-from-75% justify-center gap-2 group-active:gap-1 group-active:translate-y-0 group-active:scale-60 scale-0 group-hover:scale-100 group-hover:-translate-y-16 transition-all duration-200 z-9" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.7, 1)" }}>
                <Image className=' object-contain rounded-sm grayscale ring-2 ring-[#82A891] shadow-sm shadow-[#82A891]/30 lg:size-16 size-12' src="/favicon.png" alt="Hero Image" width={100} height={100} />
                <IconPlus />
                <div className="flex items-center justify-center bg-[#f0fdf4] lg:w-16 w-12 lg:h-16 h-12 ring-2 ring-[#82A891] shadow-sm shadow-[#82A891]/30 rounded-sm font-bold tracking-tighter text-lg "> YOU </div>
            </div>
            <div
                className="
                    perspective-near
                    rotate-x-40
                    group
                    group-hover:-translate-y-2
                    border 
                    active:translate-y-5
                    transition-all duration-200 ease-in-out
                    relative font-semibold text-2xl
                    bg-white rounded-full
                    tracking-tight
                    ring-2 border-y-2 mt-6 ring-[#82A891]
                    /* Custom shadow-primary as Tailwind */
                    [box-shadow:0_8px_0px_0_#14532D]
                    hover:[box-shadow:0_16px_0px_0_#14532D]
                    group-active:[box-shadow:0_-4px_0px_0_#14532D]
                "
            >
                <p className="px-6 py-4 ">Get in Touch</p>
            </div>
        </div>
    )
}

export default InteractiveButton