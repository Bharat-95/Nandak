import React from "react";
import Image from "next/image";
import Image1 from "../../public/image 1.png";
import Image2 from "../../public/image 3.png";
import Image3 from "../../public/image 4.png";
import Image4 from "../../public/image 5.png";

const Services = () => {
  return (
    <div className="">
      <div className="text-[#1C923F] flex justify-center text-[30px] font-semibold">
        Our Services
      </div>
      <div className="px-[64px] pt-[64px] flex flex-wrap gap-[24px] justify-center">
        <div className="border-[1px] border-[#1D3816] p-[24px] rounded-[30px] flex flex-col items-center w-[300px] hover:transform hover:translate-x-2 hover:-translate-y-2 cursor-pointer">
          <div className="h-[200px] w-[280px] overflow-hidden">
            <Image
              src={Image1}
              width={280}
              height={200}
              alt="No Image Found"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-[12px] text-[#1D3816] text-[16px]">
            Web Development
          </div>
          <div className="text-[#1D3816] text-[12px]">
            We craft custom websites and web applications tailored to your
            unique business requirements. Our end-to-end web development
            services cover everything from seamless front-end design to robust
            back-end integration, ensuring a visually appealing and fully
            functional online presence that drives results.
          </div>
        </div>

        <div className="border-[1px] border-[#1D3816] p-[24px] rounded-[30px] flex flex-col items-center w-[300px] hover:transform hover:translate-x-2 hover:-translate-y-2 cursor-pointer">
          <div className="h-[200px] w-[280px] overflow-hidden">
            <Image
              src={Image2}
              width={280}
              height={200}
              alt="No Image Found"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-[12px] text-[#1D3816] text-[16px]">
            App Development
          </div>
          <div className="text-[#1D3816] text-[12px]">
            We specialize in building high-quality mobile applications that
            offer exceptional user experiences. At Nandak Innovations, we
            develop apps for both iOS and Android platforms, helping you reach a
            wider audience and engage users effectively.
          </div>
        </div>

        <div className="border-[1px] border-[#1D3816] p-[24px] rounded-[30px] flex flex-col items-center w-[300px] hover:transform hover:translate-x-2 hover:-translate-y-2 cursor-pointer ">
          <div className="h-[200px] w-[280px] overflow-hidden">
            <Image
              src={Image3}
              width={280}
              height={200}
              alt="No Image Found"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-[12px] text-[#1D3816] text-[16px]">UI/UX Design</div>
          <div className="text-[#1D3816] text-[12px]">
            Our UI/UX design services focus on creating intuitive and engaging
            digital experiences. By prioritizing user-centered design
            principles, we ensure that every interaction on your website or app
            is seamless, satisfying, and aligned with your brand’s vision.
          </div>
        </div>

        <div className="border-[1px] border-[#1D3816] p-[24px] rounded-[30px] flex flex-col items-center w-[300px] hover:transform hover:translate-x-2 hover:-translate-y-2 cursor-pointer">
          <div className="h-[200px] w-[280px] overflow-hidden">
            <Image
              src={Image4}
              width={280}
              height={200}
              alt="No Image Found"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-[12px] text-[#1D3816] text-[16px]">
            Digital Marketing
          </div>
          <div className="text-[#1D3816] text-[12px]">
            Expand your online presence and grow your business with our expert
            digital marketing services. At Nandak Innovations, we design
            tailored strategies that include SEO, social media management,
            content marketing, and PPC campaigns to help you connect with your
            target audience, increase engagement, and drive conversions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
