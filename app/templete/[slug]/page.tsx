import Link from 'next/link';
import { getComponentsData } from '../../lib/componentsData';
import Container from '@/app/components/Container';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { IconArrowLeft, IconArrowRight, IconCode, IconList } from '@tabler/icons-react';
import CodeBlock from '@/app/components/CodeBlock';

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
  const PrevComponentToRender = prev?.component;
  const NextComponentToRender = next?.component;


  return (
    <Container className='min-h-fit'>
      <Navbar />
      <section className=' w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans '>
        <div className="w-full p-6 flex items-center justify-between border-b border-[#82A891]">
          <Link href="/templete" className="w-fit flex gap-1 items-center group">
            <div className="flex gap-1 items-center">
              <IconArrowLeft className='size-4 transition-all duration-200 group-hover:-translate-x-0.5' />
              <p className='tracking-tight font-semibold text-sm '>Back to Components</p>
            </div>
          </Link>
          <div className="flex items-center gap-2.5">
            {prev ? <Link href={`/templete/${prev.slug}`} className="group relative flex">
              <IconArrowLeft className='bg-white p-1 ring-1 ring-[#82A891]/30 shadow-sm shadow-[#82A891]/10 rounded-md hover:bg-[#82a891]/1 transition-all duration-200 ease-in-out ' />
              <div className="absolute -top-0.5 -left-16 whitespace-nowrap blur-lg group-hover:blur-none -z-1 group-hover:z-9 group-hover:scale-100 scale-0 group-hover:-translate-y-8.5 transition-all duration-300 ease-in-out shadow-sm shadow-[#82A891]/10 ring-1 ring-[#82A891] px-2 py-1 rounded-sm font-medium text-sm flex items-center justify-center w-fit gap-2 bg-white">
                <p className=" tracking-tight font-semibold">Previous Components</p>
              </div>
            </Link> : <div />}

            {next ? <Link href={`/templete/${next.slug}`} className="group relative flex">
              <IconArrowRight className='bg-white p-1 ring-1 ring-[#82A891]/30 shadow-sm shadow-[#82A891]/10 rounded-md hover:bg-[#82a891]/1 transition-all duration-200 ease-in-out ' />
              <div className="absolute -top-0.5 -left-14 whitespace-nowrap blur-lg group-hover:blur-none -z-1 group-hover:z-9 group-hover:scale-100 scale-0 group-hover:-translate-y-8.5 transition-all duration-300 ease-in-out shadow-sm shadow-[#82A891]/10 ring-1 ring-[#82A891] px-2 py-1 rounded-sm font-medium text-sm flex items-center justify-center w-fit gap-2 bg-white">
                <p className=" tracking-tight font-semibold">Next Components</p>
              </div>
            </Link> : <div />}
          </div>
        </div>
        <div className="w-full flex flex-col gap-0.5 px-6 py-4 pt-6">
          <h1 className="text-2xl tracking-tighter font-semibold font-mono text-foreground/75 ">{item.name}</h1>
          <p className="text-sm tracking-tight font-medium leading-[1.3]">{item.description}</p>
        </div>
        <div className="w-full px-6 py-2">
          <div className="flex flex-col items-center justify-center p-1 ring-1 ring-[#82A891]/30 shadow-sm shadow-[#82A891]/10 rounded-md bg-white min-h-90 border-transparent">
            <ComponentToRender />
          </div>
        </div>
        <div className="p-6 flex flex-col gap-2">
          <div className="flex items-center gap-0.5">
            <IconCode className='p-0.5 ' />
            <h3 className="text-base tracking-tight font-semibold">Usage Code</h3>
          </div>
          <p className="lg:text-sm text-xs gap-1 font-medium mb-2 lg:-mt-1">Create the file first <code className=" bg-foreground/15 font-semibold py-0.5 px-1 rounded-md">{item.fileLocation}</code> and put the code below </p>
          <CodeBlock code={item.usageCode} language="javascript" />
        </div>
        <div className="flex flex-col p-6 gap-2">
          <div className="flex items-center gap-0.5">
            <IconList className='p-0.5 ' />
            <h3 className="text-base tracking-tight font-semibold">Features</h3>
          </div>
          <ul className='list-disc text-sm tracking-tight font-medium pl-6 text-foreground/90 space-y-1 mt-2'>
            {item.features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
        </div>
        <div className="flex items-center p-6 justify-between border-t mt-4 border-[#82A891]">
          {prev ? <Link href={`/templete/${prev.slug}`} className="w-fit flex gap-1 items-center group">
            <div className="flex gap-1 items-center relative">

              <div className=" border absolute w-60 h-40 flex items-center justify-center -top-20 -left-10 bg-white rounded-md p-2 blur-lg scale-0 group-hover:scale-100 group-hover:blur-none group-hover:-translate-y-26 transition-all duration-300">
                <PrevComponentToRender />
              </div>

              <IconArrowLeft className='size-4 transition-all duration-200 group-hover:-translate-x-0.5' />
              <p className='tracking-tight font-semibold text-sm '>Previous Components</p>
            </div>
          </Link> : <div />}
          {next ? <Link href={`/templete/${next.slug}`} className="w-fit flex gap-1 items-center group">
            <div className="flex gap-1 items-center relative">

              <div className=" border absolute w-60 h-40 flex items-center justify-center -top-20 -left-10 bg-white rounded-md p-2 blur-lg scale-0 group-hover:scale-100 group-hover:blur-none group-hover:-translate-y-26 transition-all duration-300">
                <NextComponentToRender />
              </div>

              <p className='tracking-tight font-semibold text-sm '>Next Components</p>
              <IconArrowRight className='size-4 transition-all duration-200 group-hover:translate-x-0.5' />
            </div>
          </Link> : <div />}
        </div>
      </section>
      <Footer />
    </Container>
  )
}
