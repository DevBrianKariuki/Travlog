import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DestinationCard from './DestinationCard';
import { destinations } from '../constants/constants'

const Destinations = () => {
  return (
    <div className={`w-full mt-12 flex flex-col px-4 md:px-16 items-center`}>
      
      <div className='flex w-full flex-col items-center md:flex-row md:justify-between'>
        <div className='flex md:start items-center mb-4 flex-col py-2'>
          <p className='font-inter text-pink text-lg font-bold uppercase'> Top Destinations</p>
          <h1 className='font-circular text-center py-3 text-4xl '>Explore top destinations</h1>
        </div>

        <div className='flex w-full justify-center md:justify-end gap-20 mb-5'>
            <div className='rounded-full flex items-center p-5 justify-center border-2 hover:border-pink bg-gray-200'>
              < FaArrowLeft fontSize={20} className='text-blue' />
            </div>
            <div className='rounded-full flex items-center hover:border-pink p-5 justify-center border-2 bg-blue '>
              < FaArrowRight className='text-white'  fontSize={20}/>
            </div>
        </div>
      </div>

      <div className='flex flex-col w-full items-center justify-center md:mt-0 mt-5 gap-6'>
        <div className='flex sm:flex-row flex-col gap-6'>
          {destinations.map((destination) =>(
            <DestinationCard key={destination.id} price={destination.price} rating={destination.rating} location={destination.location} image={destination.image} name={destination.name}/>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Destinations