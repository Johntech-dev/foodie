import React from 'react'
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div className='section-container'>
        <div className='flex flex-col md:flex-row justify-between gap-12 items-center'>
            <div className='md:w1/2'>
                <img src='/image/home/Testimonial/testimonials.png' />
            </div>
            <div className='md:w-1/2:'>
            <div className='text-left md:w-4/5'>
            <p className='subtitle'>Testimonials</p>
            <h5 className='title'>What Our Customers Say About Us</h5>
            <blockquote className='my-5 text-secondary leading-[30px]'>
                "I had a pleasure of dinning  at Foodi last night, and i am still raving about the experience! The attention to detail in presentation and service was impeccable"
            </blockquote>
            <div className='flex items-center gap-4 flex-wrap'> 
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
                <div className="w-12">
                <img src="/image/home/Testimonial/testimonial1.png" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                <img src="/image/home/Testimonial/testimonial2.png" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                <img src="/image/home/Testimonial/testimonial3.png" />
                </div>
            </div>
            </div>
            <div className='space-y-1'>
                <h5 className='text-lg font-semibold'>Customer feedback</h5>
                <div className='flex items-center gap-2'>
                    <FaStar className='text-yellow-400' />
                    <span className='font-medium'>4.9</span> <span className='text-[#807E7E]'>(18.6k Reviews)</span>
                </div>
            </div>
            </div>
             </div>
            </div>
            </div>
            </div>
  )
}

export default Testimonial;