import { api } from "@/app/api";
import { Skeleton } from "@mui/material";
import { Suspense } from "react";
import Slides from "../Slides/Slides";

const Products = async () => {
  const products = await api.getProducts();
  const productsLoaded = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 700);
  });

  return <Slides products={productsLoaded} />;
};

const YourFav = async () => {
  return (
    <div className="">
      <Suspense fallback={<div className="h-[375px] relative"><Skeleton className="w-full relative top-[-70px] !h-[455px]"/></div>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default YourFav;
