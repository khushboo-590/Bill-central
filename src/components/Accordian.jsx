import React from 'react'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { items } from '../utils/helper'
import down from '../assets/images/svg/arrow2.svg'
import accordianImg from '../assets/images/png/accodian-img.png'
import CustomHeading from './common/CustomHeading';

const Accordian = () => {
    const [openAccordian, setOpenAccordian] = useState(null);
    const toggle = (index) =>
        setOpenAccordian(openAccordian === index ? null : index);
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[73px]">
                    <div className="flex-1 ">
                        <CustomHeading headClass="pb-11.5 lg:max-w-[558px] md:text-left text-center" headtext="Comprehensive Utility " headSpan2="Comparisons" />
                        {items.map((item,index ) => (
                            <div
                                className="border border-gray-200 rounded mb-[30px] p-[14px] cursor-pointer bg-white  hover:shadow-md w-full lg:max-w-[578px]"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 rounded-[50px] bg-[#EAF9FF] hover:bg-[#003459] h-16 flex items-center justify-center"><img src={item.icon} className='hover:fill-white'></img></div>
                                        <h3 className=" text-[20px] sm:text-[24px] font-normal leading-[110%] text-[#00171F] opacity-90 max-w-[442px]">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <button onClick={() => setOpenAccordian(index)}>
                                        <img
                                            src={down} 
                                            className={`cursor-pointer transition-transform duration-300 ease-in-out ${openAccordian === index ? 'rotate-180' : 'rotate-0'
                                                }`}
                                        />
                                    </button>
                                </div>
                                {openAccordian === index && item.description && (
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





