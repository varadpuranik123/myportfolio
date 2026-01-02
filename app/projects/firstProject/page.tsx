import Container from '@/app/components/Container'
import Footer from '@/app/components/Footer'
import Heading from '@/app/components/Heading'
import Navbar from '@/app/components/Navbar'
import { Icon12Hours, IconArrowLeft, IconArrowRightToArc } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

const firstProject = () => {


  const projectImages = [
    {
      name: "Login Screens",
      image: "/projectImages/template proj 1.png",
      number: "01/10"
    },
    {
      name: "Dashboard Screens",
      image: "/projectImages/template proj 2.png",
      number: "02/10"
    },
    {
      name: "Appointment Screens",
      image: "/projectImages/template proj 3.png",
      number: "03/10"
    },
    {
      name: "Instant Consultation Screens",
      image: "/projectImages/template proj 4.png",
      number: "04/10"
    },
    {
      name: "Meeting Screens",
      image: "/projectImages/template proj 5.png",
      number: "05/10"
    },
    {
      name: "Meeting Screens",
      image: "/projectImages/template proj 6.png",
      number: "06/10"
    },
    {
      name: "In meeting Chat and Chart Screens",
      image: "/projectImages/template proj 7.png",
      number: "07/10"
    },
    {
      name: "Chat Screens",
      image: "/projectImages/template proj 8.png",
      number: "08/10"
    },
    {
      name: "Set Availability Screens",
      image: "/projectImages/template proj 9.png",
      number: "09/10"
    },
    {
      name: "Set Availability Screens",
      image: "/projectImages/template proj 10.png",
      number: "10/10"
    }
  ];


  return (
    <section className="">
      <Container>
        <Navbar />
        <div className=" w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans">
          <div className="">
            <Link href='/#work' className="flex p-6 items-center gap-2 border-b border-[#82A891] ">
              <IconArrowLeft className='size-6' />
              <p className="text-sm tracking-tight font-mono font-semibold">Back To Project</p>
            </Link>
          </div>
          <div className=" flex flex-col  ">
            <div className="gap-2 flex flex-col p-6 ">
              <Heading>Partner App for Astrologers</Heading>
              <p className="text-sm tracking-tight font-medium leading-[1.3]">
                Designed and developed a consumer-facing astrology platform focused on  clarity, trust,<br /> and seamless consultation flow.
              </p>
              <p className="text-sm tracking-tight font-medium leading-[1.3]">
                The project focused on creating a minimal visual language, strong typographic hierarchy, and smooth interactions to ensure the content remains the primary focus.               The interface was designed in Figma              .
              </p>
            </div>
            <div className=" border-t border-[#82A891] pt-8">
              {projectImages.map((img, idx) => (
                <div key={idx} className="mb-8 last:mb-0 last:border-b-0 border-b border-[#82A891] ">
                  <div className="px-6">
                    <Image
                      src={img.image}
                      alt={img.name}
                      className="w-full lg:rounded-2xl rounded-xl border-transparent ring-1 ring-[#82A891]/5 shadow-sm shadow-black/10 object-contain"
                      width={1080}
                      height={1080}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-4 px-6 pb-6">
                    <p className="font-semibold tracking-tight lg:text-base text-sm">{img.name}</p>
                    <span className="text-xs opacity-70 tracking-tight font-semibold font-mono">{img.number}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </section>
  )
}

export default firstProject