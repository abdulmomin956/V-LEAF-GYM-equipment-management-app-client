import React from 'react';
import { Button } from 'react-bootstrap';
import useInventory from '../../shared/CustomHook/useInventory';
import './Inventory.css'

const Inventory = () => {
    const [products, setProducts] = useInventory();

    const handleDelete = id => {
        fetch('http://localhost:5000/delete/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                const remaining = products.filter(service => service._id !== id);
                setProducts(remaining);
            })
    }

    return (
        <div>
            <h1 className='text-center'>Manage Inventory ({products.length})</h1>
            <table className='mx-auto styled-table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price(BDT)</th>
                        <th>QTY</th>
                        <th>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id} product={product}>
                            <td><img height='40px' src={product.image} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.price} Taka</td>
                            <td>{product.qty} pcs</td>
                            <td className='position-relative'><p>{product.suppName}</p><Button onClick={() => handleDelete(product._id)} className='bg-myViolet text-white shadow-none d-block mx-auto' style={{ position: 'absolute', right: '10px', top: '20px' }}>delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;