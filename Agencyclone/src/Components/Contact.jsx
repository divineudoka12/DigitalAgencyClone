import React from 'react'
import contactimg from '../assets/contact.png'

const Contact = () => {
  return (
    <section className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div className='lg:w-[50%] w-full'>
        <img src={contactimg} alt="contactimg" />
      </div>

      <div className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8 rounded-3xl'>
        <h1 className='text-white text-[45px] font-semibold'>Let's talk your project</h1>
        <div id='form-box' className='w-full bg-transparent flex flex-col justify-center items-center gap-4'>
          <input type="text" className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none" placeholder='Enter your full name here' />
          <div className='w-full flex justify-center items-start gap-4'>
            <input type="email" placeholder='Enter your email here' className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none" />
            <input type="number" placeholder='Enter your mobile number here' className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none" />
          </div>

          <textarea name="" id="" placeholder='Enter your message' rows="4" className='w-full bg-slate-900 px-6 py-4 rounded-lg border-none"'></textarea>
          <button className='bg-limegreen px-6 py-4 w-full rounded-md font-semibold text-md'>Submit Now</button>
        </div>
      </div>
    </section>
  )
}

export default Contact