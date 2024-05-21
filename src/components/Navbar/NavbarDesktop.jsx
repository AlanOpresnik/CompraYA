import { Avatar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Search from '../search/Search';

const NavbarDesktop = () => {
    return (
        <div className='grid grid-cols-3 gap-2   max-w-[1380px] mx-auto items-center'>
            <div>
                CompraYA
            </div>
            <div>
               <Search/>
                <div className='flex justify-between text-[0.80rem]  py-1 mt-1'>
                    <Link href={'/mis-compras'}>Ofertas</Link>
                    <Link href={'/mis-compras'}>Moda</Link>
                    <Link href={'/mis-compras'}>Historial</Link>
                    <Link href={'/mis-compras'}>Ayuda</Link>
                    <Link href={'/mis-compras'}>Vender</Link>
                </div>
            </div>
            <div className='flex items-center gap-6 text-sm justify-end'>
                <div className='flex items-center gap-1 text-sm'>
                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/foto-gratis/hombre-feliz-pie-playa_107420-9868.jpg?1" />
                    <p>Alan</p>
                </div>
                <div className='flex items-center gap-6'>
                    <Link href={'/mis-compras'}>Mis compras</Link>
                    <Link href={'/mis-compras'}>Favoritos</Link>
                    <Link href={'/mis-compras'}><LocalMallOutlinedIcon className='!font-thin' /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavbarDesktop