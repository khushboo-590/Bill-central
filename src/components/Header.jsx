import React from 'react'
import Navbar from './Navbar'
import girl from '../assets/images/png/girl.png'
import dots from '../assets/images/svg/dots.svg'
import Custombtn from './common/Custombtn'
import { White_Arrow } from '../utils/icon'

const Header = () => {
    return (
        <section className='bg-[url(./assets/images/png/blue-img.png)] bg-cover bg-center lg:h-[810px] sm:rounded-bl-[200px] h-none'>
            <Navbar />
            <div className='conatiner max-w-[1140px] mx-auto flex flex-col items-center justify-center  p-4'>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col  mt-[40px]  lg:mt-[122px]  '>
                        <h1 className='text-[40px] sm:text-[50px] lg:text-[60px] font-normal text-white leading-[110%] md:max-w-[506px]'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
                        <p className='text-white text-base  mt-4  font-noraml'> Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
                        <label className="relative flex items-center mt-4   lg:mt-[42px] max-w-[476px]">
                            <input type="text" id="text"
                                placeholder="Start typing your address"
                                className="w-[476px] px-[22px] py-[24px] rounded-[0px_100px_100px_20px] border-1 border-gray-300 text-gray-500  text-base font-normal leading-[17.6px]  bg-white"
                            />

                            <Custombtn btn={
                                <>
                                    Compare   <White_Arrow />
                                </>} className="absolute top-1/2 -translate-y-1/2 right-[20px] text-white font-bold  "></Custombtn>
                        </label>

                    </div>
                    <img src={girl} alt="Header Image" className='w-full  relative z-3 mt-[30px] lg:mt-[109px] lg:h-[706px] h-none' />
                    <img src={dots} alt="Header Image" className=' absolute right-[120px] mt-[53px] hidden lg:block ' />


                </div>
            </div>

        </section>
    )
}

export default Header
