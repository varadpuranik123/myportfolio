'use client'
import React from 'react'
import Container from '@/app/components/Container'
import Footer from '@/app/components/Footer'
import Heading from '@/app/components/Heading'
import Navbar from '@/app/components/Navbar'
import { Icon12Hours, IconArrowLeft, IconArrowRightToArc } from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'



const secondProject = () => {
  return (
    <Container>
      <Navbar />
      <div className="p-6 w-full min-h-fit border-b border-[#82A891] flex flex-col gap-y-4 font-sans">
        <div className="">
          <Link href='/#work' className="flex items-center gap-2 ">
            <IconArrowLeft className='size-6' />
            <p className="text-sm tracking-tight font-mono font-semibold">Back To Project</p>
          </Link>
        </div>
        <div className=" flex flex-col gap-2 lg:mt-6 md:mt-6 mt-2">
          <Heading className='font-semibold text-foreground/75 text-2xl mb-2'>Minimalist Portfolio</Heading>
          <p className="text-sm tracking-tight font-medium leading-[1.3]">
            Designed and developed a personal portfolio website to showcase selected work, and technical capabilities in a clear and structured way.
          </p>
          <p className="text-sm tracking-tight font-medium leading-[1.3]">
            The project focused on creating a minimal visual language, strong typographic hierarchy, and smooth interactions to ensure the content remains the primary focus. while motion was used selectively to enhance flow and engagement rather than distract.
          </p>
          <p className="text-sm tracking-tight font-medium leading-[1.3]">
            The interface was designed in Figma and implemented using Framer, allowing for rapid iteration, responsive behavior, and polished micro-interactions. The final result is a lightweight, scalable portfolio that communicates both design taste and execution ability.
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          {/* <div className="w-full flex border border-[#82A89133] rounded-lg justify-center mt-6 p-2 hover:scale-150 hover:shadow-2xl shadow-black/50 bg-white transition-all duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}>
          <video
            className=" w-full h-fit rounded-md"
            src="/projectImages/secondprojectvideo.mp4"
            autoPlay={true}
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div> */}
          <div className="border border-[#82A89133] overflow-hidden w-full aspect-video rounded-md flex flex-col hover:scale-130 hover:shadow-2xl shadow-black/50 bg-white transition-all duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}>
            <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio Box */}
              <Image
                src="/projectImages/FPImage.png"
                alt="First Image"
                fill
                className="object-cover rounded-md"
                priority
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://placehold.co/800x450?text=Image+Not+Found";
                }}
                sizes="(max-width: 768px) 100vw, 800px"
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default secondProject