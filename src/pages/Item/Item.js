import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({ product }) => {
    const { name, image, short, price, qty, suppName } = product;

    return (

        <tr>
            <td><img height='40px' src={image} alt="" /></td>
            <td>{name}</td>
            <td>{price} Taka</td>
            <td>{qty} pcs</td>
            <td className='position-relative'><p>{suppName}</p><Button className='bg-myViolet text-white shadow-none d-block mx-auto' style={{ position: 'absolute', right: '10px', top: '20px' }}>delete</Button></td>
        </tr>


    );
};

export default Item;