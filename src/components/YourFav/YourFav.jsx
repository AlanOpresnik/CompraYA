
import React, { Suspense, useContext } from "react";
import { Skeleton, Slide } from "@mui/material";
import Slides from "../Slides/Slides";
import { api } from "../Slides/api";

const Products = async () => {
  const products = await api.getProducts();
  const productsLoaded = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 5000);
  });

  return <Slides products={productsLoaded} />;
}

const YourFav = async () => {

  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <Products />
      </Suspense>
    </div>
  );
};

export default YourFav;
