import React from 'react'
import { logo, waveBg } from '../assets'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import FooterAccordion from './FooterAccordion';
import { footerLinks } from '../constants/constants';

const Footer = () => {
  return (
    <div className={` w-full relative mt-20 px-4 md:px-16 items-center`}>
        <div id='waveBg' className='absolute hidden md:block right-0 bottom-0 top-0'>
            <img src={waveBg} className='' />
          </div>
        <div className='flex flex-col relative md:justify-between md:flex-row '>
          
          <div className='flex items-start flex-col'>
            <img src={logo} className='' />
            <p className='font-inter max-w-[450px] py-8 leading-[32px] text-md font-medium text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <div className='flex items-center gap-6'>
              <FaFacebook className='text-blue' fontSize={32} />
              <AiFillInstagram className='text-blue' fontSize={36} />
              <FaXTwitter className='text-blue' fontSize={32} />
            </div>
          </div>

          <div className='flex md:hidden justify-between md:pr-0 pr-12'>
            <div className='flex flex-col md:my-0 mt-12 gap-4'>
              <h1 className='font-circular text-xl'>Company</h1>
              <div className='flex flex-col gap-5 items-start justify-center'>
                <h2 className='font-inter font-medium text-md text-gray-600'>About</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Career</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Mobile</h2>
              </div>
            </div>

            <div className='flex flex-col md:my-0 mt-12 gap-4'>
              <h1 className='font-circular text-xl'>Contact</h1>
              <div className='flex flex-col gap-5 items-start justify-center'>
                <h2 className='font-inter font-medium text-md text-gray-600'>Why Travlog?</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Partner with us</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>FAQ's</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Blog</h2>
              </div>
            </div>
          </div>

            <div className='flex flex-col hidden md:block md:my-0 mt-12 gap-4'>
              <h1 className='font-circular text-xl'>Company</h1>
              <div className='flex flex-col gap-5 items-start justify-center'>
                <h2 className='font-inter font-medium text-md text-gray-600'>About</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Career</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Mobile</h2>
              </div>
            </div>

            <div className='flex flex-col hidden md:block md:my-0 mt-12 gap-4'>
              <h1 className='font-circular text-xl'>Contact</h1>
              <div className='flex flex-col gap-5 items-start justify-center'>
                <h2 className='font-inter font-medium text-md text-gray-600'>Why Travlog?</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Partner with us</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>FAQ's</h2>
                <h2 className='font-inter font-medium text-md text-gray-600'>Blog</h2>
              </div>
            </div>

          <div className='flex flex-col md:my-0 mt-12 gap-4'>
            <h1 className='font-circular text-xl'>Meet Us</h1>
            <div className='flex flex-col gap-5 items-start justify-center'>
              <h2 className='font-inter font-medium text-md text-gray-600'>(+254) 703 814228</h2>
              <h2 className='font-inter font-medium text-md text-gray-600'>info@travlog.com</h2>
              <h2 className='font-inter font-medium text-md text-gray-600'>205. R Street, Nairobi<br/> Kenya</h2>
            </div>
          </div>
  
        </div>

        
    </div>
  )
}

export default Footer