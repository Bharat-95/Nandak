import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const Work = () => {
  return (
    <div className="py-10 space-y-10">
      <div className="text-4xl font-extrabold underline">Work Process</div>
      <div className="lg:grid lg:grid-cols-2  md:grid md:grid-cols-2 gap-10 lg:space-y-0 md:space-y-0 space-y-2 ">
        <div className="border-[1px] border-black p-4 space-y-2 rounded-md shadow-md hover:translate-x-2 hover:-translate-y-2 duration-150 cursor-pointer">
          <div className="text-teal-900 font-semibold">Step 1</div>
          <div className="text-2xl font-bold ">Consultation</div>
          <div className="font-extralight">
            At this stage, we get acquainted with your needs, outline the goals
            and desired results.
          </div>
        </div>
        <div className="border-[1px] border-black p-4 space-y-2 rounded-md shadow-md hover:translate-x-2 hover:-translate-y-2 duration-150 cursor-pointer">
          <div className="text-teal-900 font-semibold">Step 2</div>
          <div className="text-2xl font-bold">
            Estimation & Budget & Contract signing
          </div>
          <div className="font-extralight">
            We talk about the contract and will complete the formalities
          </div>
        </div>
        <div className="border-[1px] border-black p-4 space-y-2 rounded-md shadow-md hover:translate-x-2 hover:-translate-y-2 duration-150 cursor-pointer">
          <div className="text-teal-900 font-semibold">Step 3</div>
          <div className="text-2xl font-bold">UI/UX Design + Features</div>
          <div className="font-extralight">
            You receive a smart design and a detailed description of the
            functions of your product.
          </div>
        </div>
        <div className="border-[1px] border-black p-4 space-y-2 rounded-md shadow-md hover:translate-x-2 hover:-translate-y-2 duration-150 cursor-pointer">
          <div className="text-teal-900 font-semibold">Step 4</div>
          <div className="text-2xl font-bold">Development</div>
          <div className="font-extralight">
            Here our developers handle the implementation, coding, and
            optimization of your application.
          </div>
        </div>
        <div className="border-[1px] border-black p-4 space-y-2 rounded-md shadow-md hover:translate-x-2 hover:-translate-y-2 duration-150 cursor-pointer">
          <div className="text-teal-900 font-semibold">Step 5</div>
          <div className="text-2xl font-bold">Testing</div>
          <div className="font-extralight">
            Our testers will check your product deeply to make sure that it has
            no bugs or errors.
          </div>
        </div>
        <div className="border-[1px] border-black p-4 space-y-2 rounded-md shadow-md hover:translate-x-2 hover:-translate-y-2 duration-150 cursor-pointer">
          <div className="text-teal-900 font-semibold">Step 6</div>
          <div className="text-2xl font-bold">Delivery</div>
          <div className="font-extralight">
            The final stage of our cooperation. Here we will provide you with
            the ready project and all related materials.
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Link href='/contact' className='bg-teal-900 text-white p-2 rounded-lg flex items-center justify-center gap-3 w-52'>GET QUOTE <FaLocationArrow size={14} /></Link>
      </div>
    </div>
  );
};

export default Work;
