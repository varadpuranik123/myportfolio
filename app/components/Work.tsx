import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { IconBrandGithub, IconWorld, IconBrandFigma, IconArrowUpRight, IconBrandFramer } from '@tabler/icons-react';
import Link from 'next/link';
import Button from './Button';
import { cn } from "@/lib/utils";



const workData = [
  {
    image: "/projectImages/firstProjectImage.png",
    imageAlt: "Hero Image",
    title: "Partner App for Astrologers ",
    links: [
      // {
      //   href: "https://github.com/varadpuranik123",
      //   icon: <IconBrandGithub className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />,
      //   external: true,
      // },
      // {
      //   href: "https://vdpop.vercel.app",
      //   icon: <IconWorld className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />,
      //   external: true,
      // },
    ],
    description: "End-to-end UI/UX design for a consumer-facing astrology platform focused on clarity, trust, and seamless consultation flow.",
    tools: [
      {
        label: "figma",
        icon: <IconBrandFigma className='lg:size-5 size-4' />
      },

    ],
    detailsUrl: "../projects/firstProject"
  },
  // Add more card objects here as needed.
  {
    image: "/projectImages/secondProjectImage.png",
    imageAlt: "Hero Image",
    title: "Minimalist Portfolio",
    links: [
      // {
      //   href: "https://github.com/varadpuranik123",
      //   icon: <IconBrandGithub className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />,
      //   external: true,
      // },
      {
        href: "https://harshal15.framer.website/",
        icon: <IconWorld className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />,
        external: true,
      },
    ],
    description: "Designed and developed a personal portfolio focused on clean visuals, structured layouts, and subtle motion to present work with clarity.",
    tools: [
      {
        label: "figma",
        icon: <IconBrandFigma className='lg:size-5 size-4' />
      },
      {
        label: "Framer",
        icon: <IconBrandFramer className='lg:size-5 size-4' />
      }
    ],
    detailsUrl: "../projects/SecondProject"
  },
];

const WorkCard = ({
  image,
  imageAlt,
  title,
  links,
  description,
  tools,
  detailsUrl,
}: typeof workData[0]) => (
  <div className=" border-transparent hover:scale-98 transition-all duration-200 ring-1 ring-[#82A891]/30 shadow-sm shadow-[#82A891]/10 rounded-xl w-full h-fit pb-3 flex flex-col overflow-hidden">
    <div className="bg-black/10 w-full h-80">
      <Image className=' object-cover w-full h-full' src={image} alt={imageAlt} width={1920} height={1920} />
    </div>
    <div className="pt-4 pb-2 px-4 flex items-center justify-between gap-1 ">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="flex gap-x-2">
        {links.map((link, i) =>
          <Link
            key={i}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.icon}
          </Link>
        )}
      </div>
    </div>
    <div className="pt-1 pb-2 px-4">
      <p className="text-sm font-semibold tracking-tight leading-tight">{description}</p>
    </div>
    <div className="text-sm flex flex-col px-4 mt-2">
      <p className="text-sm font-semibold tracking-tight leading-tight">Tools</p>
      <div className="flex flex-wrap lg:gap-2 gap-1 mt-2">
        {tools.map((tool, idx) => (
          <span
            key={idx}
            className="bg-[#A2CFAE22] text-[#24422f]/80 lg:text-xs flex gap-0.5 items-center text-[10px] font-mono lg:px-1.5 px-0.5 py-1 rounded whitespace-nowrap border border-[#82A89133] uppercase tracking-tight font-semibold"
          >
            {tool.icon} {tool.label}
          </span>
        ))}
      </div>
      <div className=" mt-4 leading-tight flex ">
        <Button href={detailsUrl} className="flex gap-1 w-full justify-center py-1.5 items-center">
          View Details
          <IconArrowUpRight className='size-4 ' />
        </Button>
      </div>
    </div>
  </div>
);


type WorkProps = {
  className?: string;
};

const Work = ({ className }: WorkProps) => {
  return (
    <section id='work' className={cn('w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans pb-6', className)}>
      <Heading className='p-6'>
        Selected Work
      </Heading>
      <div id="workGrid" className=" px-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
        {workData.map((work, idx) => (
          <WorkCard key={idx} {...work} />
        ))}
      </div>
      {/* <div className="w-full border-t border-[#82A891] h-12 mt-4 flex items-center justify-center">
        <Button href='/' className="flex gap-1 justify-center py-1.5 items-center">
          See All Projects
        </Button>
      </div> */}
    </section>
  )
}




export default Work