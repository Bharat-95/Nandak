import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.png'

const Header = () => {
  return (
    <div className='h-auto  bg-white  lg:px-10 md:px-10 px-2  lg:py-4 md:py-4 py-4 flex justify-between rounded-t-md shadow-lg'>

     <div>
      <Image 
      src={Logo}
      alt='No Logo Found'
      className='lg:h-20 lg:w-44 md:h-20 md:w-44 h-8 w-20'
      unoptimized={true}/>

     </div>
     <div className='flex items-center text-black'>
        <ul className='flex lg:space-x-10 md:space-x-10 space-x-2 lg:text-md md:text-[14px] text-[10px]'>
            <li><Link href='/' className='hover:text-[#1D3816] hover:font-semibold' > Home </Link></li>
          
            <li><Link href='/services' className='hover:text-[#1D3816] hover:font-semibold'> Services </Link></li>
            <li><Link href='/about' className='hover:text-[#1D3816] hover:font-semibold'> About Us</Link></li>
        </ul>
     </div>
       
    </div>
  )
}

export default Header