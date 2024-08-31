import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-auto border-[1px] border-black  lg:px-10 md:px-10 px-2  lg:py-4 md:py-4 py-4 rounded-md flex justify-between '>

     <div className='font-bold lg:text-2xl md:text-2xl text-sm hover:text-orange-500 cursor-pointer'>Nandak innovations</div>
     <div>
        <ul className='flex lg:space-x-20 md:space-x-20 space-x-2 lg:text-md md:text-[14px] text-[10px]'>
            <li><Link href='/' className='hover:text-orange-500' > Home </Link></li>
            <li><Link href='/about' className='hover:text-orange-500'> About </Link></li>
            <li><Link href='/services' className='hover:text-orange-500'> Services </Link></li>
        </ul>
     </div>
       
    </div>
  )
}

export default Header