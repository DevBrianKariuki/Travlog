import React from 'react'
import { FaStar } from "react-icons/fa";

const DestinationCard = ({ image, price, name, location, rating }) => {
  return (
    <div className="block rounded-xl shadow-md">
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
            className="rounded-t-lg"
            src={image}
            alt={image} />
            <a href="#!">
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
            </div>
            <div class="p-6">
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'></div>
                <p className="mb-2 text-md font-medium leading-tight text-pink font-circular">
                    {price}
                </p>
                <h5 className="mb-2 text-xl font-medium leading-tight text-blue font-circular">
                    {name}
                </h5>
                <p class="my-4 text-base text-gray-500 font-inter">
                    {location}
                </p>
                <div className='flex items-center text-[#FF5722]'>
                    <p className='font-inter font-bold mr-3 text-lg'>
                        {rating}
                    </p>
                     <FaStar className='text-orange' />
                </div>
            </div>
        </div>
  )
}

export default DestinationCard