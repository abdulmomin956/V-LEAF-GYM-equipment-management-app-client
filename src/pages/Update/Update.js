import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [id])
    return (
        <div>
            {id}
        </div>
    );
};

export default Update;