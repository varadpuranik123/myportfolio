import React from 'react'
import Work from '../components/Work'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const workPage = () => {
  return (
    <section className='w-full min-h-fit'>
        <Container className=' min-h-fit'>
            <Navbar />
            <Work className='' />
            <Footer />
        </Container>
    </section>
  )
}

export default workPage