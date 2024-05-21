import Image from 'next/image'
import React from 'react'
const OpcionesCard = ({ opcion }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className=''>
                <Image className='bg-white rounded-full' width={100} height={100} alt={opcion.title} src={opcion.img} />
            </div>
            <div className='max-w-[120px] mt-2 text-center'>
                <p className='text-xs font-bold'>{opcion.title}</p>
            </div>
        </div>
    )
}

export default OpcionesCard