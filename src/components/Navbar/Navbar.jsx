
import React from 'react'

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
const Navbar = () => {

    return (
        <div className='w-full fixed top-0 z-50 py-2 md:py-2 main-color shadow '>
        <div className='block md:hidden'>
            <NavbarMobile/>
        </div>
        <div className='hidden md:block'>
            <NavbarDesktop/>
        </div>

        </div>
    )
}

export default Navbar