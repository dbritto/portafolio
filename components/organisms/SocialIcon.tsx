'use client'

import { useState, useEffect } from "react";
import NavLink from "./NavLink"
import Image from "next/image";
import { MdMenu, MdClose } from 'react-icons/md';



export default function SocialIcon() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setOpen(prev => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        isMobile ? setOpen(false) : setOpen(true);
    }, [isMobile]);


    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-10 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-white">
                        <a href="/" className="flex gap-2">
                            <div className="w-6 h-6 text-primary">
                                <Image src='/js.png' alt='logo js' width={20} height={20} />
                            </div>
                            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Daniel Britto</h2>
                        </a>
                    </div>

                    <NavLink isOpen={open} isMobile={isMobile} toggleMenu={toggleMenu} />

                    {isMobile && (
                        <div className="md:hidden">
                            <button className="text-white text-2xl" onClick={toggleMenu}>
                                {open ? <MdClose /> : <MdMenu />}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
