"use client";
import YourFavCard from "./YourFavCard";
import React, { Suspense, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { Navigation } from "swiper/modules";
import { ProductsContext } from "@/context/ProductsContext";
import { Skeleton } from "@mui/material";

const YourFav = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
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
        modules={[Navigation]}
        className="mySwiper custom-swiper h-[405px]"
      >
        {products?.map((product) => (
          <SwiperSlide>
            <Suspense
              fallback={
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={100}
                  height={100}
                  sx={{backgroundColor:"black"}}
                />
              }
            >
              <YourFavCard product={product} />
            </Suspense>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev custom-swiper-button-prev"></div>
        <div className="swiper-button-next custom-swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default YourFav;
