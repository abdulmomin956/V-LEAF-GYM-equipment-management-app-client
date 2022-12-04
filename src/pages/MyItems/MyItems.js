import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import EmailVerified from '../EmailVerified/EmailVerified';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);

    const [products, setItems] = useState([])
    useEffect(() => {
        fetch(`https://v-leaf-server.onrender.com/user/${user.uid}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user.uid])
    return (
        <div style={{ minHeight: '90vh' }}>
            {
                !user.emailVerified && user.providerData[0].providerId !== 'google.com' ?
                    <EmailVerified></EmailVerified> :
                    products.length > 0 ? <>
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
                                            {/* <Button onClick={() => handleUpdate(product._id)} className='bg-myViolet text-white shadow-none d-block mx-auto' style={{ position: 'absolute', right: '90px', top: '20px' }}>
                                    Update
                                </Button>
                                <Button onClick={() => handleDelete(product._id)} className='bg-myViolet text-white shadow-none d-block mx-auto' style={{ position: 'absolute', right: '10px', top: '20px' }}>
                                    delete
                                </Button> */}
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </> : <h1 className='text-center'>Sorry you didn't add any item. Please add a item.</h1>
            }

        </div>
    );
};

export default MyItems;