import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/vbanner.png'
import useInventory from '../../shared/CustomHook/useInventory';
import Product from '../Product/Product';
import TopProducts from '../TopProducts/TopProducts';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useInventory();

    return (
        <div>
            <section className='w-100 text-white d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '70vh' }}>
                <h1>Welcome to V-Leaf GYM equip management system</h1>
                <p>It's easy to handle LARGE STORAGE now</p>
            </section>
            <section className='my-5'>
                <h1 className='text-center'>EQUIPMENT</h1>
                <div className='short-items mx-auto'>
                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <Link className='text-myViolet' to='/inventory'><Button className='bg-myViolet text-white shadow-none d-block mx-auto mt-3'>Manage Inventory</Button></Link>
            </section>
            <TopProducts products={products}></TopProducts>
        </div>
    );
};

export default Home;