import React from 'react';
import './TopProduct.css'

const TopProducts = ({ products }) => {
    products.sort((a, b) => parseFloat(b.qty) - parseFloat(a.qty));
    return (
        <div className='mx-auto' style={{ width: '80%' }}>
            <h1 className='mb-3'>Top Products</h1>
            <div className='top-product' >
                {
                    products.slice(0, 3).map(product =>
                        <div style={{ border: '1px solid gray', padding: '3rem', borderRadius: '10px' }} key={product._id}>
                            <img style={{ border: '1px solid gray', display: 'block', borderRadius: '10px' }} className='w-100 mx-auto' src={product.image} alt="" />
                            <h3 className='my-3'>{product.name}</h3>
                            <p className='mb-0'>{product.qty} pcs</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopProducts;