import React from 'react';

const Item = ({ product }) => {
    const { name, image, short, price, qty, suppName } = product;
    return (

        <tr>
            <td><img height='40px' src={image} alt="" /></td>
            <td>{name}</td>
            <td>{price} Taka</td>
            <td>{qty} pcs</td>
            <td>{suppName}<button style={{ backgroundColor: 'red', color: 'white', position: 'fixed' }}>delete</button></td>
        </tr>


    );
};

export default Item;