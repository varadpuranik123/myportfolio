import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { DottedGlowBg } from '../components/Animation/DottedGlowBg'
import Link from 'next/link';
import { getComponentsData } from '../lib/componentsData';



export default async function TemplateIndex () {
    const componentsData = await getComponentsData();


    return (
        <Container className='min-h-fit'>
            <Navbar />
            <Heading className='text-3xl animate-bounce flex justify-center items-center w-full min-h-fit border-2'>Under Construction Going to launch soon</Heading>

            <section className=' w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans'>
                <div className="border-b border-[#82A891] relative">
                    <DottedGlowBg />
                    <Heading className='w-full lg:h-64 h-42 flex items-center font-bold text-foreground/75 text-center justify-center font-mono lg:text-3xl text-xl tracking-tight capitalize mask-radial-from-10%'>Reusable UI Components<br /> & Interactions</Heading>
                </div>
                <div className=" grid lg:grid-cols-2 grid-cols-1 ">
                        {componentsData.map((item) => (
                            <div key={item.slug}  className='border-b last:border-b-0 odd:border-r p-6 border-[#82A891] hover:bg-[#82A891]/10 transition-all duration-200 flex flex-col' >
                                <div className=" bg-white w-full h-44 rounded-md flex items-center justify-center transition-all duration-200 ring-1 ring-[#82A891]/30 ">
                                    <item.component />
                                </div>
                                <Link href={`/templete/${item.slug}`}>
                                    <h2 className="text-xl tracking-tight font-semibold mt-2">{item.name}</h2>
                                    <p className="text-sm tracking-tight font-medium">{item.description}</p>
                                </Link>    
                            </div>
                        ))}
                        
                        
                        
                    </div>
            </section>
            <Footer />
        </Container>
    )
}
