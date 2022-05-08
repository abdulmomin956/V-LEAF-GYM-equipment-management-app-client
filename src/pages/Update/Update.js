import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Update.css'

const Update = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    const handleOnAdd = e => {
        e.preventDefault()
    }

    useEffect(() => {
        const getData = async () => {
            const url = `http://localhost:5000/product/${id}`
            await fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
        getData();

    }, [id])
    // console.log(product);
    const { _id, name, short, price, qty, suppName, image } = product;
    return (
        <div className='text-center'>
            <h1>{_id}</h1>
            <img className='d-block w-25 mx-auto' src={image} alt="" />
            <h3>{name}</h3>

            <table className='mx-auto item-table'>
                <tr>
                    <th>Price:</th>
                    <td>{price}</td>
                </tr>
                <tr>
                    <th>Description:</th>
                    <td>{short}</td>
                </tr>
                <tr>
                    <th>QTY:</th>
                    <td>{qty} pcs</td>
                </tr>
                <tr>
                    <th>Sold:</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Supplier:</th>
                    <td>{suppName}</td>
                </tr>
            </table>
            <button>Delivered</button>
            <form onSubmit={handleOnAdd}>
                <input type="number" min="1" placeholder='QTY' /><button>Restock</button>
            </form>

            <Link className='text-myViolet' to='/inventory'><Button className='bg-myViolet text-white shadow-none d-block mx-auto mt-3'>Manage Inventory</Button></Link>
        </div>
    );
};

export default Update;