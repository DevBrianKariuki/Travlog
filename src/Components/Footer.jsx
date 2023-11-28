import React from 'react'
import { logo } from '../assets'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import FooterAccordion from './FooterAccordion';
import { footerLinks } from '../constants/constants';

const Footer = () => {
  return (
    <div className={` relative bg-center  justify-center bg-cover w-full mt-20 flex flex-col px-4 md:px-16 items-center`}>
        <div className='flex flex-col md:flex-row '>
          <div className='flex items-start flex-col'>
            <img src={logo} className='' />
            <p className='font-inter py-8 leading-[32px] text-md font-medium text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <div className='flex items-center gap-6'>
              <FaFacebook className='text-blue' fontSize={32} />
              <AiFillInstagram className='text-blue' fontSize={36} />
              <FaXTwitter className='text-blue' fontSize={32} />
            </div>
          </div>

          <div className='flex w-full md:flex-row flex-col my-6'>
            <div>
              <FooterAccordion header={'Company'} text={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'} />
            </div>
            <div>
              <FooterAccordion header={'Company'} text={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'} />
            </div>
            <div>
              <FooterAccordion header={'Company'} text={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'} />
            </div>
          </div>
        </div>

        
    </div>
  )
}

export default Footer