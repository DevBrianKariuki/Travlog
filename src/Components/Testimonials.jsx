import React from 'react'
import { avatar, stars } from '../assets'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className={`bg-[url('../assets/mountains.jpg')] relative bg-center bg-cover w-full mt-20 flex flex-col px-4 md:px-16 items-center`}>

        <div className='flex items-center justify-center my-8 md:my-0 flex-col p-2'>
          <p className='font-inter text-pink text-lg font-bold uppercase'>Testimonials</p>
          <h1 className='font-circular text-center md:text-left py-3 text-4xl'>Trust our clients</h1>
        </div>

        <div className='flex items-center justify-center flex-col w-full'>
          <img src={avatar} className='w-[100px]' />
          <p className='text-pink text-xl font-circular pb-4 pt-8'>Mark Smith <span className='text-gray-800'>/ Travel Enthusiast</span></p>
          <img src={stars} className='w-[170px]' />
          <p className='font-inter md:max-w-[70%] text-lg text-gray-500 text-center px-3 py-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>

        <div className='flex items-center justify-center gap-4 my-4'>
          <div className='bg-pink w-[15px] h-[15px] rounded-full'>
          </div>
          <div className='bg-gray-200 w-[15px] h-[15px] rounded-full'>
          </div>
          <div className='bg-gray-200 w-[15px] h-[15px] rounded-full'>
          </div>
        </div>

        <div className='flex w-full md:items-center md:absolute justify-between md:bottom-[0] mb-5'>
            <div className='rounded-full flex items-center p-5 justify-center border-2 hover:border-pink bg-gray-200'>
              < FaArrowLeft fontSize={20} className='text-blue' />
            </div>
            <div className='rounded-full flex items-center hover:border-pink p-5 justify-center border-2 bg-blue '>
              < FaArrowRight className='text-white'  fontSize={20}/>
            </div>
        </div>

    </div>
  )
}

export default Testimonials