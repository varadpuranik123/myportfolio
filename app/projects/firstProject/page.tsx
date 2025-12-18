import Container from '@/app/components/Container'
import Footer from '@/app/components/Footer'
import Heading from '@/app/components/Heading'
import Navbar from '@/app/components/Navbar'
import { Icon12Hours, IconArrowLeft, IconArrowRightToArc } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const firstProject = () => {
  return (
    <section className="">
      <Container>
        <Navbar />
        <div className="p-6 w-full min-h-fit border-b border-[#82A891] flex flex-col gap-y-4 font-sans">
          <div className="">
            <Link href='/#work' className="flex items-center gap-2 ">
              <IconArrowLeft className='size-6' />
              <p className="text-sm tracking-tight font-mono font-semibold">Back To Project</p>
            </Link>
          </div>
          <div className=" flex flex-col gap-2">
            <Heading className='font-semibold text-foreground/75 text-2xl'>Coming Soon</Heading>
          </div>
        </div>
        <Footer />
      </Container>
    </section>
  )
}

export default firstProject