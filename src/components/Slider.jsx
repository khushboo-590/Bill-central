import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {slides} from '../utils/helper' 


const Slider = () => {
    return (
         <section className="bg-white">
            <div className="container max-w-[1140px] mx-auto p-4">
                <h2 className="font-normal text-[30px] md:text-[38px] leading-[110%] text-[#003459] max-w-[548px] mt-[45px] text-center md:text-left ">
                    More than
                    <span className="text-[#00A8E8]"> 80,000+</span> companies trust bill central
                </h2>

                <Swiper
                    className=" mt-[20px] md:mt-[65px] mb-[30px] lg:mb-[162px]"
                    spaceBetween={50}
                    slidesPerView={6}
                    breakpoints={{
                        1024: { slidesPerView: 6, spaceBetween: 30 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        640: { slidesPerView: 3, spaceBetween: 10 },
                        320: { slidesPerView: 2, spaceBetween: 10 },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {slides.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <img src={src} alt={`Slide ${idx + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;



