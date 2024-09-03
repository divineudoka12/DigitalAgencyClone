import React from 'react'
import { counts } from '../export'
import {motion} from 'framer-motion'

const Counter = () => {
  return (
    <section className='w-[90%] m-auto lg:flex-row flex-col justify-between items-center gap-28 py-10'>
      <motion.div viewport={{ once: true }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duraton: 0.4, delay: 0.2, ease: 'easeInOut' }} className='bg-black w-full lg:p-20 p-10 flex lg:flex-row flex-col justify-between items-center gap-20 rounded-3xl'>
        {
          counts.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-center gap-6'>
              <h1 className='text-limegreen text-7xl font-semibold'>{item.value}</h1>
              <p className='text-white text-xl font-semibold'>{item.title}</p>
            </div>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Counter