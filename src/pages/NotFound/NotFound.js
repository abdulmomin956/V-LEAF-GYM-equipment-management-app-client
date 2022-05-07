import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div style={{ height: '70vh' }}>
            <div className='text-center' style={{ marginTop: '25vh' }}>
                <h1 className='text-myViolet' style={{ fontSize: '10rem' }}>404</h1>
                <h1>OPPS! PAGE NOT FOUND</h1>
                <p>Go to <Link className='text-myViolet' to='/'>Homepage</Link></p>
            </div>
        </div>
    );
};

export default NotFound;