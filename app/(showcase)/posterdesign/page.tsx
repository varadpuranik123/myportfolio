import Container from "@/app/components/Container"
import Footer from "@/app/components/Footer"
import Heading from "@/app/components/Heading"
import Navbar from "@/app/components/Navbar"
import Link from "next/link"



const PosterDesign = () => {
  return (
    <section className="">
      <Container>
        <Navbar />
        <div className="p-6 w-full min-h-fit border-b border-[#82A891] flex flex-col gap-y-4 font-sans">
          
          <div className=" flex flex-col gap-2">
            <Heading className='font-semibold text-foreground/75 text-2xl'>Coming Soon</Heading>
          </div>
        </div>
        <Footer />
      </Container>
    </section>
  )
}

export default PosterDesign