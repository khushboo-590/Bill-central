import React from 'react'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { items } from '../utils/helper'
import up from '../assets/images/svg/arrow.svg'
import down from '../assets/images/svg/arrow2.svg'
import accordianImg from '../assets/images/png/accodian-img.png'


const Accordian = () => {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
                AOS.refresh();
        
    }, []);
    return (
        <section id="services">
            <div className="container max-w-[1161px] mx-auto pt-[40px] lg:pt-[162px] p-4">
                <div className=" flex  lg:flex-row gap-[73px] flex-col-reverse">
                    <div className="flex-1 ">
                        <h2 className=" text-[38px] md:text-[48px] font-normal  leading-[110%] lg:max-w-[456px] text-transform:capitalize text-[#00171F] mb-[45px]">
                            Comprehensive Utility <span className="font-bold ">Comparisons</span></h2>
                        {items.map((item, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 rounded mb-[30px] p-[14px] cursor-pointer bg-white  hover:shadow-md w-full lg:max-w-[578px]"
                                onClick={() => toggle(i)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 rounded-[50px] bg-[#EAF9FF] hover:bg-[#003459] h-16 flex items-center justify-center"><img src={item.icon} className='hover:fill-white'></img></div>
                                        <h3 className=" text-[20px] sm:text-[24px] font-normal leading-[110%] text-[#00171F] opacity-90 max-w-[442px]">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setOpen(i)} >
                                        {open === i ? <img src={up} className=" cursor-pointer">
                                        </img> : <img src={down} className=" cursor-pointer "></img>}
                                    </button>
                                </div>
                                {open === i && item.description && (
                                    <p className="md:mt-2 text-base text-[#00171F] opacity-90 leading-[160%] font-normal ml-19">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex-1">
                        <div data-aos="fade-up">
                            <img src={accordianImg}
                                alt="Discussion"
                                className="w-full mt-[39px] "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordian





