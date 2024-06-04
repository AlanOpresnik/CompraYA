import { PersonOutlineOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardConfigurationProfile = () => {
    const cards = [
        {
            title: "Datos de la cuenta",
            desc: "Datos como el Nombre, Apellido y correo de una cuenta",
            icon: "https://cdn-icons-png.freepik.com/512/10542/10542848.png",
            path: "/my-profile/change-data-account",
        },
        {
            title: "Direcciones",
            desc: "Direccion de entrega de la cuenta",
            icon: "https://cdn-icons-png.flaticon.com/512/7874/7874026.png",
            path: "/my-profile/change-direction-account",
        },
        {
            title: "Historial de compras",
            desc: "Todas las compras realizadas en la aplicacion",
            icon: "https://cdn-icons-png.freepik.com/512/10149/10149315.png",
            path: "/my-profile/change-direction-account",
        },

    ]
    return (
        <div className='bg-white p-9 max-w-[700px] lg:w-[700px] rounded-lg  mt-12 '>
            {cards.map((card => (
                <Link href={card.path} key={card.title} className='flex items-center gap-6 mb-12 last-of-type:mb-0 relative '>
                    <div className='rounded-full w-fit h-full border p-2 flex items-center '>
                        <Image className='object-contain min-w-[30px]' width={30} height={30} src={card.icon} alt={card.desc} />
                    </div>
                    <div className=''>
                        <h4 className='font-semibold'>{card.title}</h4>
                        <p className='text-sm opacity-55'>{card.desc}</p>
                    </div>
                    <div className='absolute right-[-20px] top-[0.75rem] text-2xl opacity-50'>{">"}</div>
                </Link>
            )))}
        </div>
    )
}

export default CardConfigurationProfile