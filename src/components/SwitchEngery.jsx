import React, { useEffect } from 'react'
import light from '../assets/images/png/light.png'
import Custombtn from './common/Custombtn'
import { White_Arrow } from '../utils/icon'
import AOS from 'aos';
import 'aos/dist/aos.css'
import CustomContent from './common/CustomContent';


const SwitchEngery = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, [])
    return (
        <section className='bg-white'>
            <div className='container max-w-[1140px] mx-auto flex flex-col items-center justify-center  p-4'>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[75px]'>
                    <div data-aos="slide-right">

                        <img src={light} className='mx-auto'></img>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className=' text-[38px] md:text-[48px]   text-[#1E1E1E] leading-[110%] lg:max-w-[409px] text-transform: capitalize; font-bold'>Switching Energy <span className='font-normal'>Made Simple</span> </h2>
                        <CustomContent content="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills." className="text-[00171F] opacity-90 mt-4 lg:max-w-[558px]"/>
                        <p className='text-[24px] leading-[110%] font-normal text-[#003459]  mt-[38px] text-transform: capitalize '>Benefits of Comparing Energy Plans</p>
                        <ul className='list-disc mt-4 ml-7'>
                            <li className='font-normal text-base  leading-[150%] text-[#00171F] '>Save money by finding cheaper deals.</li>
                            <li className='font-normal text-base  leading-[150%] text-[#00171F] mt-2'>Get better customer service.</li>
                            <li className='font-normal text-base  leading-[150%] text-[#00171F] mt-2'>Explore greener, more sustainable energy options.</li>
                        </ul>
                        <Custombtn btn={<>
                            Compare With Us   <White_Arrow />
                        </>} className='bg-[#00A8E8] max-w-[201px] text-white  font-bold  mt-[42px]   hover:border-1 border-[#00A8E8] hover:bg-white hover:text-[#00A8E8] ' />
                    </div>
                </div>


            </div>

        </section>
    )
}



export default SwitchEngery
