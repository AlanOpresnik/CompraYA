import React from 'react'
import InfoDividerCard from './InfoDividerCard'

const InfoDivider = () => {
    const infos = [
        {
            title: "Hacete Vendedor",
            description: "Consegui cientos de clientes y vende con la menor comicion del mercado.",
            img: "https://images.vexels.com/media/users/3/200982/isolated/preview/5830c3a552a6cfc31b5d1f995397e294-mano-con-mano-de-icono-de-dinero.png"
        },
        {
            title: "Compra sin Limites",
            description: "Todos los productos que buscas al menor precio en CompraYA.",
            img: "https://cdn-icons-png.flaticon.com/512/5291/5291686.png"
        },
        {
            title: "Descuentos cada mes!",
            description: "Cada mes damos un cupon de descuento para comprar en la web!",
            img: "https://static.wikia.nocookie.net/animalcrossing/images/7/74/Cup%C3%B3n_de_millas_Nook.png/revision/latest?cb=20210214201048&path-prefix=es"
        }
    ]
    return (
        <div className='flex flex-col items-center md:flex-row gap-12 mb-12'>
            {infos.map((info => (
                <InfoDividerCard
                key={info.title}
                    info={info}
                />
            )))}
        </div>
    )
}

export default InfoDivider