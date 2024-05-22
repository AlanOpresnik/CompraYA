import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const InfoDividerCard = ({info}) => {
    return (
        <div className='border bg-white w-fit p-4 grid grid-cols-2 place-items-center max-w-[380px] md:max-w-[460px] rounded-lg shadow-md'>
            <div className=''>
                <h5 className='text-lg md:text-xl lg:text-2xl font-[500] border-b'>{info.title}</h5>
                <p className='text-sm py-2 opacity-80'>{info.description}</p>
                <Button variant='contained' size='small' className='mt-2'>Saber mas</Button>
            </div>
            <div>
                <Image className='rotate'  width={130} height={100} src={info.img} />
            </div> 
        </div>
    )
}

export default InfoDividerCard