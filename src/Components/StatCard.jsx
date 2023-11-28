import React from 'react'

const StatCard = ({ title, text }) => {
  return (
    <div className='flex flex-col py-8 gap-5 rounded-3xl border-2 border-gray-200 bg-white justify-center items-center'>
        <h1 className='font-circular text-[#FF5722] text-2xl'>{title}</h1>
        <p className='font-inter font-medium text-gray-600 py-2'>{text}</p>
    </div>
  )
}

export default StatCard