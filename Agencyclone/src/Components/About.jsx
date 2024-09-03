import React from 'react'
import about1 from '../assets/about.png'
import { FaChevronCircleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div>
        <motion.img viewport={{ once: true }} initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.4, delay: 0.2, ease: 'easeInOut'}}src={about1} className='lg:w-[1000px] lg:h-[550px]' alt="" />
      </div>
      <motion.div viewport={{ once: true }} initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.4, ease: 'easeInOut', delay: 0.4 }} className='flex flex-col justify-center items-start gap-4'>
        <h1 className='text-lime-500 text-[19px] font-semibold'>WHO WE ARE</h1>
        <h2 className='text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px]'>The leading social media marketting agency</h2>
        <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sed distinctio deleniti expedita magni ratione sapiente perspiciatis aperiam doloribus sunt?</p>
        <div className='flex flex-col justify-center items-start gap-4'>
          <p className='text-black flex justify-center items-center gap-4'><FaChevronCircleRight className='text-limegreen size-6' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quae!</p>
          <p className='text-black flex justify-center items-center gap-4'><FaChevronCircleRight className='text-limegreen size-6' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quae!</p>
          <p className='text-black flex justify-center items-center gap-4'><FaChevronCircleRight className='text-limegreen size-6' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quae!</p>
        </div>
        <button className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold hover:bg-black text-white'>Discover More</button>
      </motion.div>
    </section>
  )
}

export default About