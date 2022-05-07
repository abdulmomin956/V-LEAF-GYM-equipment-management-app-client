import React from 'react';

const Product = ({ product }) => {
    const { name, image, short, price, qty, suppName } = product;
    return (
        <div>
            <img src={image} className='mx-auto' style={{ width: '80%', display: 'block' }} alt="" />
            <h3>{name}</h3>
            <p>{short}</p>
            <p>{price} Taka</p>
            <p>QTY: {qty}</p>
            <p>{suppName}</p>
        </div>
    );
};

export default Product;