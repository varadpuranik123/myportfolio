import React from 'react'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import { DottedGlowBg } from '../components/Hero'
import Footer from '../components/Footer'

const servicePage = () => {
  return (
    <section className="">
      <Container className=''>
        <Navbar />
        <div className=" w-full min-h-fit border-b border-[#82A891] flex flex-col gap-y-4 font-sans">
          <div className=" flex flex-col gap-2 border-b border-[#82A891] relative">
            <DottedGlowBg />
            <Heading className='w-full lg:h-64 h-42 flex items-center font-bold text-foreground/75 text-center justify-center font-mono lg:text-3xl text-xl tracking-tight capitalize mask-radial-from-10%'>Coming Soon</Heading>
          </div>
        </div>
        <Footer />
      </Container>
    </section>
  )
}

export default servicePage