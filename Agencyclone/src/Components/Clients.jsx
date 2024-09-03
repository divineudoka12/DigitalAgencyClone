import React from 'react'
// import Slider from "react-slick"
import testimonyy from '../assets/testimonial.png'
import { FaQuoteLeft } from 'react-icons/fa'
import {testidata} from '../export'
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const Clients = () => {

  // const settings = {
  //   dots: true, 
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false
  // };

  return (
    <section className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div className='lg:w-[50%] w-full'>
        <img src={testimonyy} alt="testimonial" className='lg:w-[1000px] lg:h-[550px]' />
      </div>
      <div className='ig:w-[50%] w-full flex flex-col justify-center lg:items-start items-center gap-4'>
        <h1 className='text-lime-500 text-[19px] font-semibold'>
          TESTIMONIAL
        </h1>
        <h1 className='text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] text-center'>
          What Our Client Says
        </h1>

        <div className='w-full mt-10'>
        {/* <Slider {...settings}> */}
          {
            testidata.map((item, index) => (
              <div key={index}>
                <div className='w-full flex justify-between items-start gap-6'>
                  <div>
                    <div className='bg-black p-6 rounded-full'>
                      <FaQuoteLeft className='text-limegreen size-{35px}'/>
                    </div>
                  </div>

                  <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='text-justify text-xl'>{item.review}</p>
                    <div>
                      <h1 className='text-black font-semibold text-[25px]'>{item.name}</h1>
                      <p className='text-lg'>{item.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          {/* </Slider> */}
        </div>

      </div>
    </section>
  )
}

export default Clients