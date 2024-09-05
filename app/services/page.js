import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className=' '>
      <div className='font-bold text-2xl mt-20 flex justify-center'>Our Services</div>
      <div className='border-[1px] border-black p-10 rounded-lg lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 my-20 gap-10 lg:space-y-0 md:space-y-0 space-y-4'> 
        <div className='bg-gray-300 p-10 rounded-lg space-y-2 hover:translate-x-2 hover:-translate-y-2 duration-200'>
          <div className='flex justify-center text-lg font-bold underline'>Web Developing</div>
          <div>Our web development services focus on creating responsive, user-friendly, and visually appealing websites that drive results. From concept to launch, we build custom websites tailored to your business needs, ensuring seamless navigation, fast load times, and compatibility across all devices. </div>
        </div>
        <div className='bg-gray-300 p-10 rounded-lg space-y-2 hover:translate-x-2 hover:-translate-y-2 duration-200'>
          <div className='flex justify-center text-lg font-bold underline'>App Development</div>
          <div>Our app development services bring your ideas to life with custom, high-performance mobile applications. We specialize in creating apps for both iOS and Android platforms, ensuring a seamless user experience across all devices.</div>
        </div>
        <div className='bg-gray-300 p-10 rounded-lg space-y-2 hover:translate-x-2 hover:-translate-y-2 duration-200'>
          <div className='flex justify-center text-lg font-bold underline'>Web Design</div>
          <div>Our web design services prioritize creating visually stunning and user-centric websites that captivate and engage your audience. We combine aesthetics with functionality, ensuring your website not only looks professional but also delivers an intuitive and seamless user experience.</div>
        </div>
      </div>
      <div className='flex justify-center mb-10'>
      <Link href='/contact' className='bg-teal-900 text-white lg:p-3 md:p-3 p-1 rounded-lg flex items-center justify-center lg:gap-3 md:gap-3 gap-1  lg:w-52 md:w-52 w-44'>GET QUOTE </Link>
      </div>
     
    </div>
  )
}

export default page