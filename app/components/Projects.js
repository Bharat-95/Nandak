import React from 'react'
import Image from 'next/image'
import G7cars from '../../public/G7cars.png'
import Scoolify from '../../public/Scoolify.png'
import G7carsApp from '../../public/G7App.jpeg'
import G7Admin from '../../public/G7Admin.jpeg'
import Hostel from '../../public/Hostel.jpeg'
import Asquare from '../../public/Asquare.png'
import Link from 'next/link'


const Projects = () => {
  return (
    <div className="lg:block hidden px-[199px]">
        <div className="text-[#1C923F] flex justify-center text-[30px] font-semibold">Previous Projects</div>
        <div className='text-[12px] flex justify-center py-[10px] text-center'>We focus on ergonomics and meeting you where you work. <br/>
        It's only a keystroke away.</div>
        <div className='flex justify-center gap-[33px] pt-[44px]'>
          <div className='w-[225px] h-[285px] overflow-hidden'>
            <Image
            src={G7Admin}
            alt='No Image Found'
            className='shadow-md  rounded-lg' 
            unoptimized={true}/>
          </div>

          <div className='w-[225px] h-[285px] overflow-hidden'>
            <Image
            src={G7carsApp}
            alt='No Image Found'
            className='shadow-md  rounded-lg'
            unoptimized={true} />
          </div>

          <div className='w-[225px] h-[285px] overflow-hidden'>
            <Image
            src={Hostel}
            alt='No Image Found'
            className='shadow-md  rounded-lg' 
            unoptimized={true}/>
          </div>
        </div>

        <div className='flex gap-[31px] pt-[44px]'>
        <div className='w-[395px] h-[285px] overflow-hidden'>
            <Image
            src={Asquare}
            alt='No Image Found'
            className='shadow-md  rounded-lg' 
            unoptimized={true}/>
          </div>

          <div className='w-[395px] h-[285px] overflow-hidden'>
            <Image
            src={Scoolify}
            alt='No Image Found'
            className='shadow-md  rounded-lg '
            unoptimized={true} />
          </div>


          <div className='w-[395px] h-[285px] overflow-hidden'>
            <Image
            src={G7cars}
            alt='No Image Found'
            className='shadow-md  rounded-lg '
            unoptimized={true} />
          </div>

        </div>
        
    </div>
  )
}

export default Projects