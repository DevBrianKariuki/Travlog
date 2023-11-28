import React from 'react'

const ServiceCard = ({icon, title, paragraph}) => {
  return (
    <div className="block  w-full flex items-center border-2 border-gray-100 gap-8 justify-center flex-col rounded-3xl px-8 py-12 shadow-xs">
        <img src={icon} alt='Service icon' className='w-[20%] object-cover' />
        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-2xl font-circular'>{title}</h1>
            <p className='font-inter text-lg text-gray-500 text-center'>{paragraph}</p>
        </div>
        
    </div>
  )
}

export default ServiceCard