'use client'
import React, { useEffect, useState } from 'react'

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
const Navbar = () => {
    const [mobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='w-full fixed top-0 z-50 py-2 md:py-2 main-color shadow '>
            {mobile ? (
                <NavbarMobile />
            ) : (
                <NavbarDesktop />
            )}

        </div>
    )
}

export default Navbar