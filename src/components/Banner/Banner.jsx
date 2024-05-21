'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-12 md:mt-20">
                <SwiperSlide className='image-gradient'>
                    <Image className='w-full h-[300px] md:h-[600px] ' width={1300} height={100} src={'/banner.png'} />
                </SwiperSlide>
                <SwiperSlide className='image-gradient'>
                    <Image className='w-full h-[300px] md:h-[600px]' width={1300} height={100} src={'/banner2.png'} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
