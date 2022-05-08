import React from 'react';
import useInventory from '../../shared/CustomHook/useInventory';
import Item from '../Item/Item';
import './Inventory.css'

const Inventory = () => {
    const [products, setProducts] = useInventory();
    return (
        <div>
            <h1 className='text-center'>Manage Inventory</h1>
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
                        products.map(product => <Item key={product._id} product={product}></Item>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;