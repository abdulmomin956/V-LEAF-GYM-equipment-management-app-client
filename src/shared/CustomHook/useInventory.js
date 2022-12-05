import { useEffect, useState } from "react";


const useInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://vleaf-server.vercel.app/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
}

export default useInventory;
