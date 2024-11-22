"use client"
import React from 'react';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import Whatsapp from './Whatsapp';

const Contact = () => {

    const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());
    if (Object.values(values).some(value => !value)) {
      alert('Please fill in all required fields.');
      return;
    }


    emailjs.sendForm('service_zrwj7tm', 'template_eu2yp1f', form.current, 'XSE0WY9kdYrv5LrLP')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Thank you for details we will reach you soon!')
          setIsSubmitted(true);
        
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });

  };


  return (
    <form  ref={form} onSubmit={sendEmail} className="bg-[#1C923F] py-[64px]">
      <div className="text-white flex justify-center text-[30px] font-semibold">
        Get in Touch
      </div>
      <div className="flex justify-center">
        <div className="lg:grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-10 py-[32px] lg:space-y-0 md:space-y-0 space-y-4 ">
          <div className="text-white text-[16px] font-semibold space-y-2 px-2 ">
            <div>First Name</div>
            <div>
              <input
                type="text"
                placeholder="Enter your first name"
                name='Name'
                required
                className="bg-[#1C923F] text-white h-[35px] lg:w-[330px] md:w-[330px] w-[300px] border-[1px] border-white rounded-[10px] p-2"
              />
            </div>
          </div>
          <div className="text-white text-[16px] font-semibold space-y-2 px-2">
            <div>Last Name</div>
            <div>
              <input
                type="text"
                placeholder="Enter your Last name"
                className="bg-[#1C923F] text-white h-[35px] lg:w-[330px] md:w-[330px] w-[300px]  border-[1px] border-white rounded-[10px] p-2"
              />
            </div>
          </div>

          <div className="text-white text-[16px] font-semibold space-y-2 px-2">
            <div>Phone</div>
            <div>
              <input
                type="text"
                name='PhoneNumber'
                required
                placeholder="Enter your contact number"
                className="bg-[#1C923F] text-white h-[35px]lg:w-[330px] md:w-[330px] w-[300px]  border-[1px] border-white rounded-[10px] p-2"
              />
            </div>
          </div>

          <div className="text-white text-[16px] font-semibold space-y-2 px-2">
            <div>Email ID</div>
            <div>
              <input
                type="email"
                name='Email'
                placeholder="Enter your mail ID"
                className="bg-[#1C923F] text-white h-[35px]lg:w-[330px] md:w-[330px] w-[300px] border-[1px] border-white rounded-[10px] p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <textarea
          type="text"
          name='Message'
          placeholder="Write your message"
          className="bg-[#1C923F] text-white h-[174px] lg:w-[706px] md:w-[706px] w-[300px] border-[1px] border-white rounded-[10px] p-2"
        />
      </div>
      <div className="flex justify-center mt-[32px]">
        <button className="bg-white h-[35px] w-[150px] text-[#1C923F] text-[16px] font-semibold rounded-md hover:bg-gray-200" type='submit'>
          Submit
        </button>
      </div>
      <Whatsapp />
    </form>
  );
};

export default Contact;
