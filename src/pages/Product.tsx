import { useState, useEffect } from "react"

const product = () => {

    const [product, setProducts] = useState([])
    const [error, setError] = useState({})


    interface Product {
        id: number;
        title: string;
        price: Float32Array;
        description: string;
        image: string;
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(res => setProducts(res.slice(0, 10)))
            .then(res => console.log(res))
            .catch(err => setError(err))

    }, [])

    return (
        <div>
            {product.length > 0 ? (
                product.map((prod: Product) => (
                    <div className="cards"> 
                        <img src={prod.image} className="product-img" alt="product-img" />
                        {prod.id} 
                        {prod.title} 
                        {prod.description}
                        {prod.price} 
                    </div>
                ))
            ) : (
                <div>Loading..</div>
            )}
        </div>



    )
}

export default product