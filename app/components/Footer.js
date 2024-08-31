import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-between lg:p-10 md:p-10 p-2 border-[1px] border-black rounded-md'>
      <div>
        <div className='lg:text-md md:text-[14px] text-[8px]'>Reach Us On :</div>
        
      </div>
      <div className='lg:text-md md:text-[14px] text-[8px]'>&copy; Nandak innovation Private Limited</div>

      <ul className='lg:space-y-4 md:space-y-4 space-y-2 lg:text-md md:text-[14px] text-[8px]'>
        <li className='font-bold '>Services</li>
        <li className='hover:text-orange-500'><Link href='/'>Web Development</Link></li>
        <li className='hover:text-orange-500'><Link href='/'>UI/UX Design</Link></li>
        <li className='hover:text-orange-500'><Link href='/'>App Development</Link></li>
      </ul>

      <ul className='space-y-4 lg:text-md md:text-[14px] text-[8px]'>
        <li className='font-bold'>Contact Us</li>
        <li className='hover:text-orange-500'><Link href='/'>Gmail</Link></li>
      </ul>

    </div>
  )
}

export default Footer