import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import Link from 'next/link';

const Whatsapp = () => {
  return (
     <div className='sticky p-20  '>
        <Link href='https://wa.me/+918331091122' target="_blank" className='absolute right-0  rounded-xl'>
       <FaWhatsappSquare color='green' height={0} width={0} className='h-12 w-12' />
    </Link>
    </div>
  )
}

export default Whatsapp