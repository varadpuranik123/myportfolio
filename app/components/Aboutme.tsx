import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { IconBrandFramer, IconBrandFigma, IconBrandReact, IconBrandNextjs, IconBrandTailwind, IconFileTypeJs, IconFileTypeTs } from '@tabler/icons-react';

// Map iconName (string) to the actual imported component
const ICONS: Record<string, React.ElementType> = {
    IconBrandFramer, IconBrandFigma, IconBrandReact, IconBrandNextjs, IconBrandTailwind, IconFileTypeJs, IconFileTypeTs
};

const Aboutme = () => {
    const logos = [
        {
            logoName: "Framer",
            iconName: "IconBrandFramer"
        },
        {
            logoName: "Figma",
            iconName: "IconBrandFigma"
        },
        {
            logoName: "React",
            iconName: "IconBrandReact"
        },
        {
            logoName: "NextJS",
            iconName: "IconBrandNextjs"
        },
        {
            logoName: "TailwindCSS",
            iconName: "IconBrandTailwind"
        },
        {
            logoName: "Javascript",
            iconName: "IconFileTypeJs"
        },
        {
            logoName: "Typescript",
            iconName: "IconFileTypeTs"
        },
    ];

    return (
        <section className='w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans pb-6'>
            <Heading className='p-6'>
                About
            </Heading>

            <div className="flex lg:flex-row md:flex-row flex-col item-center gap-x-4 w-full lg:h-64 md:h-64 px-6">
                <div id="hero-image" className=" border-4 lg:w-64 md:w-64 lg:h-64 w-full h-full border-[#82A891] bg-[#82A891] rounded-lg overflow-hidden">
                    <Image className=' object-cover rounded-sm object-top grayscale w-full h-full aspect-square' src="/favicon.png" alt="Hero Image" width={100} height={100} />
                </div>
                <div className="flex flex-col justify-between lg:py-1 md:py-1 py-6 items-start gap-y-6 lg:gap-y-0 ">
                    <div className="flex flex-col gap-1 max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-tight ">Varad Puranik</h1>
                        <p className="text-sm text-foreground/75 font-semibold tracking-tight leading-[1.3] ">
                            I'm a UI/UX Designer and Frontend Developer who focuses on creating tasteful interfaces.
                            I enjoy working across design and development because it allows me to maintain intent from concept to implementation, ensuring that what's designed is exactly what ships.
                        </p>
                    </div>
                    <div className="text-sm tracking-tight font-semibold flex flex-col gap-y-2">
                        <p className="font-mono uppercase">Tools & Technologies</p>
                        <div className="flex gap-2 items-center">

                            {logos.map((logo, idx) => {
                                const IconComponent = ICONS[logo.iconName];
                                return (
                                    <div key={idx} className="flex group justify-center w-fit relative">
                                        {IconComponent && <IconComponent className='cursor-pointer' />}
                                        <p className="absolute -z-1 group-hover:z-9 group-hover:scale-100 scale-0 group-hover:-translate-y-9 transition-all duration-200 ease-in-out shadow-sm shadow-[#82A891]/10 ring-1 ring-[#82A891] p-1 rounded-sm font-semibold bg-white">
                                            {logo.logoName}
                                        </p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Aboutme