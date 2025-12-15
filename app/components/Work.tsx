import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { IconBrandGithub, IconWorld, IconBrandFigma, IconArrowUpRight } from '@tabler/icons-react';
import Link from 'next/link';
import Button from './Button';


const workData = [
  {
    image: "/favicon.png",
    imageAlt: "Hero Image",
    title: "Astrology Platform",
    links: [
      {
        href: "https://github.com/varadpuranik123",
        icon: <IconBrandGithub className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />,
        external: true,
      },
      {
        href: "https://vdpop.vercel.app",
        icon: <IconWorld className='lg:size-6 size-5 cursor-pointer opacity-75 hover:opacity-100 transition-all duration-200' />,
        external: true,
      },
    ],
    description: "End-to-end UI/UX design for a consumer-facing astrology platform focused on clarity, trust, and seamless consultation flow.",
    tools: [
      {
        label: "figma",
        icon: <IconBrandFigma className='lg:size-5 size-4' />
      },
      {
        label: "figma",
        icon: <IconBrandFigma className='lg:size-5 size-4' />
      }
    ],
    detailsUrl: "/"
  },
  // Add more card objects here as needed.
  
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
      <Image className=' object-cover rounded-sm grayscale w-full h-full' src={image} alt={imageAlt} width={100} height={100} />
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

const Work = () => {
  return (
    <section className='w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans'>
      <Heading className='p-6'>
        Selected Work
      </Heading>
      <div id="workGrid" className=" px-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 w-full h-full">
        {workData.map((work, idx) => (
          <WorkCard key={idx} {...work} />
        ))}
      </div>
      <div className="w-full border-t border-[#82A891] h-12 mt-4 flex items-center justify-center">
      <Button href='/' className="flex gap-1 justify-center py-1.5 items-center">
          See All Projects
        </Button>
      </div>
    </section>
  )
}


     

export default Work