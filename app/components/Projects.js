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
    <div className="lg:block hidden px-20">
        <div className="text-[#1C923F] flex justify-center text-[30px] font-semibold">Previous Projects</div>
        <div className='text-[12px] flex justify-center py-[10px] text-center'>We focus on ergonomics and meeting you where you work. <br/>
        It's only a keystroke away.</div>
        <div className='flex justify-center gap-[20px] pt-[44px]'>
          <Link href='http://kaivalyamevents.com/' target='_blank' ><div className='w-[420px] h-[285px] overflow-hidden hover:translate-x-1 hover:-translate-y-1 duration-700'>
            <Image
            src= '/Kaivalyam.png'
            alt='No Image Found'
             width={100}
            height={100}
            className='shadow-md  rounded-lg h-full w-full' 
            unoptimized={true}/>
          </div>
          </Link>

          <Link href='https://www.qgroupmedia.com/' target='_blank'>
          <div className='w-[420px] h-[285px] overflow-hidden hover:translate-x-1 hover:-translate-y-1 duration-700'>
            <Image
            src= '/Qnews.png'
            alt='No Image Found'
            className='shadow-md  rounded-lg h-full w-full'
            width={100}
            height={100}
            unoptimized={true} />
          </div>
          </Link>

          <Link href='/https://www.obsvector.com/' target='_blank'></Link>

          <div className='w-[420px] h-[285px] overflow-hidden hover:translate-x-1 hover:-translate-y-1 duration-700'>
            <Image
            src='/Obsvector.png'
            alt='No Image Found'
            className='shadow-md  rounded-lg h-full w-full' 
             width={100}
            height={100}
            unoptimized={true}/>
          </div>
        </div>

        <div className='flex gap-[20px] pt-[40px]'>
        
        <Link href='https://www.kisancircle.com/' target='_blank'>
        
        <div className='w-[420px] h-[285px] overflow-hidden hover:translate-x-1 hover:-translate-y-1 duration-700'>
            <Image
            src='/KisanCircle.png'
            alt='No Image Found'
            className='shadow-md  rounded-lg h-full w-full' 
             width={100}
            height={100}
            unoptimized={true}/>
          </div>

          </Link>

          <Link href='https://www.pmconventions.com/'>

          <div className='w-[420px] h-[285px] overflow-hidden hover:translate-x-1 hover:-translate-y-1 duration-700'>
            <Image
            src='/Pm.png'
            alt='No Image Found'
            className='shadow-md  rounded-lg h-full w-full' 
             width={100}
            height={100}
            unoptimized={true}/>
          </div>

          </Link>

          <Link href='https://www.g7cars.in/' target='_blank'>


           <div className='w-[420px] h-[285px] overflow-hidden hover:translate-x-1 hover:-translate-y-1 duration-700'>
            <Image
            src='/G7cars.png'
            alt='No Image Found'
            className='shadow-md  rounded-lg h-full w-full' 
             width={100}
            height={100}
            unoptimized={true}/>
          </div>
          </Link>
        </div>
        
    </div>
  )
}

export default Projects