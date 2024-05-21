'use client'
import YourFavCard from './YourFavCard'
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const YourFav = () => {
    return (
        <div>
            <h4 className='text-xl md:text-2xl mb-6'>Algunas de nuestras OFERTAS ❤️</h4>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                      slidesPerView: 1.5,
                      navigation:true
                    },
                    400: {
                      slidesPerView: 2,
                    },
                    500: {
                      slidesPerView: 2.1,
                    },
                    550: {
                        slidesPerView: 2.5,
                    },
                    660: {
                      slidesPerView: 2.8,
                    },
                    768: {
                      slidesPerView: 3.2,
                    },
                    820: {
                      slidesPerView: 3.5,
                    },
                    1022: {
                      slidesPerView: 4,
                    },
                    1300: {
                      slidesPerView: 5,
                    },
                  }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>
                <SwiperSlide><YourFavCard /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default YourFav


