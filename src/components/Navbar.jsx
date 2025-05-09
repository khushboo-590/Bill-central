
import React, { useState, useEffect } from 'react';
import Custombtn from './common/Custombtn';
import logo from '../assets/images/svg/bl.svg';
import { Up_Arrow } from '../utils/icon'
import { navLinks } from '../utils/helper';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <header className="text-white px-4 py-6 relative z-50">
            <div className="container max-w-[1140px] mx-auto flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-8" />
                <nav className="hidden lg:flex items-center space-x-6 text-sm">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href}
                            className="hover:underline font-normal text-base leading-[100%] opacity-90" >
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="hidden lg:flex items-center space-x-4">
                    <Custombtn btn=
                        "Get Started"
                     className="bg-white text-black font-bold hover:bg-black hover:text-white " />
                </div>

                <div onClick={toggleMenu} className="lg:hidden cursor-pointer z-10 flex flex-col gap-1"  >
                    <span className={`bg-white block w-6 h-1 transition-all duration-300 ${isOpen && 'rotate-45 translate-y-2' }`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isOpen && 'opacity-0'}`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isOpen && '-rotate-45 -translate-y-2'}`}></span>
                </div>
            </div>
            {isOpen && (<nav className="lg:hidden flex flex-col space-y-3 px-4 text-sm bg-[#003459]/80 backdrop-blur-md pb-4 justify-center items-center fixed inset-0">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href}
                            className="block hover:underline text-white text-lg"
                        >{link.name}</a>
                    ))}
                    <Custombtn btn="Get Started "
                    className="bg-white text-black font-bold hover:bg-black hover:text-white " />
                </nav>
            )}
        </header>
    );
};

export default Navbar;
