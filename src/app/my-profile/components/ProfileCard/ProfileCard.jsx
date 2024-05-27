import { EditOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='bg-white p-9 w-[700px] rounded-lg '>
            <div className='flex gap-6'>
                <Avatar className='w-[80px] h-[80px]' alt="Remy Sharp" src="https://img.freepik.com/foto-gratis/hombre-feliz-pie-playa_107420-9868.jpg?1" />
                <div className=''>
                    <h4 className='font-semibold text-xl mb-1'>Alan Opresnik</h4>
                    <p className='text-sm opacity-55'>Alanopk328@gmail.com</p>
                    <p className='text-xs mt-2 font-semibold text-blue-500'>Editar Informacion de la cuenta</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard