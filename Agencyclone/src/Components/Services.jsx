import React from 'react'
import { servicesinfo } from '../export'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section id='services' className='w-[90%] m-auto lg:flex-row flex-col justify-between items-center gap-28 py-10'>
      <motion.div viewport={{once: true}} initial={{scale:0}} whileInView={{scale:1}} transition={{duration: 0.2, delay: 0.1, ease: 'easeInOut' }} className='bg-black lg:p-20 p-10 flex lg:flex-row flex-col justify-center items-center gap-20 rounded-3xl'>
        {
          servicesinfo.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-start gap-6'>
              <img src={item.icon} className='size-24' alt='icons' />
              <h1 className='text-[26px] text-white font-semibold'>{item.title}</h1>
              <p className='text-[18px] text-slate-200'>{item.about}</p>
              <button className='text-limegreen font-bold text-[18px] flex justify-center items-center gap-3'>{item.label} <FaArrowRight /> </button>
            </div>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Services