'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import OpcionesCard from '../OpcionesCard/OpcionesCard';
import { useEffect, useState } from 'react';

export default function OpcionesSwiper() {
  const [showNavigation, setShowNavigation] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const opciones = [
    {
      title: 'OFERTAS SOLO POR 24 HS!',
      img: "https://res.cloudinary.com/db3krhfka/image/upload/v1716231775/Remove-bg.ai_1716231763284_kwemnr.png"
    },
    {
      title: 'OFERTAS BOMBA!',
      img: "https://res.cloudinary.com/db3krhfka/image/upload/v1716231996/Remove-bg.ai_1716231989902_drxfta.png"
    },
    {
      title: 'CUOTAS SIN INTERES',
      img: "https://http2.mlstatic.com/D_Q_NP_814848-MLA76111901756_052024-F00.jpg-G.webp"
    },
    {
      title: 'Seleccionados de celulares',
      img: "https://http2.mlstatic.com/D_Q_NP_964901-MLA76477483995_052024-F00.jpg-G.webp"
    },
    {
      title: "LOS MEJORES SUPLEMENTOS",
      img: "https://http2.mlstatic.com/D_Q_NP_964686-MLA76462952825_052024-F00.jpg-G.webp"
    }
  ]
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={showNavigation}
        className="mySwiper relative top-[-40px] h-[160px]"
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            navigation: true
          },
          200: {
            slidesPerView: 1.7,
          },
          300: {
            slidesPerView: 1.6,
          },
          360: {
            slidesPerView: 2.5,
          },
          468: {
            slidesPerView: 2.9,
          },
          550: {
            slidesPerView: 3,
          },
          822: {
            slidesPerView: 4,
          },

        }}
      >
        {opciones.map((opcion => (
          <SwiperSlide key={opcion.title}>
            <OpcionesCard opcion={opcion} />
          </SwiperSlide>
        )))}
      </Swiper>
    </>
  );
}
