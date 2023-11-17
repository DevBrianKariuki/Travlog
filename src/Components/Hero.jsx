import React from 'react'
import styles from '../styles'
import { hero, workicon, playicon } from '../assets'

const Hero = () => {
  return (
    <div className={`w-full flex px-4 md:px-16 flex-col md:flex-row-reverse ${styles.paddingY}`}>

      <div className={`flex-1 flex `}>
        <img src={hero} className='w-[100%] h-[100%] relative' />
      </div>

      <div className='flex flex-1 w-full flex-col items-center'>

        <div className='bg-white gap-4 text-sm font-inter font-bold text-pink rounded-full p-4 justify-center flex w-[60%] shadow-md'>
          Explore the World
          <img src={workicon} alt="workicon" />
        </div>

        <div className='flex w-full flex-col'>
          <p className={`text-4xl font-circular font-extrabold my-6 leading-tight tracking-wide text-center `}>
            Travel <span className='text-pink'>top destinations</span> of the world
          </p>

          <p className='text-center text-md font-inter text-md text-gray-600'>We always make our customer happy by providing as many choices as possible </p>

          <div className='flex flex-1 my-8 flex-col'>
            <button className='bg-blue font-inter mb-5 text-sm font-semibold shadow-lg text-white rounded-full py-5'>Get Started</button>
            <button className='flex gap-3 font-semibold text-sm py-5 rounded-full items-center border-2 justify-center font-inter'>
              <img src={playicon} />
              Watch Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero