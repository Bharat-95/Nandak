import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Projects from './components/Projects'
import Whatsapp from './components/Whatsapp'

const page = () => {
  return (
    <div className='lg:space-y-10 md:space-y-10 space-y-2'>
      <Hero />
      <Services />
      <Work />
      <Projects />
      <Whatsapp />
    </div>
  )
}

export default page