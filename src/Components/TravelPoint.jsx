import React from 'react'
import { travelPoint } from '../assets'
import { stats } from '../constants/constants'
import StatCard from './statCard'

const TravelPoint = () => {
  return (
    <div className={`w-full mt-20 flex flex-col md:flex-row px-4 md:px-16 items-center`}>

      <div className={`flex-1 md:px-0 flex sm:px-10 md:w-[50%]`}>
        <img src={travelPoint} className='w-[100%] h-[100%] relative' />
      </div>


      <div className='flex items-center md:items-start my-8 md:my-0 flex-col md:w-[40%] p-2'>
        <p className='font-inter text-pink text-lg font-bold uppercase'>Travel Point</p>
        <h1 className='font-circular text-center md:text-left py-3 text-4xl'>We helping you find your dream location</h1>
        <p className='font-inter md:px-0 px-8 text-lg text-center md:text-left text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        
        <div className='grid md:grid-cols-2 gap-4 w-full md:flex-wrap flex-col mt-12 md:mt-6 gap-6 sm:flex-row'>
          {stats.map((stat) =>(
            <StatCard key={stat.id}  title={stat.title} text={stat.text}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelPoint