import { useState, useEffect } from "react";
import React from 'react'
import { FaqData } from "../utils/helper";
import minus from '../assets/images/svg/-.svg'
import plus from '../assets/images/svg/+.svg'
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
            <div className="container max-w-[916px]  mx-auto p-4 pt-[40px] md:pt-[90px] lg:pt-[162px]">
                <h2 className=" text-4xl md:text-5xl font-normal text-center mb-4 leading-[110%] text-transform: capitalize">
                    Frequently Asked <span className="font-bold">Questions</span>
                </h2>
                <p className="text-center text-black opacity-90 mb-6 text-base leading-[150%] max-w-[556px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>
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

