import React from "react";
import Image from "next/image";
import Image1 from "../../public/image 1.png";
import Image2 from "../../public/image 3.png";
import Image3 from "../../public/image 4.png";
import Image4 from "../../public/image 5.png";
import { FaCode } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { IoMdColorPalette } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const Services = () => {
  return (
    <div className="">
      <div className="text-[#1C923F] flex justify-center text-[30px] font-semibold">
        Our Services
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-10 gap-2 lg:mx-20 md:mx-10 mx-4 my-10">
        <div className="relative text-[#1C923F] space-y-3 bg-[#eff0ef] p-6 md:p-8 lg:p-5 cursor-pointer rounded-md shadow-md overflow-hidden group">
          <div className="absolute inset-0 bg-[#1C923F] transform translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-0 z-0"></div>
          <div className="relative z-10 flex justify-center lg:justify-start md:justify-start">
            <FaCode
              size={60}
              className="transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <div className="relative z-10 lg:text-[24px] text-[20px] font-semibold text-black transition-colors duration-300 group-hover:text-white text-center md:text-left">
            Web Development
          </div>
          <p className="relative z-10 text-black text-sm lg:text-base transition-colors duration-300 group-hover:text-white text-center md:text-left">
            We craft custom websites and web applications tailored to your
            unique business requirements. Our end-to-end web development
            services cover everything from seamless front-end design to robust
            back-end integration, ensuring a visually appealing and fully
            functional online presence that drives results.
          </p>
        </div>
        <div className="relative text-[#1C923F] space-y-3 bg-[#eff0ef] p-6 md:p-8 lg:p-5 cursor-pointer rounded-md shadow-md overflow-hidden group">
          <div className="absolute inset-0 bg-[#1C923F] transform translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-0 z-0"></div>
          <div className="relative z-10 flex justify-center lg:justify-start md:justify-start">
            <DiAndroid
              size={60}
              className="transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <div className="relative z-10 lg:text-[24px] text-[20px] font-semibold text-black transition-colors duration-300 group-hover:text-white text-center md:text-left">
            App Development
          </div>
          <p className="relative z-10 text-black text-sm lg:text-base transition-colors duration-300 group-hover:text-white text-center md:text-left">
            We specialize in building high-quality mobile applications that
            offer exceptional user experiences. At Nandak Innovations, we
            develop apps for both iOS and Android platforms, helping you reach a
            wider audience and engage users effectively.
          </p>
        </div>
        <div className="relative text-[#1C923F] space-y-3 bg-[#eff0ef] p-6 md:p-8 lg:p-5 cursor-pointer rounded-md shadow-md overflow-hidden group">
          <div className="absolute inset-0 bg-[#1C923F] transform translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-0 z-0"></div>
          <div className="relative z-10 flex justify-center lg:justify-start md:justify-start">
            <IoMdColorPalette
              size={60}
              className="transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <div className="relative z-10 lg:text-[24px] text-[20px] font-semibold text-black transition-colors duration-300 group-hover:text-white text-center md:text-left">
            UI/UX Design
          </div>
          <p className="relative z-10 text-black text-sm lg:text-base transition-colors duration-300 group-hover:text-white text-center md:text-left">
            Our UI/UX design services focus on creating intuitive and engaging
            digital experiences. By prioritizing user-centered design
            principles, we ensure that every interaction on your website or app
            is seamless, satisfying, and aligned with your brand’s vision.
          </p>
        </div>
        <div className="relative text-[#1C923F] space-y-3 bg-[#eff0ef] p-6 md:p-8 lg:p-5 cursor-pointer rounded-md shadow-md overflow-hidden group">
          <div className="absolute inset-0 bg-[#1C923F] transform translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-0 z-0"></div>
          <div className="relative z-10 flex justify-center lg:justify-start md:justify-start">
            <HiSpeakerphone
              size={60}
              className="transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <div className="relative z-10 lg:text-[24px] text-[20px] font-semibold text-black transition-colors duration-300 group-hover:text-white text-center md:text-left">
            Digital Marketing
          </div>
          <p className="relative z-10 text-black text-sm lg:text-base transition-colors duration-300 group-hover:text-white text-center md:text-left">
            Expand your online presence and grow your business with our expert
            digital marketing services. At Nandak Innovations, we design
            tailored strategies that include SEO, social media management,
            content marketing, and PPC campaigns to help you connect with your
            target audience, increase engagement, and drive conversions.
          </p>
        </div>
        <div className="relative text-[#1C923F] space-y-3 bg-[#eff0ef] p-6 md:p-8 lg:p-5 cursor-pointer rounded-md shadow-md overflow-hidden group">
          <div className="absolute inset-0 bg-[#1C923F] transform translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-0 z-0"></div>
          <div className="relative z-10 flex justify-center lg:justify-start md:justify-start">
            <BsSearch
              size={60}
              className="transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <div className="relative z-10 lg:text-[24px] text-[20px] font-semibold text-black transition-colors duration-300 group-hover:text-white text-center md:text-left">
            SEO Services
          </div>
          <p className="relative z-10 text-black text-sm lg:text-base transition-colors duration-300 group-hover:text-white text-center md:text-left">
            We provide tailored SEO services to boost your website’s visibility
            and search rankings. From on-page and technical optimization to
            keyword strategy and link building, we help you drive quality
            traffic and grow organically.
          </p>
        </div>
        <div className="relative text-[#1C923F] space-y-3 bg-[#eff0ef] p-6 md:p-8 lg:p-5 cursor-pointer rounded-md shadow-md overflow-hidden group">
          <div className="absolute inset-0 bg-[#1C923F] transform translate-x-[-100%] transition-transform duration-700 ease-out group-hover:translate-x-0 z-0"></div>
          <div className="relative z-10 flex justify-center lg:justify-start md:justify-start">
            <HiOutlineComputerDesktop
              size={60}
              className="transition-colors duration-300 group-hover:text-white"
            />
          </div>
          <div className="relative z-10 lg:text-[24px] text-[20px] font-semibold text-black transition-colors duration-300 group-hover:text-white text-center md:text-left">
            Graphic Design
          </div>
          <p className="relative z-10 text-black text-sm lg:text-base transition-colors duration-300 group-hover:text-white text-center md:text-left">
            We create compelling graphic designs that reflect your brand's
            identity. From logos to marketing materials, we blend creativity
            with purpose to help you stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
