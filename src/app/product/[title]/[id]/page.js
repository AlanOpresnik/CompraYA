import { api } from "@/app/api";
import Product from "@/components/Product/Product";
import { Suspense } from "react";
import Loader from '@/components/Loader/Loader'
const ProductPage = async ({ params: { id } }) => {
  // pre-fetch queries as soon as the page is requested
  api.getProductById(id);
  api.getProducts();

  return (
    <div className="pt-0 md:pt-20 mx-auto">
      <div className="bg-white pt-16">
        <Suspense
          fallback={
            <div className="w-full flex justify-center items-center h-[100vh]">
              <Loader/>
            </div>
          }
        >
          <Product id={id} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductPage;
