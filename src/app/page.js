import Banner from "@/components/Banner/Banner";
import InfoDivider from "@/components/InfoDivider/InfoDivider";
import OpcionesSwiper from "@/components/OpcionesSwiper/OpcionesSwiper";
import YourFav from "@/components/YourFav/YourFav";



export default function Home() {
  return (
    <header className="bg-body__gradient">
      <div>
        <Banner />
      </div>
      <div className="max-w-[1380px] mx-auto px-2 ">
        <OpcionesSwiper/>
        <section>
          <YourFav/>
        </section>
        <section className="mt-12 ">
          <InfoDivider/>
        </section>
      </div>
    </header>
  );
}
