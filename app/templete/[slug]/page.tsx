import React from 'react'
import Link from 'next/link';
import { getComponentsData } from '../../lib/componentsData';
import Container from '@/app/components/Container';
import Navbar from '@/app/components/Navbar';
import { DottedGlowBg } from '@/app/components/Animation/DottedGlowBg';
import Heading from '@/app/components/Heading';
import Footer from '@/app/components/Footer';

export default async function SingleTemplate() {
  return (
    <Container className='min-h-fit'>
      <Navbar />
      <section className=' w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans'>
        

      </section>
      <Footer />
    </Container>
  )
}
