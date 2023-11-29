import * as React from 'react';
import Layout from "@components/layout";
import Navbar from "@components/HomePageComponents/navbar";
import Header from "@components/HomePageComponents/header";
import Product from "@components/HomePageComponents/product";
import {useEffect, useState} from "react";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [categoreis, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategories();
        getProducts();
    }, [])

    const getCategories = async () => {
        setLoading(true);
        const data = await fetch("/api/category").then(res => res.json())
        // console.log('getCategories', data);
        setCategories(data);
        setLoading(false);
    }

    const getProducts = async () => {
        setLoading(true);
        const data = await fetch("/api/products").then(res => res.json())
        // console.log('getProducts', data);
        setProducts(data);
        setLoading(false);
    }

    return (
        <Layout title='صفحه اصلی'>
            <Navbar categories={categoreis}/>

            {loading ? (
                <p>Loading ...</p>
            ) : (
                <Header categories={categoreis}/>
            )}

            <div className="container-sm mb-3">
                <hr/>
                <h2 className='display-4'>محصولات</h2>
                <div className="row">
                    {loading ? (
                        <p>Loading ...</p>
                    ) : (
                        products.map((item, index) => (
                            <Product key={index} title={item.title} price={item.price} colors={item.colors}/>
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Home