import React from 'react'
import { keyFeatures } from '../assets'
import FeatureCard from './FeatureCard'
import { Features } from '../constants/constants'


const KeyFeatures = () => {
  return (
    <div className={`w-full mt-20 flex flex-col md:flex-row px-4 md:px-16 items-center`}>

      <div className='flex items-center md:items-start my-8 md:my-0 md:w-[50%] flex-col p-2'>
        <p className='font-inter text-pink text-lg font-bold uppercase'>Key Features</p>
        <h1 className='font-circular text-center md:text-left py-3 text-4xl'>We offer the best services</h1>
        <p className='font-inter max-w-[450px] md:px-0 px-8 text-lg text-center md:text-left text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        
        <div className='flex gap-4 w-full md:items-start flex-col mt-12 md:mt-6 gap-6'>
          {Features.map((feature) =>(
            <FeatureCard key={feature.id} icon={feature.icon} background={feature.bg} title={feature.title} text={feature.text} />
          ))}
        </div>
      </div>
      
      <div className={`flex-1 md:px-0 items-center justify-center flex sm:px-10`}>
        <img src={keyFeatures} className='w-[100%] md:h-[50%]' />
      </div>


    </div>
  )
}

export default KeyFeatures