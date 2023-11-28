import React from 'react'
import { IoMail } from "react-icons/io5";

const Subscribe = () => {
  return (
    <div className={` relative bg-center justify-center bg-cover w-full mt-20 flex flex-col px-4 md:px-16 items-center`}>

        <div className='bg-[#FFFBF0] rounded-2xl items-center justify-center px-3 py-6 md:py-20 w-full'>
          <div className='flex items-center justify-center my-8 md:my-0 flex-col p-2'>
            <p className='font-inter text-pink text-lg font-bold uppercase'>Subscribe to our newsletter</p>
            <h1 className='font-circular text-center md:max-w-[60%] py-4 text-4xl'>Prepare yourself & let’s explore the beauty of the world</h1>
          </div>

          <div className='flex items-center md:px-32 justify-center my-8 md:my-0 md:flex-row mx-auto gap-5 flex-col p-2'>
            <div className='flex w-[90%] md:w-[70%] items-center gap-4 bg-white md:rounded-2xl py-4 rounded-lg'>
              <IoMail className='text-gray-400 ml-6' fontSize={28} />
              <input className='font-circular text-md w-full text-blue outline-none' placeholder='Your email'/>
            </div>
            <button className='bg-blue w-[90%] md:w-[30%] text-lg font-circular text-white py-4 md:rounded-2xl rounded-lg'>
              Subscribe
            </button>
          </div>

        </div>

    </div>
  )
}

export default Subscribe