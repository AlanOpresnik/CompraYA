'use client'
import axios from 'axios';
import React, { createContext, useEffect, useState, } from 'react';

// Crear el contexto
const ProductsContext = createContext();

// Crear un proveedor para el contexto
const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllProducts = async () => {
        try {
            const res = await axios('https://fakestoreapi.com/products')
            setProducts(res.data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    const getProductById = async (id) => {
        try {
            setLoading(true)
            const res = await axios(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
            console.log(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <ProductsContext.Provider value={{ products, product,getProductById,loading }}>
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductsProvider, ProductsContext };
