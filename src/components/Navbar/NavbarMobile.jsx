'use client'
import React, { useState } from 'react'
import Search from '../search/Search'

import { ShoppingBagOutlined } from '@mui/icons-material'
import Hamburger from 'hamburger-react'
import { Avatar, Button } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';

const NavbarMobile = () => {
    const paginas = [
        {
            icon: <HomeOutlinedIcon />,
            title: "Inicio",
            path: "/"
        },
        {
            icon: <NotificationsActiveOutlinedIcon />,
            title: "Notificaciones",
            path: "/notificaciones"
        },
        {
            icon: <ShoppingCartOutlinedIcon />,
            title: "Mis Compras",
            path: "/orders"
        },
        {
            icon: <FavoriteBorderOutlinedIcon />,
            title: "Favoritos",
            path: "/favoritos"
        },
        {
            icon: <InfoOutlinedIcon />,
            title: "Ayuda",
            path: "/ayuda"
        },
        {
            icon: <AccountCircleOutlinedIcon />,
            title: "Mi cuenta",
            path: "/mi-cuenta"
        },
    ]

    const recomendados = [
        {
            icon: <AddReactionOutlinedIcon />,
            title: "Moda",
            path: "/moda"

        },
        {
            icon: <AutoGraphOutlinedIcon />,
            title: "Mas Vendidos",
            path: "/mas-vendidos"

        },
        {
            icon: <AttachMoneyOutlinedIcon />,
            title: "Vender",
            path: "/vender"

        },
        {
            icon: <AttachMoneyOutlinedIcon />,
            title: "Cerrar sesion",
            path: "/api/auth/logout"

        },

    ]
    const [isOpen, setOpen] = useState(false)
    const { data } = useSession()
    return (
        <>
            <div className='flex  justify-between items-center px-4 gap-6'>
                <div>
                    <h1>CompraYA</h1>
                </div>
                <div>
                    <Search />
                </div>
                <div>
                    <div className='flex  gap-4 items-center'>
                        <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
                        <ShoppingBagOutlined />
                    </div>
                </div>
            </div>
            {isOpen && (
                data ? (
                    <div className=' '>

                        <div className='px-6'>
                            <Link href={'/my-profile'} className='flex  mt-4 items-center borde  py-2  mx-auto gap-1 text-sm'>
                                <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src={data.user?.image} />
                                <div className='flex flex-col gap-0 '>
                                    <p className='text-xl leading-5 ml-1 font-semibold'>{data.user?.name}</p>
                                    <span className='text-xs ml-1'>Mi perfil {'>'}</span>
                                </div>
                            </Link>
                            <div className='w-full py-4'>
                                <Button className='rounded-btn  font-[700] w-full h-[55px]' variant='contained'>Hacete Vendedor</Button>
                            </div>
                        </div>


                        <div className='overflow-y-scroll h-[800px]'>
                            <div className='bg-white w-full  px-6 border top-[9px] relative'>
                                <nav>
                                    <ul className=' flex flex-col gap-6 py-6'>
                                        {paginas.map((pagina, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <Link href={pagina.path}> {pagina.icon}</Link>
                                                <Link href={pagina.path}> {pagina.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className='bg-white w-full h-[400px]  px-6 border top-[9px] relative'>
                                <nav className=''>
                                    <ul className=' flex flex-col gap-6 py-6'>
                                        {recomendados.map((recomendado, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <Link href={recomendado.path}> {recomendado.icon}</Link>
                                                <Link href={recomendado.path}> {recomendado.title}</Link>
                                            </li>

                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                ) :
                    <>
                        <div className='px-8 main-color flex flex-col justify-between mt-2 h-[100px]'>
                            <div className='flex gap-2 items-center'>
                                <Avatar sx={{ width: 50, height: 50 }} alt="CompraYA avatar" src={"a"} />
                                <div className='mt-2'>
                                    <p className='text-xl leading-3'>Bienvenido</p>
                                    <p className='opacity-50'>Accede a tu cuenta para ver tus compras</p>
                                </div>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <div className='flex  items-center gap-1'>
                                    <LoginIcon /> <Link href={'/login'}>Iniciar sesion</Link>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <PersonIcon /> <Link href={'/register'}>Crear cuenta/</Link>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-y-scroll h-[800px]'>
                            <div className='bg-white w-full  px-6 border top-[9px] relative'>
                                <nav>
                                    <ul className=' flex flex-col gap-6 py-6'>
                                        {paginas.map((pagina, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <Link href={pagina.path}> {pagina.icon}</Link>
                                                <Link href={pagina.path}> {pagina.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className='bg-white w-full h-[400px]  px-6 border top-[9px] relative'>
                                <nav className=''>
                                    <ul className=' flex flex-col gap-6 py-6'>
                                        {recomendados.map((recomendado, index) => (
                                            <li className='flex gap-2 items-center' key={index}>
                                                <Link href={recomendado.path}> {recomendado.icon}</Link>
                                                <Link href={recomendado.path}> {recomendado.title}</Link>
                                            </li>

                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </>
            )}
        </>
    )
}

export default NavbarMobile