import React, { useState } from 'react';
import Custombtn from './common/Custombtn';
import logo from '../assets/images/png/logo.png'
// import { ArrowIcon } from '../utils/helper';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" text-white px-4 py-[31px] ">
            <div className="container max-w-[1140px] mx-auto  flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-6 text-sm">
                    <a href="#" className="hover:underline font-normal text-base leading-[100%] ">About</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%] ">How it Works</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%] ">Services</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%] ">Testimonials</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%] ">Why Use</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%] ">FAQs</a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                   <Custombtn btn="Get started"className='bg-white  text-black font-bold '/>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-3 px-2 text-sm">
                    <a href="#" className="block hover:underline">About</a>
                    <a href="#" className="block hover:underline">How it Works</a>
                    <a href="#" className="block hover:underline">Services</a>
                    <a href="#" className="block hover:underline">Testimonials</a>
                    <a href="#" className="block hover:underline">Why Use</a>
                    <a href="#" className="block hover:underline">FAQs</a>
                    <a href="#" className="bg-white text-blue-900 px-4 py-2 rounded-full font-medium text-center hover:bg-gray-100 transition">
                        Get Started →
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
