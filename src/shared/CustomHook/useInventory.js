import { useEffect, useState } from "react";


const useInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fathomless-bastion-42957.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}

export default useInventory;
