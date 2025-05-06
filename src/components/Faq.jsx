import { useState } from "react";
import React from 'react'
import { FaqData } from "../utils/helper";


const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container max-w-[916px]  mx-auto p-4">
            <h2 className="text-5xl font-normal text-center mb-4 leading-[110%] text-transform: capitalize">
                Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <p className="text-center text-black opacity-90 mb-6 text-base leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi.
            </p>
            <div className="space-y-[25px]">
                {FaqData.map((item, index) => (
                    <div
                        key={index}
                        className={`  shadow rounded ${openIndex === index ? "bg-[#003459] text-white" : "bg-white text-black"
                            }`}
                    >
                        <button  onClick={() => toggleFAQ(index)}  className="w-full text-left p-4 flex justify-between items-center"
                        >
                            <span className="text-2xl leading-[110%] font-normal">{item.question}</span>
                            {/* {openIndex === index ? <Minus size={20} /> : <Plus size={20} />} */}
                        </button>
                        {openIndex === index && (
                            <div className="px-4 pb-4 text-base leading-[150%] font-normal max-w-[722px]">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Faq

