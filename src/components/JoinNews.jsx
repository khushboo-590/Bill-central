import React, { useEffect } from 'react'
import Custombtn from './common/Custombtn'
import { White_Arrow } from '../utils/icon'
import CustomContent from './common/CustomContent'
import AOS from 'aos';
import 'aos/dist/aos.css'
import CustomHeading from './common/CustomHeading';
import CustomInput from './common/CustomInput';

const JoinNews = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
        AOS.refresh();
    }, [])
    return (
        <div data-aos="fade-up-right" >
            <div className="bg-[url(./assets/images/png/news.png)]  translate-y-[20%] transform lg:translate-y-[50%] p-4 container max-w-[1140px] mx-auto ">
                <div className=' max-w-[620px] flex flex-col justify-center items-center mx-auto '>
                    <CustomHeading headingClass="text-center pb-4 pt-4" headingtext="Join Our" headingSpan2="Newsletter" />
                <CustomContent content="Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again." className="pt-4 text-black opacity-90 pb-[38px] text-center" /></div>
                <div className="flex items-center relative max-w-[476px] mx-auto mb-[30px] md:mb-[50px]">
                    <CustomInput type="email" placeholder="Enter your email" />
                    <Custombtn btnClass="bg-[#007EA7] absolute z-2 right-[10px]" btnText="Submit" whiteArrow={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    } />
                </div>

            </div>
        </div>

    )
}

export default JoinNews




