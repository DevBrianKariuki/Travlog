import React from 'react'

const FeatureCard = ({icon,background, title, text}) => {
  return (
    <div className='flex flex-col py-8 md:py-6 gap-8 p-3 md:w-[70%] md:items-center md:justify-start md:flex-row rounded-2xl border-2 border-gray-100 bg-white justify-center items-center'>
        <div className={` ${background} flex p-3 w-[60px] h-[60px] items-center justify-center rounded-2xl`}>
            <img src={icon} className='w-[80%] h-[80%] md:w-[100%] object-contain' />
        </div>
        <div className='text-center md:text-left'>
            <h1 className='font-circular text-gray-800 md:text-xl text-2xl'>{title}</h1>
            <p className='font-inter md:text-sm text-gray-400 py-2'>{text}</p>
        </div>
    </div>
  )
}

export default FeatureCard