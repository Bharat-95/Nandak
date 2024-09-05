import React from 'react'
import HeroImage from '../../public/developer.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='flex justify-between mt-10'>
      <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] lg:h-[400px] mg:h-[400px] h-[200px]  lg:mt-24 md:mt-24  space-y-16'>
      <div className='lg:text-3xl md:text-3xl text-xl font-extrabold  leading-10'>UI/UX Design, Website and App development solutions for <a className='text-teal-900'>Business</a>
      <div className='lg:text-lg md:text-lg text-sm font-extralight mt-2 leading-loose'>Nandak Innovations is a software development company that brings your ideas to life.
      We create custom web and mobile applications adapted to your unique growth path. Let's unlock the power of innovations for your business.</div></div>
      
      <div className=''>
        <Link href='/contact' className='bg-teal-900 text-white lg:p-2 md:p-2 p-1 rounded-lg flex items-center justify-center lg:gap-3 md:gap-3 gap-1  lg:w-52 md:w-52 w-44'>GET QUOTE <FaLocationArrow size={14} /></Link>
      </div>
      </div>
      <div className='lg:w-[50%] md:w-[50%] w-0 h-[400px] m-10 rounded-lg  '>
        <Image
        src={HeroImage}
        alt='No Image Found'
        className='rounded-lg shadow-lg' />
      </div>
    </div>
  )
}

export default Hero