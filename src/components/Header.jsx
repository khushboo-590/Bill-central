import React, { useEffect} from 'react'
import Navbar from './Navbar'
import girl from '../assets/images/png/girl.png'
import dots from '../assets/images/svg/dots.svg'
import Custombtn from './common/Custombtn'
import { White_Arrow } from '../utils/icon'
import AOS from 'aos';
import 'aos/dist/aos.css'
import CustomContent from './common/CustomContent'

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: true,     
        });
    }, [])
    return (
        <section className='bg-[url(./assets/images/png/blue-img.png)] bg-cover bg-center lg:h-[810px] md:rounded-bl-[200px] h-none'>
            <Navbar />
            <div className='conatiner max-w-[1140px] mx-auto flex flex-col items-center justify-center  p-4'>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col  mt-[40px]  lg:mt-[122px]  '>
                        <h1 className='text-[40px] sm:text-[50px] lg:text-[60px] font-normal text-white leading-[110%] md:max-w-[506px]'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
                        <CustomContent content="Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place." className="text-white mt-4 opacity-90"/>
                        <label className="relative flex items-center mt-4   lg:mt-[42px] max-w-[476px]">
                            <input type="text" id="text"
                                placeholder="Start typing your address"
                                className="w-[476px] px-[22px] py-[24px] rounded-[0px_100px_100px_20px] border-1 border-gray-300 text-gray-500  text-base font-normal leading-[17.6px]  bg-white"
                            />

                            <Custombtn btn={
                                <>
                                    Compare   <White_Arrow />
                                </>} className="absolute top-1/2 -translate-y-1/2 right-[10px] text-white font-bold bg-[#00A8E8]  hover:border-1 border-[#00A8E8] hover:bg-white hover:text-[#00A8E8] "></Custombtn>
                        </label>

                    </div>
                    <div data-aos="zoom-in-up" className='relative z-20'>
                        <img src={girl} alt="Header Image" className='w-full  relative z-3 mt-[30px] lg:mt-[109px] lg:h-[706px] h-none ' /></div>
                    <img src={dots} alt="Header Image" className=' absolute right-[120px] mt-[53px] hidden xl:block z-0 ' />


                </div>
            </div>

        </section>
    )
}

export default Header
