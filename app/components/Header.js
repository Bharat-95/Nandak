import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.png'

const Header = () => {
  return (
    <div className='h-auto border-[1px] border-black  lg:px-10 md:px-10 px-2  lg:py-4 md:py-4 py-4 rounded-md flex justify-between '>

     <div>
      <Image 
      src={Logo}
      className='lg:h-20 lg:w-44 md:h-20 md:w-44 h-8 w-20'/>

     </div>
     <div className='flex items-center'>
        <ul className='flex lg:space-x-20 md:space-x-20 space-x-2 lg:text-md md:text-[14px] text-[10px]'>
            <li><Link href='/' className='hover:text-teal-900' > Home </Link></li>
            <li><Link href='/about' className='hover:text-teal-900'> About </Link></li>
            <li><Link href='/services' className='hover:text-teal-900'> Services </Link></li>
        </ul>
     </div>
       
    </div>
  )
}

export default Header