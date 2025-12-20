import React from 'react'
import Link from 'next/link';
import { getComponentsData } from '../../lib/componentsData';
import Container from '@/app/components/Container';
import Navbar from '@/app/components/Navbar';
import { DottedGlowBg } from '@/app/components/Animation/DottedGlowBg';
import Heading from '@/app/components/Heading';
import Footer from '@/app/components/Footer';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export default async function SingleTemplate({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const componentsData = await getComponentsData();
  const index = componentsData.findIndex(p => p.slug === slug);
  const item = componentsData[index];

  if (!item) return <div className="">
    <Container className='min-h-fit'>
      <Navbar />
      <section className=' w-full h-screen font-semibold tracking-tight text-4xl text-foreground/75 items-center justify-center  border-b border-[#82A891] flex flex-col font-mono'>
        Component Not Found
      </section>
      <Footer />
    </Container>
  </div>;


  const prev = componentsData[index - 1];
  const next = componentsData[index + 1];
  const ComponentToRender = item.component;


  return (
    <Container className='min-h-fit'>
      <Navbar />
      <section className=' w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans'>
        <div className="w-full p-6 flex items-center justify-between">
          <Link href="/templete" className="w-fit flex gap-1 items-center group">
            <div className="flex gap-1 items-center">
              <IconArrowLeft className='size-4 transition-all duration-200 group-hover:-translate-x-0.5' />
              <p className='tracking-tight font-semibold text-sm '>Back to Components</p>
            </div>
          </Link>
          <div className="flex items-center gap-2.5">
            {prev ? <Link href={`/templete/${prev.slug}`} className="group relative flex">
              <IconArrowLeft className='bg-white p-1 ring-1 ring-[#82A891]/30 shadow-sm shadow-[#82A891]/10 rounded-md hover:bg-[#82a891]/1 transition-all duration-200 ease-in-out ' />
              <p className="absolute -top-0.5 -left-16 whitespace-nowrap -z-1 group-hover:z-9 group-hover:scale-100 scale-0 group-hover:-translate-y-8.5 transition-all duration-200 ease-in-out shadow-sm shadow-[#82A891]/10 ring-1 ring-[#82A891] px-2 py-1 rounded-sm font-medium text-sm flex items-center justify-center w-fit gap-2 bg-white">
                <p className=" tracking-tight">Previous Components</p>
              </p>
            </Link> : <div />}

            {next ? <Link href={`/templete/${next.slug}`} className="group relative flex">
              <IconArrowRight className='bg-white p-1 ring-1 ring-[#82A891]/30 shadow-sm shadow-[#82A891]/10 rounded-md hover:bg-[#82a891]/1 transition-all duration-200 ease-in-out ' />
              <p className="absolute -top-0.5 -left-14 whitespace-nowrap -z-1 group-hover:z-9 group-hover:scale-100 scale-0 group-hover:-translate-y-8.5 transition-all duration-200 ease-in-out shadow-sm shadow-[#82A891]/10 ring-1 ring-[#82A891] px-2 py-1 rounded-sm font-medium text-sm flex items-center justify-center w-fit gap-2 bg-white">
                <p className=" tracking-tight">Next Components</p>
              </p>
            </Link> : <div />}
          </div>
        </div>

      </section>
      <Footer />
    </Container>
  )
}
