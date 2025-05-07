import React from 'react'
import { footerLinks } from '../utils/helper'
import ini from '../assets/images/svg/in.svg'
import face from '../assets/images/svg/face.svg'
import cemra from '../assets/images/svg/cemra.svg'
import x from '../assets/images/svg/x.svg'
import billIcon from '../assets/images/png/bill.png'

const Footer = () => {
    return (
        <footer className="bg-[#022D52] text-white ">
            <div className=' container max-w-[1140px] mx-auto sm:pt-[234px] p-4 pt-[270px]'>
            <div className="flex flex-col md:flex-row justify-between gap-10 sm:justify-center">
                <div className="md:w-1/2">
                        <img src={billIcon }></img>
                   <p className="text-sm leading-[150%] mb-4 max-w-[297px] mt-[28px]  opacity-90">
                        Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium
                        maecenas ornare lacus arcu adipiscing.
                    </p>
                    <div>
                        <h4 className="font-bold mb-2 text-xl leading-[110%]">Follow Us</h4>
                        <div className="flex space-x-4 mt-4">
                                <img src={ini} className='hover:transform hover:scale-125 transition duration-300'></img>
                                <img src={face} className='hover:transform hover:scale-125 transition duration-300'></img>
                                <img src={cemra} className='hover:transform hover:scale-125 transition duration-300'></img>
                                <img src={x} className='hover:transform hover:scale-125 transition duration-300'></img>

                        </div>
                    </div>
                </div>

                <div className="flex gap-16 sm:w-1/2 md:justify-end">
                    <div>
                        <h4 className="text-xl font-bold mb-3 leading-[150%]">Quick Link</h4>
                            <ul className="space-y-2 ">
                            {footerLinks.quickLinks.map((link, index) => (
                                <li key={index} className='text-base font-normal leading-[18px]  opacity-90 text-transform:capitalize'>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-3 leading-[150%]">Services</h4>
                            <ul className="space-y-2 ">
                            {footerLinks.services.map((service, index) => (
                                <li key={index} className='text-base font-normal leading-[18px]  opacity-90 text-transform:capitalize'>
                                    <a href="#" className="hover:underline">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className=' border-1 border-gray-500 w-full mt-[56px] opacity-90'>
                <p className=' text-center justify-center items-center py-[20px] font-normal text-sm leading-[150%] opacity-90'>© 2024 BILL CENTRAL, Inc. All Rights Reserved.
</p>
            </div>
        </footer>
    )
}

export default Footer

