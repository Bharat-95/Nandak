import React from "react";
import HeroImage from "../../public/developer.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import Screen from '../../public/screens.png'

const Hero = () => {
  return (
    <div className=" bg-gradient-to-b from-white via-white py-[64px] lg:px-40 to-[#1D3816]">
      <div className="space-y-20">
        <div className="text-center font-extralight lg:text-[40px] md:text-[40px] text-[20px] text-[#1D3816] gap-10 space-y-[17px]">
          Innovative Solutions for your <br />
          <a className="text-[#1C923F] font-semibold italic">Business Growth</a>
          <div className="lg:text-[20px] md:text-[20px] text-[10px] font-thin lg:mx-40 md:mx-40 mx-10">
            Nandak Innovations is a software development company that brings
            your ideas to life. We create custom web and mobile applications
            adapted to your unique growth path. Let's unlock the power of
            innovations for your business.
          </div>
        </div>

        <div className="flex justify-center gap-[35px] my-[35px]">
          <Link
            href="/contact"
            className="bg-[#1C923F] text-white text-[15px] flex items-center justify-center px-[30px] py-[10px] font-semibold shadow-md"
          >
            
          </Link>
          <Link
           href="/contact"
           className="text-[15px] bg-white text-[#1D3816] flex items-center justify-center px-[30px] py-[10px] font-semibold shadow-md  border-[1px] border-black">Learn More</Link>
        </div>
      </div>
      <div>
        <Image
        alt="No Image Found"
        src={Screen} 
        className="py-[35px]"
        unoptimized={true}/>
        
      </div>
    </div>
  );
};

export default Hero;
