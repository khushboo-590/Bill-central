import React, { useEffect } from 'react'
import { features } from '../utils/helper'
import thumps from '../assets/images/svg/thumps.svg'
import arror from '../assets/images/png/arror.png'
import CustomContent from './common/CustomContent'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Utilies = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, [])
    return (
        <section id="why-use">
            <header className='container max-w-[1140px] p-4 mx-auto flex-col flex justify-center items-center  pt-[40px] md:pt-[90px] lg:pt-[162px]'>
                <h2 className=' text-[30px] md:text-[48px] leaading-[110%] font-normal text-tranform:capitalize text-black text-center'>Why Choose Us for <span className='font-bold'>Utilities</span></h2>
                <CustomContent content="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!" className="max-w-[620px] text-black opacity-90 text-center pt-4  " />
                <div className="lg:grid lg:grid-cols-3 bg-white   mt-[58px] md:gap-6  mb-[40px] lg:mb-[162px] gap-0 " >
                    <div className="bg-[#003459] text-white p-3 md:p-6 flex flex-col justify-center lg:items-start space-y-4 rounded-[4px] w-full h-[400px] lg:h-[596px] lg:max-w-[424px] mx-auto items-center hover:scale-102 transition-all duration-200 ease-linear">
                        <img src={thumps} className=' w-[100px]  md:w-[180px] lg:w-[232px]'></img>
                        <h2 className="text-[24px] font-normal leading-[110%] pt-1 lg:pt-[30px]">Tailored Recommendations</h2>
                        <p className="text-base opacity-90 leading-[150%] font-normal md:pt-[10px] lg:max-w-[344px] lg:text-left  text-center">
                            Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.
                        </p>
                        <button className="lg:mt-[22px] bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-gray-200 transition mb-1">
                            <a href="#"> <img src={arror} className='cursor-pointer'></img></a>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  col-span-2   mt-5 lg:mt-0" >
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white  border-1 border-gray-300 hover:shadow-xl rounded-lg p-4 md:p-6 transition">
                                <div className="mb-4" data-aos="zoom-in">
                                        <img src={feature.img}></img></div>
                                <h3 className="font-medium text-[24px]  leading-[110%] text-[#010101] pt-[12px]">{feature.title}</h3>
                                <p className="text-base leading-[150%] font-normal pt-[12px] text-[#00171F] opacity-90">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    </div>

                </header>
        </section>
    )
}

export default Utilies
