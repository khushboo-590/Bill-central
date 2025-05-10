import { useState, useEffect } from "react";
import React from 'react'
import { FaqData } from "../utils/helper";
import minus from '../assets/images/svg/-.svg'
import plus from '../assets/images/svg/+.svg'
import CustomHeading from "./common/CustomHeading";
import CustomContent from "./common/CustomContent";
import AOS from 'aos';
import 'aos/dist/aos.css'


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
        AOS.refresh();
    }, []);
    return (
        <section id="faqs">
            <div className="container max-w-[916px]  mx-auto p-4 pt-[40px] md:pt-[90px] lg:pt-[162px] ">
                <div className=" flex flex-col justify-center items-center mx-auto ">
                <CustomHeading headClass=" text-center sm:text-left justify-center mx-auto" headtext="Frequently Asked" headSpan2="Questions" /></div>
                <CustomContent content="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
" className="text-[00171F] opacity-90 mt-4 lg:max-w-[556px] text-center mx-auto " />

                <div data-aos="flip-left">
                    <div className="space-y-4 mt-[52px]">
                        {FaqData.map((item, index) => (
                            <div
                                key={index}
                                className={`shadow-lg rounded ${openIndex === index ? "bg-[#003459] text-white" : "bg-white text-black"}`}>
                                <button onClick={() => toggleFAQ(index)} className="w-full text-left  p-[24px] flex justify-between items-center">
                                    <span className=" text-xl md:text-2xl leading-[110%] font-normal ">{item.question}</span>
                                    {openIndex === index ? <img src={minus} alt="minus" className="transition-transform duration-700 transform rotate-180 cursor-pointer"
                                    /> : <img src={plus} alt="plus" className="transition-transform duration-700 transform cursor-pointer" />}
                                </button>
                                {openIndex === index && (
                                    <div className="px-4 pb-4 text-base leading-[150%] font-normal max-w-[722px] ml-3">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Faq

