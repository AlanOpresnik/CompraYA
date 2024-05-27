
const baseUrl = "https://fakestoreapi.com";
import { getPlaiceholder } from "plaiceholder";

const getImage = async (src, alt) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
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

async function get(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Request to ${url} failed. Status: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

const api = {
  getProducts: async () => {
    const products = await get(`${baseUrl}/products`);

    return Promise.all(
      products.map(async (product) => ({
        ...product,
        image: await getImage(product.image, ""),
      }))
    );
  },
  getProductById: async (id) => {
    const product = await get(`${baseUrl}/products/${id}`);

    return {
      ...product,
      image: await getImage(product.image, ""),
    };
  },
};

export { api };