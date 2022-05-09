import React, { useEffect, useRef, useState } from 'react';
import { Button, Collapse, Fade } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useInventory from '../../shared/CustomHook/useInventory';
import './Inventory.css'

const Inventory = () => {
    const [products, setProducts] = useInventory();
    const [open, setOpen] = useState(false);

    const navigate = useNavigate()

    // form item
    const nameRef = useRef('')
    const shortRef = useRef('')
    const priceRef = useRef(0)
    const qtyRef = useRef(0)
    const suppRef = useRef('')
    const imageRef = useRef('')

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

    // const location = useLocation()



    const handleOnSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const short = shortRef.current.value;
        const price = priceRef.current.value;
        const qty = qtyRef.current.value;
        const supp = suppRef.current.value;
        const image = imageRef.current.value;
        const data = { name: name, short: short, price: price, qty: qty, suppName: supp, image: image, sold: 0 };



        fetch('http://localhost:5000/product/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                data._id = result.insertedId;
                products.push(data)
                navigate('/inventory')
                console.log(result.insertedId);
            })

        e.target.reset()
    }

    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div style={{ minHeight: '90vh' }}>
            <h1 className='text-center'>Manage Inventory ({products.length})</h1>

            <div className='w-50 mx-auto'>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="fadeID" className='bg-myViolet text-white shadow-none rounded-0 d-block px-4 py-2'>Add A Item</Button>
            </div>
            <Collapse in={open}><div id="fadeID" className='mx-auto'
                style={{
                    width: '50%',
                    textAlign: 'justify'
                }}>
                <form className='add-form' onSubmit={handleOnSubmit}>
                    <input ref={nameRef} type="text" placeholder='name' required />
                    <input ref={shortRef} type="text" placeholder='short description' />
                    <input ref={priceRef} type="number" min='1' placeholder='price' required />
                    <input ref={qtyRef} type="number" min='1' placeholder='quatity' required />
                    <input ref={suppRef} type="text" placeholder='supplier name' />
                    <input ref={imageRef} type="text" placeholder='image url' />
                    <button className='shadow-none' style={{ padding: '10px 15px', backgroundColor: 'green', color: 'white', border: '0' }}>Add</button>
                </form>
            </div></Collapse>

            <table className='mx-auto styled-table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th style={{ width: '15%' }}>Name</th>
                        <th>Price(BDT)</th>
                        <th>QTY</th>
                        <th>Sold</th>
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
                            <td>{product?.sold} pcs</td>
                            <td className='position-relative'><p>{product.suppName}</p>
                                <Button onClick={() => handleUpdate(product._id)} className='bg-myViolet text-white shadow-none d-block mx-auto' style={{ position: 'absolute', right: '90px', top: '20px' }}>
                                    Update
                                </Button>
                                <Button onClick={() => handleDelete(product._id)} className='bg-myViolet text-white shadow-none d-block mx-auto' style={{ position: 'absolute', right: '10px', top: '20px' }}>
                                    delete
                                </Button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;