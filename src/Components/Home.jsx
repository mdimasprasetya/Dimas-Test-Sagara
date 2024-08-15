import React from 'react'
import NavbarHome from './NavbarHome'
import Banner from './Banner'
import AboutUs from './AboutUs'
import WhySagara from './WhySagara'
import HowSagara from './HowSagara'
import Empower from './Empower'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='flex flex-row justify-center w-full'>
      <div className='w-[100%] h-[776px] [background:white]'>
      <NavbarHome />
      <Banner />
      <AboutUs />
      <WhySagara />
      <HowSagara />
      <Empower />
      <Footer />
      </div>
    </div>
  )
}

export default Home