import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '../constants/constants'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
     className={`w-full mt-8 flex flex-col px-4 md:px-16 items-center`}>

      <div className='flex items-center mb-4 flex-col p-2'>
        <p className='font-inter text-pink text-lg font-bold uppercase'>Services</p>
        <h1 className='font-circular text-center py-3 text-4xl'>Our top categories for you</h1>
      </div>
      <div className='flex flex-col gap-6 sm:flex-row'>
        {services.map((service) =>(
          <ServiceCard key={service.id} icon={service.icon} title={service.title} paragraph={service.content}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Services