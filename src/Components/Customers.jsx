import React from 'react'
import styles from '../styles'
import { customers } from '../constants/constants.js';
import { airbnb, tripadvisor,expedia , booking, orbitz} from "../assets";
import { motion } from 'framer-motion';

const Customers = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
     className={`w-full flex-col items-center flex  px-4 md:px-16 ${styles.paddingY}`}>
      {/* <p className='font-inter text-pink text-lg py-5 font-bold uppercase'>Our top partners</p> */}
      <div className={` ${styles.flexCenter} sm:justify-between gap-5 flex-wrap items-center w-full `}>
            <img src={airbnb} alt="customer_logo" className=" w-[25%] sm:w-[10%] m-2 object-contain" />
            <img src={tripadvisor} alt="customer_logo" className="w-[40%] sm:w-[15%] m-2 object-contain" />
            <img src={expedia} alt="customer_logo" className="w-[30%] m-2 sm:w-[10%] object-contain" />
            <img src={booking} alt="customer_logo" className="w-[35%] m-2 sm:w-[15%] object-contain" />
            <img src={orbitz} alt="customer_logo" className="w-[25%] m-2 sm:w-[10%] object-contain" />
      </div>
    </motion.div>
  )
}

export default Customers