const baseUrl = "https://fakestoreapi.com";
import { getPlaiceholder } from "plaiceholder";

/**
 * @see https://plaiceholder.co/docs/plugins/next
 */
const getImage = async (src: string, alt: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const {
    metadata: { height, width },
    base64,
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    src,
    width,
    height,
    alt,
    blurDataURL: base64,
  };
};

async function get(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Request to ${url} failed. Status: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

 interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

 type Category =
  | "men's clothing"
  | "jewelery"
  | "electronics"
  | "women's clothing";

 interface Rating {
  rate: number;
  count: number;
}

 type Products = Product[];

export const api = {
  getProducts: async () => {
    const products = (await get(`${baseUrl}/products`)) as Products;

    return Promise.all(
      products.map(async (product) => ({
        ...product,
        image: await getImage(product.image, ""),
      })),
    );
  },
};

export type ProductsWithImages = Awaited<ReturnType<typeof api.getProducts>>;