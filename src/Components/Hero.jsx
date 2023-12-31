import React from 'react'
import styles from '../styles'
import { hero, workicon, playicon, heroExtra } from '../assets'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
 className={`w-full flex px-4 md:px-16 items-center flex-col md:flex-row-reverse ${styles.paddingY}`}>

      <div className={`flex-1 md:px-0 flex sm:px-10`}>
        <img src={hero} className='w-[100%] h-[100%] relative' />
      </div>

      <div className='flex relative flex-1 w-full flex-col md:items-start items-center'>
        <div id='heroExtra' className='absolute bottom-0 hidden md:block left-0'>
          <img src={heroExtra} className=' w-[50%]' />
        </div>
        <div className='bg-white gap-4 text-sm font-circular font-bold text-pink rounded-full p-4  sm:w-[30%] justify-center md:w-[40%] flex w-[60%] shadow-md'>
          Explore the world!
          <img src={workicon} alt="workicon" />
        </div>

        <div className='flex w-full md:items-start sm:items-center flex-col'>
          <p className={`text-4xl md:text-5xl font-circular items-center sm:max-w-[70%] font-extrabold my-6 leading-tight tracking-wide md:text-left text-center `}>
            Travel <span className='text-pink'>top destinations</span> of the world!
          </p>

          <p className='text-center sm:max-w-[70%] text-md md:text-left sm:text-lg font-inter text-md text-gray-600'>We always make our customer happy by providing as many choices as possible </p>

          <div className='flex flex-1 sm:gap-6 sm:flex-row my-4 flex-col'>
            <button className='bg-blue font-inter sm:px-8 mb-5 text-sm font-semibold shadow-lg text-white rounded-full md:py-3 py-5'>Get Started</button>
            <button className='bg-white flex items-center justify-center gap-3 font-inter sm:px-8 mb-5 text-sm font-semibold shadow-lg text-blue border-2 rounded-full md:py-3 py-5'>
              <img src={playicon} className='object-contain' />
              Watch Demo
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero