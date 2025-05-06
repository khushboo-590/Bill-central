import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules'
import { silderData } from '../utils/helper'
const Testimonls = () => {
  return (
      <header>
          <div className=' container max-w-[1240px] mx-auto flex flex-col justify-center items-center'>
              <h2 className='text-black font-normal text-5xl leading-[110%]'>Our <span className='font-bold'> Testimonials</span></h2> 
        <p className='max-w-[490px] text-black opacity-90 font-normal text-base leading-[150%] pt-4 pb-[64px] text-center'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
        <Swiper
          className=""
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          // breakpoints={{
          //   640: { slidesPerView: 3, spaceBetween: 10 },
          //   320: { slidesPerView: 2, spaceBetween: 10 },
          // }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {silderData.map((item, index) => (
          <SwiperSlide key={index} className='bg-white max-w-[364px] border-1 border-gray-300 p-[20px] rounded-[4px]'>
            <div className='flex gap-4 items-center'>
              <img src={item.img}></img>
              <div className=''>
                <p className='text-black text-2xl leading-[150%]  font-normal'>{ item.name}</p>
                <p className='text-black text-base leading-[150%]  font-normal opacity-50'>{ item.post}</p>
              </div>

              </div>
              <img src={item.group} className='mt-[24px]'></img>
              <p className='text-black text-base leading-[150%]  font-normal opacity-90 max-w-[384px] mt-[18px]'>{ item.content}</p>



           </SwiperSlide>

        ))}
        </Swiper>

          </div>
    </header>
  )
}

export default Testimonls



