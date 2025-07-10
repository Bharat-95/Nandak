import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-[#1D3816] py-[64px] px-4 lg:px-20 lg:flex lg:justify-center lg:items-center lg:gap-10">
      <div className="space-y-10 lg:w-[50%] lg:space-y-20">
        <div className="text-center lg:text-start font-extralight lg:text-[40px] md:text-[40px] text-[20px] text-[#1D3816] space-y-[17px]">
          Innovative Solutions for your <br />
          <a className="text-[#1C923F] font-semibold italic">Business Growth</a>
          <div className="lg:text-[20px] md:text-[20px] text-[10px] font-thin lg:mx-0 md:mx-40 mx-10">
            Nandak Innovations is a software development company that brings
            your ideas to life. We create custom web and mobile applications
            adapted to your unique growth path. Let's unlock the power of
            innovations for your business.
          </div>
        </div>

        <div className="flex justify-center lg:justify-start gap-[35px] my-[35px]">
          <Link
            href="/contact"
            className="bg-[#1C923F] text-white text-[15px] flex items-center justify-center px-[30px] py-[10px] font-semibold shadow-md"
          >
            GET QUOTE
          </Link>
          <Link
            href="/contact"
            className="text-[15px] bg-white text-[#1D3816] flex items-center justify-center px-[30px] py-[10px] font-semibold shadow-md border-[1px] border-black"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center lg:w-[50%] mt-10 lg:mt-0">
        <Image
          alt="Hero Image"
          src="/object-1.png"
          width={500}
          height={500}
          className="w-full max-w-[500px] h-auto mx-auto"
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default Hero;