import { useEffect, useState } from "react";


const useInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://http-nodejs-production-ab47.up.railway.app/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}

export default useInventory;
