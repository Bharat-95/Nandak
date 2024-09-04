import React from 'react'
import Image from 'next/image'
import G7cars from '../../public/G7cars.png'
import Scoolify from '../../public/Scoolify.png'
import G7carsApp from '../../public/G7App.jpeg'
import Hostel from '../../public/Hostel.jpeg'
import Link from 'next/link'


const Projects = () => {
  return (
    <div className="py-10 space-y-10">
        <div className="text-4xl font-extrabold underline">Projects</div>
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 p-4 gap-10'>
            <Link href='https://www.g7cars.com' target='_blank'  className='space-y-4  p-4  rounded-lg  lg:border-[1px] md:border-[1px] border-black hover:-translate-y-2 hover:-translate-x-2 duration-200'>
                <Image src={G7cars} alt='No Image Found' className='h-[200px] rounded-lg shadow-lg' />
                <div className=''>Car Rental</div>
                <div className='text-xl font-extrabold'>The website where users will be able to rent cars</div>
                </Link>
                <Link href='https://scoolify.in' target='_blank'   className='space-y-4  p-4  rounded-lg lg:border-[1px] md:border-[1px] border-black hover:-translate-y-2 hover:-translate-x-2 duration-200'>
                <div className='space-y-4'>
                <Image src={Scoolify} alt='No Image Found' className='h-[200px] rounded-lg shadow-lg' />
                <div className=''>Consultancy website</div>
                <div className='text-xl font-extrabold'>This website is about Consultance Services</div>
                </div>
                </Link>
                <Link href='/'  className='space-y-4  p-4  rounded-lg lg:border-[1px] md:border-[1px] border-black hover:-translate-y-2 hover:-translate-x-2 duration-200'>
                <div className='space-y-4'>
                <Image src={G7carsApp} alt='No Image Found' className='h-[200px] rounded-lg shadow-lg' />
                <div className=''>Car Rental App</div>
                <div className='text-xl font-extrabold'>Android and IOS application where users will be able to rent cars.</div>
                </div>
                </Link>
                <Link href='/'  className='space-y-4  p-4  rounded-lg lg:border-[1px] md:border-[1px] border-black hover:-translate-y-2 hover:-translate-x-2 duration-200'>
                <div className='space-y-4'>
                <Image src={Hostel} alt='No Image Found' className='h-[200px] rounded-lg shadow-lg' />
                <div className=''>Hostel Rent App</div>
                <div className='text-xl font-extrabold'>Android and IOS application where hostel owner will be able to track fee payments and data of students.</div>
                </div>
                </Link>
        </div>
    </div>
  )
}

export default Projects