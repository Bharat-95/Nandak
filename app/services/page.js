import React from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "../../public/Services1.png";
import Image2 from "../../public/Services2.png";
import Image3 from "../../public/Services3.png";
import Image4 from "../../public/Services4.png";
const page = () => {
  return (
    <div>
      <div className="bg-[#1C923F] lg:space-y-[32px] md:space-y-[32px] space-y-10 lg:py-[100px] md:py-[100px] py-[50px] lg:px-[160px] md:px-[160px] px-[20px] ">
        <div className="text-white flex justify-center text-[30px] font-semibold">
          Our Services
        </div>
        <div className="text-white lg:text-[20px] md:text-[18px] text-[12px]">
          At Nandak Innovations, we offer a comprehensive range of services to
          help businesses thrive in the digital world. Whether you’re looking to
          build a stunning website, develop a feature-rich mobile app, enhance
          user experiences through thoughtful design, or boost your online
          presence with strategic digital marketing, we’ve got you covered. Our
          team of experts is dedicated to delivering innovative, user-centric
          solutions tailored to meet your unique goals and drive measurable
          results. Explore our services below and let us help you turn your
          vision into reality.
        </div>
      </div>

      <div className="bg-white  lg:px-[80px] lg:py-[64px] md:py-[64px] py-[30px] space-y-[64px] ">
        <div className="lg:flex lg:gap-[32px]  md:mx-4">
          <div className=" shadow-md lg:mx-0 md:mx-0 mx-2">
            <Image alt="No Image Found" src={Image1} width={560} height={400} unoptimized={true} />
          </div>
          <div className="lg:w-[50%] lg:px-0 md:px-0 px-2  space-y-6">
            <div className="lg:py-[16px] md:py-[14px] py-[10px] lg:text-[36px] md:text-[30px] text-[20px] font-semibold">
              Web Development
            </div>
            <div>
              We design and develop custom websites and web applications
              tailored to your business needs. From intuitive front-end designs
              that captivate users to robust back-end systems that ensure
              seamless functionality, we provide end-to-end web development
              solutions. Whether you need an e-commerce platform, a portfolio
              website, or a custom web app, we are here to deliver scalable and
              reliable digital experiences that drive results.
            </div>
            <div>
              <Link
                href="/contact"
                className="bg-[#1C923F] text-white font-bold lg:text-[16px] md:text-[14px] text-[14px] p-2"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:gap-[32px] md:mx-4">
          <div className=" shadow-md lg:mx-0 md:mx-0 mx-2">
            <Image alt="No Image Found" src={Image2} width={560} height={400} unoptimized={true} />
          </div>
          <div className="lg:w-[50%] lg:px-0 md:px-0 px-2  space-y-6">
            <div className="lg:py-[16px] md:py-[14px] py-[10px] lg:text-[36px] md:text-[30px] text-[20px] font-semibold">
              App Development
            </div>
            <div>
              Our mobile app development services focus on creating high-quality
              apps for both iOS and Android platforms. We ensure exceptional
              user experiences by combining intuitive design with smooth
              functionality. From concept to deployment, we handle every stage
              of the app development process, delivering apps that are engaging,
              efficient, and aligned with your business goals.
            </div>
            <div>
              <Link
                href="/contact"
                className="bg-[#1C923F] text-white font-bold lg:text-[16px] md:text-[14px] text-[14px] p-2"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:gap-[32px]  md:mx-4">
          <div className=" shadow-md lg:mx-0 md:mx-0 mx-2">
            <Image alt="No Image Found" src={Image3} width={560} height={400} unoptimized={true} />
          </div>
          <div className="lg:w-[50%] lg:px-0 md:px-0 px-2 space-y-6">
            <div className="lg:py-[16px] md:py-[14px] py-[10px] lg:text-[36px] md:text-[30px] text-[20px] font-semibold">
              UI/UX Design
            </div>
            <div>
              We specialize in creating user-centered digital experiences
              through exceptional UI/UX design. Our approach focuses on
              understanding your audience and designing interfaces that are
              intuitive, visually appealing, and functional. By ensuring
              seamless navigation and meaningful interactions, we help your
              website or app stand out and leave a lasting impression on users.
            </div>
            <div>
              <Link
                href="/contact"
                className="bg-[#1C923F] text-white font-bold lg:text-[16px] md:text-[14px] text-[14px] p-2"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:gap-[32px]  md:mx-4">
          <div className=" shadow-md lg:mx-0 md:mx-0 mx-2">
            <Image alt="No Image Found" src={Image4} width={560} height={400} unoptimized={true} />
          </div>
          <div className="lg:w-[50%] lg:px-0 md:px-0 px-2  space-y-6">
            <div className="lg:py-[16px] md:py-[14px] py-[10px] lg:text-[36px] md:text-[30px] text-[20px] font-semibold">
              Digital Marketing
            </div>
            <div>
              Our digital marketing services are designed to help you grow your
              online presence and connect with your target audience. From SEO
              and content marketing to social media management and paid ad
              campaigns, we create strategies that drive traffic, increase
              engagement, and boost conversions. With data-driven insights and
              innovative approaches, we ensure your brand reaches its full
              potential in the digital space.
            </div>
            <div>
              <Link
                href="/contact"
                className="bg-[#1C923F] text-white font-bold lg:text-[16px] md:text-[14px] text-[14px] p-2"
              >
                Get Quote
              </Link>
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
