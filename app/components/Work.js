import React from "react";
import Image from "next/image";
import Image1 from "../../public/Group 1.png";
import Image2 from "../../public/Group 2.png";
import Image3 from "../../public/Group 3.png";
import Image4 from "../../public/Group 4.png"

const Work = () => {
  return (
    <div className="">
      <div className="text-[#1C923F] flex justify-center text-[30px] font-semibold">
        Our Process
      </div>
      <div className="lg:flex lg:space-y-0 md:space-y-0 space-y-10  justify-center px-[100px] pt-[64px] gap-[31px]">
      <div className="flex flex-col items-center">
        <div className="w-[240px] h-[240px] overflow-hidden"><Image alt="no Image Found" src={Image1} /></div>
        <div className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#F8C802] font-semibold lg:py-[30px] md:py-[10px] py-[10px]">Plan & Customize</div>
        <div className="text-[12px] flex text-center text-[#1D3816]">
          We collaborate with you to understand your goals and customize a plan
          tailored to your unique needs, including features, design, and
          functionality.
        </div>
        </div>


        <div className="flex flex-col items-center">
        <div className="w-[240px] h-[240px] overflow-hidden"><Image alt="no Image Found" src={Image2} /></div>
        <div className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#DE4B30] font-semibold lg:py-[30px] md:py-[10px] py-[10px]">Design & Develop</div>
        <div className="text-[12px] flex text-center text-[#1D3816]">
        Our experts craft user-friendly designs and bring them to life with seamless development for web and mobile platforms.
        </div>
        </div>


        <div className="flex flex-col items-center">
        <div className="w-[240px] h-[240px] overflow-hidden"><Image alt="no Image Found" src={Image3} /></div>
        <div className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#4DC1EF] font-semibold lg:py-[30px] md:py-[10px] py-[10px]">Test & refine</div>
        <div className="text-[12px] flex text-center text-[#1D3816]">
          We collaborate with you to understand your goals and customize a plan
          tailored to your unique needs, including features, design, and
          functionality.
        </div>
        </div>

        <div className="flex flex-col items-center">
        <div className="w-[240px] h-[240px] overflow-hidden"><Image alt="no Image Found" src={Image4} /></div>
        <div className=" lg:text-[16px] md:text-[14px] text-[12px] text-[#1C923F] font-semibold lg:py-[30px] md:py-[10px] py-[10px]">Plan & Customize</div>
        <div className="text-[12px] flex text-center text-[#1D3816]">
          We collaborate with you to understand your goals and customize a plan
          tailored to your unique needs, including features, design, and
          functionality.
        </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
