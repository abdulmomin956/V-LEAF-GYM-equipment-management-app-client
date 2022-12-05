import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Update.css'

const Update = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    const navigate = useNavigate()



    useEffect(() => {
        const getData = () => {
            const url = `https://http-nodejs-production-ab47.up.railway.app/product/${id}`
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
        getData();
    }, [id])

    const { _id, name, sold, short, price, qty, suppName, image } = product;

    const qtyRef = useRef()

    const handleOnAdd = async e => {
        e.preventDefault()
        const newQty = parseInt(qtyRef.current.value) + qty;
        product.qty = newQty;
        await fetch(`https://http-nodejs-production-ab47.up.railway.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        navigate(`/inventory/${_id}`)
    }

    const handleDeliver = async id => {
        let newSold;
        const newQty = qty - 1;
        product.qty = newQty;
        if (sold === undefined) {
            newSold = 1;
        }
        else {
            newSold = sold + 1;
        }

        product.sold = newSold;
        await fetch(`https://http-nodejs-production-ab47.up.railway.app/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        navigate(`/inventory/${id}`)
    }

    return (
        <div style={{ minHeight: '90vh' }} className='text-center my-3'>
            <h1>{_id}</h1>
            <img className='d-block w-25 mx-auto' src={image} alt="" />
            <h3>{name}</h3>

            <table className='mx-auto item-table'>
                <tbody>
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
                        <td>{sold}</td>
                    </tr>
                    <tr>
                        <th>Supplier:</th>
                        <td>{suppName}</td>
                    </tr>
                </tbody>
            </table>
            <button className='my-4' onClick={() => handleDeliver(_id)}>Delivered</button>
            <form onSubmit={handleOnAdd}>
                <input ref={qtyRef} type="number" min="1" placeholder='QTY' /><button>Restock</button>
            </form>

            <Link className='text-myViolet' to='/inventory'><Button className='bg-myViolet text-white shadow-none d-block mx-auto mt-3'>Manage Inventory</Button></Link>
        </div>
    );
};

export default Update;