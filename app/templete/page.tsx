import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { DottedGlowBg } from '../components/Animation/DottedGlowBg'
import Link from 'next/link';
import { getComponentsData } from '../lib/componentsData';
import { IconArrowRight } from '@tabler/icons-react'



export default async function TemplateIndex() {
    const componentsData = await getComponentsData();


    return (
        <Container className='min-h-fit'>
            <Navbar />
            {/* <Heading className='text-3xl animate-bounce flex justify-center items-center w-full min-h-fit border-2'>Under Construction Going to launch soon</Heading> */}

            <section className=' w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans'>
                <div className="border-b border-[#82A891] relative">
                    <DottedGlowBg />
                    <Heading className='w-full lg:h-64 h-42 flex items-center font-bold text-foreground/75 text-center justify-center font-mono lg:text-3xl text-xl tracking-tight capitalize mask-radial-from-10%'>Reusable UI Components<br /> & Interactions</Heading>
                </div>
                <div className=" flex flex-col ">
                    {componentsData.filter(item => item.slug).map((item) => (
                        <Link key={item.slug} href={`/templete/${item.slug}`} className='border-b last:border-b-0 p-6 border-[#82A891] hover:bg-[#82A891]/10 transition-all duration-200 flex flex-row-reverse justify-between' >
                            <div className=" bg-white w-1/2 h-60 rounded-md flex items-center justify-center transition-all duration-200 ring-1 ring-[#82A891]/30 ">
                                <item.component />
                            </div>
                            <div  className=' w-1/3 h-60 flex flex-col justify-between '>
                                <div className="">
                                    <h2 className="text-xl tracking-tight font-semibold mt-2">{item.name}</h2>
                                    <p className="text-sm tracking-tight font-medium">{item.description}</p>
                                </div>
                                <div className=" w-full group">
                                    <div className='text-sm tracking-tight flex items-center gap-1 font-semibold'>
                                        View Details <IconArrowRight className='size-4 group-hover:translate-x-0.5 transition-all duration-200 ' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}



                </div>
            </section>
            <Footer />
        </Container>
    )
}
