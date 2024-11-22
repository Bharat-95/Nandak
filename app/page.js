import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Projects from './components/Projects'
import Whatsapp from './components/Whatsapp'
import Technologies from './components/Technologies'
import Contact from './components/Contact'

const page = () => {
  return (
   
    <div className='space-y-[64px] bg-[#ffffff] w-scren shadow-lg'>
      <Hero />
      <Services />
      <Work />
      <Projects />
      <Technologies />
      <Contact />
     
    </div>
  )
}

export default page