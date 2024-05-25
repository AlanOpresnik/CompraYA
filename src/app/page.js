import Banner from "@/components/Banner/Banner";
import InfoDivider from "@/components/InfoDivider/InfoDivider";
import InfoWithUsDivider from "@/components/InfoWithUsDivider/InfoWithUsDivider";
import OpcionesSwiper from "@/components/OpcionesSwiper/OpcionesSwiper";
import YourFav from "@/components/YourFav/YourFav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-body__gradient">
        <div>
          <Banner />
        </div>
        <div className="max-w-[1250px] mx-1 md:mx-auto px-2 ">
          <OpcionesSwiper />
          <section className="">
          <div className="flex items-center gap-4  h-full mb-6">
            
            <h4 className="text-xl md:text-[1.32rem]">
              Algunas de nuestras ofertas ❤️
            </h4>
            <Link href={'/'}  className="text-blue-500 text-sm ">Ver mas</Link>
          </div>
            <YourFav />
          </section>
          <section className="mt-12 ">
            <InfoDivider />
          </section>
        </div>
      </header>
      <div className="section-products-interest-bg ">
      <div className="max-w-[1250px] mx-auto">

          <h4 className="text-xl mx-4 md:text-[1.32rem] mb-6">
            Estos productos te pueden interesar 😬{" "}
          </h4>
      </div>
        <section className="max-w-[1250px] mx-4 md:mx-auto p-4 rounded-lg shadow-lg border  bg-white">
          <YourFav />
        </section>
      </div>
      <div className="section-categories-interest-bg">
        <section className="max-w-[1250px] mx-auto pt-12">
          <InfoWithUsDivider />
        </section>
      </div>
    </>
  );
}
