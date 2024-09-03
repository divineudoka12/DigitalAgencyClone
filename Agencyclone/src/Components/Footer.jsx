import React from 'react'
import { FaMapMarkedAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoIosMailOpen } from 'react-icons/io'
import { IoTime } from 'react-icons/io5'

const Footer = () => {

  return (
    <>
      <section className='w-full bg-black m-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-28 lg:p-20 p-10'>
        <div className='flex flex-col justify-center items-start gap-10'>
          <h1 className='text-white font-semibold text-[40px] leading-[50px]'>
            Let's start working together get in touch!
          </h1>
          <button className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold hover:bg-white hover:text-black'>Get Started Now</button>
        </div>

        <div className=' flex flex-col justify-center items-st gap-10'>
          <h1 className='text-white text-2xl font-semibold'>Contact Information</h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className='flex justify-center items-center gap-3 text-white'><FaMapMarkedAlt className='text-limegreen size-8' />374 William S Canning Blvd, Fall River NA 2721, USA</p>
            <p className='flex justify-center items-center gap-3 text-white'><FaPhoneVolume className='text-limegreen size-8' />+2349045988451</p>
            <p className='flex justify-center items-center gap-3 text-white'><IoIosMailOpen className='text-limegreen size-8' />support@webpage.com</p>
            <p className='flex justify-center items-center gap-3 text-white'><IoTime className='text-limegreen size-8' />10:00 - 17:00</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className='text-white text-2xl font-semibold'>Subscribe Newsletter</h1>
          <p className='text-[16px] text-slate-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, maiores.</p>
          <div className=' flex flex-col justify-center items-start gap-6 w-full'>
            <input type="email" placeholder='Enter Your Valid email' className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none text-white" />
            <button className='bg-limegreen px-6 py-6 rounded-xl text-[17px] font-semibold hover:bg-white hover:text-black'>Subscribe Now</button>
          </div>
        </div>
      </section>

      <section className="w-full bg-black m-auto border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6">
        <div>
          <h1 className='text-white text-[17px] text-center'>Copyright 2024, webpluse, All Rights Reserved</h1>
        </div>
        <div>
          <p className="text-white text-3xl text-center font-bold">Web <span className="text-limegreen italic">Pluse</span></p>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-4">
          <FaFacebook className='text-limegreen size-6'/>
          <FaTwitter className='text-limegreen size-6'/>
          <FaInstagram className='text-limegreen size-6'/>
          <FaYoutube className='text-limegreen size-6'/>
        </div>
      </section>
    </>
  )
}

export default Footer