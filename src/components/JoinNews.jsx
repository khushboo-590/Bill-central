import React from 'react'
import Custombtn from './common/Custombtn'
import { White_Arrow } from '../utils/icon'


const JoinNews = () => {
    return (
        <header className='container max-w-[1140px] mx-auto'>
            <div className="bg-[url(./assets/images/png/news.png)]  transform translate-y-[50%] p-4">
                <div className=' max-w-[620px] flex flex-col justify-center items-center mx-auto '>
                    <h2 className=' font-normal text-[48px] leading-[110%] text-center text-transform:capitalize text-black pt-[54px]'>Join Our<span className="font-bold"> Newsletter</span></h2>
                    <p className='pt-4 text-black text-center font-noraml text-base leading-[150%] opacity-90 pb-[42px]'>Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again.</p>
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
                            className="absolute top-1/2 -translate-y-1/2 right-[20px] text-white font-bold"
                        />
                    </label>


                </div>
            </div>

        </header>
    )
}

export default JoinNews




