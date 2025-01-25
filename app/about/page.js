import React from "react";
import Image from "next/image";
import Bharat from "../../public/Bharat.jpeg";
import Sai from "../../public/sai.jpeg";
import Sanskruthi from "../../public/Sanskruthi.jpg";
import Vijay from '../../public/vijay.jpg'
import Link from "next/link";

const page = () => {
  return (
    <div className="lg:space-y-[50px] md:space-y-[30px] space-y-4">
      <div className="lg:py-[50px] lg:px-[160px] lg:text-[40px] md:py-[108px] md:px-[160px] md:text-[20px] py-4 text-[20px] flex justify-center gap-2  ">
        At
        <a className="text-[#1C923F] font-bold italic"> Nandak Innovations</a>
      </div>

      <div className="lg:px-[160px] lg:text-[20px] md:px-[160px] md:text-[20px] px-4 text-[10px] text-center ">
        At Nandak Innovations, we specialize in delivering innovative web and
        app development, UI/UX design, and digital marketing solutions. Our
        skilled team is committed to creating user-friendly, high-quality
        digital experiences tailored to help businesses grow and succeed.
      </div>

      <div className="bg-[#1C923F] text-white lg:px-[160px] lg:py-[50px] md:py-[50px] py-10 flex flex-col items-center lg:space-y-[20px] md:space-y-[10px] space-y-4">
        <div className="lg:text-[28px]">Our Vision & Mission</div>
        <div className="lg:text-[16px] md:text-[14px] text-[12px] flex text-center px-4 ">
          Our vision is to become a global leader in crafting innovative,
          user-centric digital solutions that drive business success. Guided by
          our mission, we strive to empower businesses with cutting-edge
          technology and creative strategies, fostering lasting partnerships
          built on trust, excellence, and mutual growth.
        </div>
      </div>

      <div>
        <div className=" flex justify-center text-[#1C923F] font-bold lg:text-[28px]">
          Meet our Team
        </div>
        <div className="lg:px-[160px] lg:py-[50px]">
          <div className="lg:flex md:grid md:grid-cols-2 lg:justify-evenly lg:space-y-0 md:space-y-0  md:gap-y-10 space-y-10">
            <div className="flex flex-col items-center space-y-1">
              <div className="w-[200px] h-[200px] overflow-hidden">
                <Image src={Bharat} width={200} height={200} alt="No Image Found"  unoptimized={true}/>
              </div>
              <div className="font-bold lg:text-[15px] md:text-[15px] text-[14px]">Bharat Kumar Nanavattula</div>
              <div className="lg:text-[12px] md:text-[12px] text-[10px]">Founder & Lead Developer</div>
            </div>

            <div className="flex flex-col items-center space-y-1">
              <div className="w-[200px] h-[200px] overflow-hidden">
                <Image src={Sai} width={200} height={200} alt="No Image Found"  unoptimized={true} />
              </div>
              <div className="font-bold lg:text-[15px] md:text-[15px] text-[14px]">Sairam Akula</div>
              <div className="lg:text-[12px] md:text-[12px] text-[10px]">Lead Developer</div>
            </div>

            <div className="flex flex-col items-center space-y-1 ">
              <div className="w-[200px] h-[200px] overflow-hidden">
                <Image src={Sanskruthi} width={200} height={200} alt="No Image Found"  unoptimized={true} />
              </div>
              <div className="font-bold lg:text-[15px] md:text-[15px] text-[14px]">Sanskruti Udhan</div>
              <div className="lg:text-[12px] md:text-[12px] text-[10px]">Designer</div>
            </div>

            <div className="flex flex-col items-center space-y-1 ">
              <div className="w-[200px] h-[200px] overflow-hidden">
                <Image src={Vijay} width={200} height={200} alt="No Image Found"  unoptimized={true} />
              </div>
              <div className="font-bold lg:text-[15px] md:text-[15px] text-[14px]">Vijay Bhaskar Thipparapu
              </div>
              <div className="lg:text-[12px] md:text-[12px] text-[10px]">Digital Marketing Strategist</div>
            </div>


          </div>
        </div>
      </div>
      <div className="bg-[#1C923F] lg:py-[80px] lg:px-[160px] md:py-[80px] md:px-[160px] px-10 py-10 lg:space-y-[32px] md:space-y-[32px] space-y-10">
        <div className="lg:text-[36px] font-semibold text-white flex justify-center text-center">
          Unlock new career opportunities <br />
          with us
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="lg:text-[24px] font-semibold text-[#1C923F] lg:py-[16px] rounded-lg lg:px-[60px] md:px-[40px] md:py-[10px] p-2 bg-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
