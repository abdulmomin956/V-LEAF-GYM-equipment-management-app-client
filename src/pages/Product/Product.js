import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
    const { name, image, short, price, qty, suppName } = product;
    return (
        <Card style={{ border: '1px solid gray', padding: '2rem' }}>
            <img src={image} className='mx-auto' style={{ width: '80%', display: 'block' }} alt="" />
            <Card.Body>
                <h3>{name}</h3><hr />
                <p>{short}</p><hr />
                <p>Rate: <span style={{ color: 'green', fontWeight: 'bold' }}>{price} Taka</span></p><hr />
                <p>Supplier: {suppName}</p><hr />
                <p><b>QTY: {qty}</b></p>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: 'transparent', border: 'none' }}>
                <Button className='bg-myViolet text-white shadow-none'>Update</Button>
            </Card.Footer>
        </Card>
    );
};

export default Product;