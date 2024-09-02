import React from 'react';
import Link from 'next/link';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  text-gray-800">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-center  mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          At <Link href='/' className="font-semibold text-orange-500">Nandak Innovations</Link>, we are passionate about turning your digital dreams into reality. With a focus on innovation, quality, and customer satisfaction, we specialize in delivering top-notch web and app development services that empower businesses to thrive in the digital world. Our team of skilled developers, designers, and strategists work collaboratively to create solutions that are not only visually stunning but also highly functional and user-friendly.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Founded on the principles of <span className='font-bold'>integrity, creativity, and excellence,</span> we believe in building long-lasting partnerships with our clients. Whether you’re a startup looking to make your mark or an established business aiming to enhance your online presence, we are committed to helping you achieve your goals.
        </p>
        <p className="text-lg leading-relaxed">
          At <Link href='/' className="font-semibold text-orange-500">Nandak Innovations</Link>, your success is our success. We take pride in delivering projects on time and within budget, ensuring that every detail is perfect. Let’s work together to create something extraordinary.
        </p>
      </div>
      <Link href='/contact' className='bg-orange-500 text-white lg:p-3 md:p-3 p-1 rounded-lg flex items-center justify-center lg:gap-3 md:gap-3 gap-1  lg:w-52 md:w-52 w-44 my-10'>CONNECT WITH US </Link>
    </div>
  );
};

export default AboutUsPage;
