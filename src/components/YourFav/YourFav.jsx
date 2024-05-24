"use client";
import YourFavCard from "./YourFavCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Pagination, Navigation } from "swiper/modules";

const YourFav = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
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
        modules={[Pagination, Navigation]}
        className="mySwiper custom-swiper h-[435px]"
      >
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <SwiperSlide>
          <YourFavCard />
        </SwiperSlide>
        <div className="swiper-button-prev custom-swiper-button-prev"></div>
        <div className="swiper-button-next custom-swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default YourFav;
