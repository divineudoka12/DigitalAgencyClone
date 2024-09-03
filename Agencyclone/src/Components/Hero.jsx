import React from 'react'
import herobanner from '../assets/herobanner.png'
import clients from '../assets/clients.png'
import { motion} from 'framer-motion'

const Hero = () => {


    return (
        <section className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
            <div className='flex flex-col justify-center items-start gap-8'>
                <motion.h1 viewport={{once: true}} initial={{scale:0}} whileInView={{scale:1}} transition={{duration: 0.4, ease: 'easeInOut'}} className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px]'>Social Media Marketing</motion.h1>
                <motion.p viewport={{once: true}} initial={{scale:0}} whileInView={{scale:1}} transition={{duration: 0.4, ease: 'easeInOut', delay: 0.4 }} className='text-[20px]'>We design exceptional brands, products, web apps, <br /><br /> websites for startups and enterprises.</motion.p>
                <motion.button viewport={{once: true}} initial={{scale:0}} whileInView={{scale:1}} transition={{duration: 0.4, ease: 'easeInOut', delay: 0.6 }} className='bg-limegreen px-6 py-6 rounded-full text-[17px] font-semibold hover:bg-black hover:text-white'>Get Started</motion.button>
                <motion.div viewport={{once: true}} initial={{scale:0}} whileInView={{scale:1}} transition={{duration: 0.4, ease: 'easeInOut', delay: 0.6 }} className='flex flex-col lg:flex-row justify-center lg:items-center items-start gap-10'>
                    <img src={clients} alt="" />
                    <p className='text-[20px] font-bold'>Trusted over 5000+ Worldwide Brand & Customers</p>
                </motion.div>
            </div>
            <div>
                <motion.img viewport={{once: true}} initial={{scale:0}} whileInView={{scale:1}} transition={{duration: 0.4, ease: 'easeInOut', delay: 1 }} src={herobanner} className='lg:w-[750px] h-[550px]' alt="" />
            </div>
        </section>
    )
}

export default Hero