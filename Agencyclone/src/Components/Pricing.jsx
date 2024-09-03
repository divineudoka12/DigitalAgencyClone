import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { pricingplan } from '../export'

const Pricing = () => {
  return (
    <section className='w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-20]'>
      <motion.h1 viewport={{ once: true }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duraton: 0.4, delay: 0.2, ease: 'easeInOut' }} className='text-lime-500 text-[19px] font-semibold'>PRICING PLAN</motion.h1>
      <motion.h1 viewport={{ once: true }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duraton: 0.4, delay: 0.4, ease: 'easeInOut' }} className='text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[50px] text-center'>choose your perfect plan</motion.h1>

      <motion.div viewport={{ once: true }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duraton: 0.4, delay: 0.6, ease: 'easeInOut' }} className='w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-10'>
        {
          pricingplan.map((item, index) => (
            <div key={index} className='bg-black p-10 rounded-3xl flex flex-col justify-center items-start gap-3 ig:w-[35%] w-full'>
              <h1 className='text-white text-2xl font-semibold'>{item.type}</h1>
              <p className='text-white text-lg'>{item.about}</p>
              <h2 className='text-limegreen font-bold text-[55px]'>{item.price}<span className='text-limegreen text-lg pl-2'>Monthly</span></h2>
              <button className='w-full bg-limegreen font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white hover:text-black'>{item.label}</button>
              <p className='text-white text-lg font-semibold'>{item.specs}</p>
              <div className='flex flex-col justify-center items-start gap-4'>
                <p className='text-white flex justify-center items-center gap-4'><FaChevronCircleRight className='text-limegreen size-6' />Powerful admin panel</p>
                <p className='text-white flex justify-center items-center gap-4'><FaChevronCircleRight className='text-limegreen size-6' />Native andriod app</p>
                <p className='text-white flex justify-center items-center gap-4'><FaChevronCircleRight className='text-limegreen size-6' />Multi language support</p>
                <p className='text-white flex justify-center items-center gap-4'><FaChevronCircleRight className='text-limegreen size-6' />24/7 support team here</p>
              </div>
            </div>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Pricing