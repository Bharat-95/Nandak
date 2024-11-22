'use client'
import React from 'react'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Whatsapp from '../components/Whatsapp';




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
    <div className='flex mx-[10%] lg:space-y-0 space-y-20 min-h-screen  gap-6 justify-center'>

        <div className='mb-10'>
        <div className='flex justify-center my-20 font-bold text-2xl'> Contact Us</div>
            <form className='space-y-10 lg:mx-32 ' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Your Name' name='Name' className='w-[100%] h-12 rounded-lg border-[1px]  p-4' required />
            <input type='text' placeholder='Your Phone Number' name='PhoneNumber' className='w-[100%] h-12 rounded-lg  border-[1px]   p-4' required />
            <input type='text' placeholder='Your Email' name='Email' className='w-[100%] h-12 rounded-lg  border-[1px]   p-4' required />
            <textarea type='text' placeholder='Your Message' name='Message' className='w-[100%] h-40 rounded-lg   border-[1px] p-4' required />
 
                <button className='bg-teal-900 text-white w-40 h-14 rounded-lg' type='submit'>Submit</button>
            </form>
            <Whatsapp />
            
        </div>
      
    </div>
  )
}



export default Contact 