'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const breakpoint = 640;

    useEffect(() => {
        const handleResize = () => {
            const isHalfScreen = window.innerWidth <= window.screen.width / 2;
            setIsMobile(window.innerWidth < breakpoint);
            setIsVisible(!isHalfScreen);
            setIsSidebarVisible(!isHalfScreen);
        };

        const handleScroll = () => {
            if (isMobile) {
                if (window.scrollY > 50) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent z-50">
            <nav className="container mx-auto p-4 flex items-center justify-between">
                <div className={`flex items-center sm:ml-[-40px] sm:mt-[-120px] mt-[50px] justify-center w-full sm:justify-start transition-opacity duration-300 ${isVisible || !isMobile ? 'opacity-100' : 'opacity-0'}`}>
                    <a href="/">
                        <img src="../images/icon.png" alt="Logo" className="h-12 w-auto" />
                    </a>
                </div>

                {isSidebarVisible && (
                    <ul className="hidden sm:flex flex-col items-end space-y-4 sm:mt-3 sm:mr-[-20px] font-geist text-lg text-white text-end">
                        <li>
                            <Link href="/" className="text-white hover:text-white visited:text-white">Home</Link>
                        </li>
                        <li>
                            <Link href="#about" className="text-white hover:text-white visited:text-white">About</Link>
                        </li>
                        <li>
                            <Link href="#team" className="text-white hover:text-white visited:text-white">Team</Link>
                        </li>
                        <li>
                            <Link href="#join-us" className="text-white hover:text-white visited:text-white">Join Us</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
