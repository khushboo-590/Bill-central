import React,{useEffect} from 'react'
import Custombtn from './common/Custombtn'
import { White_Arrow } from '../utils/icon'
import CustomContent from './common/CustomContent'
import AOS from 'aos';
import 'aos/dist/aos.css'

const JoinNews = () => {
     useEffect(() => {
                AOS.init({
                    duration: 3000, 
                    once: true,     
                });
            }, [])
    return (
          <div data-aos="fade-up-right">
            <div className="bg-[url(./assets/images/png/news.png)]  translate-y-[20%] transform lg:translate-y-[50%] p-4 container max-w-[1140px] mx-auto">
                <div className=' max-w-[620px] flex flex-col justify-center items-center mx-auto '>
                    <h2 className=' font-normal text-[48px] leading-[110%] text-center text-transform:capitalize text-black pt-[54px]'>Join Our<span className="font-bold"> Newsletter</span></h2>
                    <CustomContent content="Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again." className="pt-4 text-black opacity-90 pb-[42px] text-center"/>
                    <label className="relative flex items-center w-full max-w-[476px]  px-4 sm:px-0 mb-[54px]">
                        <input
                            type="text"
                            id="text"
                            placeholder="Email your email"
                            className="w-full px-[22px] py-[24px] rounded-[0px_100px_100px_20px] border border-gray-300 text-gray-500 text-base font-normal leading-[17.6px] bg-white"
                        />
                        <Custombtn
                            btn={
                                <>
                                    submit   <White_Arrow />
                                </>}
                            className="absolute top-1/2 -translate-y-1/2 right-[22px]  sm:right-[10px] text-white font-bold bg-[#00A8E8]  hover:border-1 border-[#00A8E8] hover:bg-white hover:text-[#00A8E8] "
                        />
                    </label>

</div>
                </div>
            </div>

    )
}

export default JoinNews




