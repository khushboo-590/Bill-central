import React, { useState,useEffect } from 'react';
import Custombtn from './common/Custombtn';
import logo from '../assets/images/png/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <nav className="text-white px-4 py-[31px] relative z-50">
            <div className="container max-w-[1140px] mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" />
                </div>
                <div onClick={toggleMenu} className="md:hidden cursor-pointer z-10 flex flex-col gap-1">
                    <span className={`bg-white block w-6 h-1 transition-all duration-300 ${isOpen && "rotate-45 translate-y-[8px]" }`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isOpen && "opacity-0" }`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isOpen && "-rotate-45 -translate-y-[8px]"}`}></span>
                </div>
                <div className="hidden md:flex items-center space-x-6 text-sm">
                    <a href="#" className="hover:underline font-normal text-base leading-[100%]">About</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%]">How it Works</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%]">Services</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%]">Testimonials</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%]">Why Use</a>
                    <a href="#" className="hover:underline font-normal text-base leading-[100%]">FAQs</a>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Custombtn btn="Get started" className="bg-white text-black font-bold" />
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 px-2 text-sm bg-black pb-4  justify-center items-center fixed inset-0 ">
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
