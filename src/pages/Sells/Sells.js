import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Sells = ({ products }) => {
    const hasSold = products.filter(p => p.sold !== undefined);
    const remaining = hasSold.filter(p => p.sold !== 0);
    console.log(remaining);


    return (
        <div className='mx-auto' style={{ width: '80%' }}>
            <h1 className='mt-5 mb-3 text-center'>Sells Analytics</h1>
            <div >
                <LineChart className='mx-auto' width={900} height={300} data={remaining} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sold" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Sells;