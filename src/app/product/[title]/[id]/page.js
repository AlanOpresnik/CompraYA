import Product from "@/components/Product/Product";
import { api } from "@/components/Slides/api";

const ProductPage = async ({ params: { id } }) => {
  const product = await api.getProductById(id);

  return (
    <div className="pt-0 md:pt-20  mx-auto ">
      <Product product={product} />
    </div>
  );
};

export default ProductPage;
