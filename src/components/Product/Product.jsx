'use client'
import { ProductsContext } from '@/context/ProductsContext'
import { Favorite, FavoriteBorder, FavoriteBorderOutlined } from '@mui/icons-material'
import { Button, Rating } from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import YourFav from '../YourFav/YourFav'

const Product = () => {
    const [activeThumb, setActiveThumb] = useState();
    const params = useParams()
    const { product, getProductById } = useContext(ProductsContext)
    useEffect(() => {
        getProductById(params.id)
    }, [])

    return (
        <div className="bg-white pt-16">
            <div className="p-5 md:p-6 lg:max-w-[1280px] max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="w-full lg:sticky top-[120px] sm:flex gap-2">
                        <div className="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                            <Image width={100} height={100} src={product.image} alt="Product1" className="w-full  hidden md:flex cursor-pointer border-2 border-black rounded-sm outline" />

                        </div>
                        <div className='flex justify-center items-center mb-2 pt-2'>
                            <Image src={product.image} width={400} height={100} alt="Product" className="w-4/5 flex justify-center rounded object-cover" />
                        </div>
                    </div>

                    <div className='max-w-[450px] relative'>
                        <p className='text-green-500 text-sm mb-3'>Stock Disponible</p>
                        <FavoriteBorderOutlined className='absolute top-0 right-0 text-3xl text-blue-500' />
                        <h2 className="text-2xl font-extrabold text-gray-800 mt-4 md:mt-0">{product.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">${product.price}</p>
                        </div>
                        <div className='flex items-end gap-2'>

                            <Rating size='small' className='mt-4' value={Number(product.rating?.rate)} readOnly />
                            <span className='text-sm'>{product.rating?.rate}</span>
                        </div>
                        <p className='text-sm mt-4'>Vendedor: <span className='text-blue-500'>Alan Opresnik</span></p>
                        {  /* <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                    <div className="flex flex-wrap gap-4 mt-4">
                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">SM</button>
                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">MD</button>
                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">LG</button>
                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">XL</button>
                    </div>
                    <button type="button" className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded">Add to cart</button>
                </div>
*/}
                        <div className="mt-4">
                            <h3 className="text-lg font-bold text-gray-800">Sobre el Producto</h3>
                            <p className='text-sm'>{product.description}</p>
                        </div>
                        <div>
                            <p className='mt-4 font-semibold md:pl-1'>Cantidad:</p>
                            <div className='border w-fit  rounded-full mt-2'>
                                <Button className='!text-gray-800 text-xl rounded-full'>+</Button>
                                <Button className='!text-black '>1</Button>
                                <Button className='!text-gray-800 text-xl rounded-full'>-</Button>
                            </div>
                        </div>
                        <div className="mt-0 max-w-md flex gap-4">
                            <Button type="button" className="w-full rounded-full md:rounded-xl mt-8 px-4 py-2 bg-transparent border-2 !bg-blue-500 border-gray-800 text-white font-bold">Agregar al carrito</Button>


                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1280px] px-5 mt-24 md:mx-auto'>
                <p>PREGUNTAS DEL PRODUCTO</p>
            </div>
            <div className='mt-24 max-w-[1280px] px-5 md:mx-auto '>
                <p className='text-xl mb-6'>Productos que podrian interesarte</p>
                <YourFav />
            </div>
        </div>
    );
}

export default Product