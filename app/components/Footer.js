import React from 'react'
import Link from 'next/link'
import { FaWhatsappSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between lg:p-6 md:p-10 p-2 border-[1px] border-black rounded-md'>
      <div>
        <div className='lg:text-md md:text-[14px] text-[8px]'>Reach Us On :
          <ul className='space-y-2 mt-4'>
            <li className='hover:text-teal-900 cursor-pointer'>bharat.nanavattula@nandak.co</li>
            <li className='hover:text-teal-900 cursor-pointer'>sairam.akula@nandak.co</li>
            <li className='flex gap-2'>
             <Link href='https://www.linkedin.com/company/nandak-innovations-private-limited/about/?viewAsMember=true' target='_blank'><ImLinkedin className='text-blue-500 w-6 h-6 hover:opacity-80 ' /></Link>
            <RiInstagramFill className='text-pink-500 w-6 h-6 hover:opacity-80 ' />
            <FaFacebookSquare className='text-blue-600 w-6 h-6 hover:opacity-80 ' />
            </li>
          </ul>
        </div>
        
      </div>
      <div className='lg:text-md md:text-[14px] text-[8px]'>&copy; Nandak innovation Private Limited
        <ul className='mt-4 space-y-2 '>
          <li><Link href='/terms' className='hover:text-teal-900'>Terms and conditions</Link></li>
          <li><Link href='/contact' className='hover:text-teal-900'>Help and Support</Link></li>
        </ul>
      </div>

      <ul className='lg:space-y-4 md:space-y-4 space-y-2 lg:text-md md:text-[14px] text-[8px]'>
        <li className='font-bold '>Services</li>
        <li className='hover:text-teal-900'><Link href='/'>Web Development</Link></li>
        <li className='hover:text-teal-900'><Link href='/'>UI/UX Design</Link></li>
        <li className='hover:text-teal-900'><Link href='/'>App Development</Link></li>
      </ul>

    </div>
  )
}

export default Footer