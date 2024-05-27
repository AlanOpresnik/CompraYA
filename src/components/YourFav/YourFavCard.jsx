import Image from "next/image";
import Link from "next/link";
import React from "react";

const YourFavCard = ({ product }) => {
  const replaceSpacesWithHyphens = (text) => {
    return text.replace(/[\s/]+/g, "-");
  };
  return (
    <Link
      href={`/product/${replaceSpacesWithHyphens(product.title)}/${product.id}`}
      className=" cursor-pointer flex flex-col justify-center min-w-[180px]  md:w-[230px] bg-white rounded-xl shadow-sm hover:shadow-lg mb-12 "
    >
      <div className="flex border-b justify-center py-6">
        <Image
          className="h-[180px] md:h-[205px] w-[225px] object-contain"
          width={100}
          height={100}
          src={product.image}
        />
      </div>
      <div className="px-4 py-2 min-h-[145px]">
        <div className="bg-blue-500 w-fit px-2 rounded-md mb-1">
          <span className="text-white text-xs ">EN OFERTA</span>
        </div>
        <div className="">
          <span className="text-xl">${product.price}</span>
        </div>
        <div>
          <span className="text-sm opacity-90 line-clamp-2">
            {product.title}
          </span>
        </div>
        <div>
          <span className="text-green-500 text-xs">Nombre del vendedor</span>
        </div>
      </div>
    </Link>
  );
};

export default YourFavCard;
