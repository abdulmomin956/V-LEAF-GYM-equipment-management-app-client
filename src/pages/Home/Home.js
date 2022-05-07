import React, { useEffect, useState } from 'react';
import banner from '../../images/vbanner.png'
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
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
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;