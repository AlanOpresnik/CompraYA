import Image from 'next/image'
import React from 'react'

const YourFavCard = () => {
    return (
        <div className=' flex flex-col justify-center min-w-[180px]  md:w-[230px] bg-white rounded-xl shadow-sm hover:shadow-lg mb-12 '>
            <div className='flex border-b justify-center py-6'>
                <Image className='h-[180px] md:h-[205px] w-[225px] object-contain' width={100} height={100} src={'https://http2.mlstatic.com/D_NQ_NP_996739-MLU71522502542_092023-O.webp'} />
            </div>
            <div className='px-4 py-2'>
                <div className='bg-blue-500 w-fit px-2 rounded-md mb-1'>
                    <span className='text-white text-xs '>EN OFERTA</span>
                </div>
                <div className=''>
                    <span className='text-xl'>$129.000</span>
                </div>
                <div>
                    <span className='text-sm opacity-90'>Zte Blade A53 Plus 2GB Gris oscuro Ram 64 GB</span>
                </div>
                <div>
                    <span className='text-green-500 text-xs'>Nombre del vendedor</span>
                </div>
            </div>
        </div>
    )
}

export default YourFavCard