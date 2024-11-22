import React from 'react'
import Next from '../../public/next-js.svg'
import Apple from '../../public/Apple.png';
import Android from '../../public/Android.png';
import Apiary from '../../public/Apiary.png';
import Image from 'next/image';

const Technologies = () => {
  return (
    <div>
         <div className="text-[#1C923F] flex justify-center text-[30px] font-semibold">Technologies</div>
         <div className='text-[12px] flex justify-center py-[10px] text-center'>Powered by cutting-edge technologies, frameworks, and tools to <br /> build scalable and innovative solutions for your business.</div>
         <div className='flex lg:gap-[74px] md:gap-[50px] gap-[20px]  mt-[50px] justify-center '>
            <div className='h-[60px] w-[60px] overflow-hidden'>
            <Image
            alt="no Image Found"
            src={Next} />
            </div>
            <div className='h-[60px] w-[60px] overflow-hidden'>
            <Image
            alt="no Image Found"
            src={Apple} />
            </div>
            <div className='h-[60px] w-[60px] overflow-hidden'>
            <Image
            alt="no Image Found"
            src={Android} />
            </div>
            <div className='h-[60px] w-[60px] overflow-hidden'>
            <Image
            alt="no Image Found"
            src={Apiary} />
            </div>
         </div>
    </div>
  )
}

export default Technologies