import React from "react";
import InfoDividerCard from "../InfoDivider/InfoDividerCard";
import InfoWithUsDividerCard from "./InfoWithUsDividerCard";

const InfoWithUsDivider = () => {
  const infos = [
    {
      title: "Compra Segura",
      description:
        "tranquilo, tu plata siempre segura, Nos manejamos con Mercado Pago",
      img: "https://cdn.icon-icons.com/icons2/2785/PNG/512/shopping_bag_icon_177404.png",
    },
    {
      title: "Mensajeria vendedor",
      description:
        "CompraYA intengra un chat con el vendedor para estar siempre comunicado",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Line-style-icons-chat.svg/1200px-Line-style-icons-chat.svg.png",
    },
    {
      title: "Sección Mayorista",
      description:
        "CompraYA intengra una sección Mayorista de los productos que mecesites",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/find-product-icon.png",
    },

  ];
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-12 mb-12">
      {infos.map((info) => (
        <InfoWithUsDividerCard key={info.title} info={info} />
      ))}
    </div>
  );
};

export default InfoWithUsDivider;
