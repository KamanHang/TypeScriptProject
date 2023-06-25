import { useState, useEffect } from "react";
import './product.css';

const Product = () => {
    const [productsList, setProductsList] = useState([]);
    
    const [filteredProducts, setFilteredProducts] = useState([]);
    

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        image: string;
        category: string;
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(res => {
                setProductsList(res);
                setFilteredProducts(res);
            })
            
    }, []);

    const filterResult = (category: string) => {
        const filtered = productsList.filter((product: Product) => product.category === category);
        setFilteredProducts(filtered);
    };

    return (
        <>
            <div className="page">
                <div className="heading">
                    <h1>Category</h1>
                </div>

                <div className="category">
                    <button className="cat-btn" onClick={() => filterResult("electronics")} > Electronics</button>
                    <button className="cat-btn" onClick={() => filterResult("jewelery")} > Jewelery</button>
                    <button className="cat-btn" onClick={() => filterResult("men's clothing")} > Men</button>
                    <button className="cat-btn" onClick={() => filterResult("women's clothing")} > Women</button>
                </div>

                <div className="product-container">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((prod: Product) => (
                            <div className="card" key={prod.id}>
                                <div className="product-img">
                                    <img src={prod.image} alt="prod-img" />
                                </div>
                                <div className="product-title">
                                    <h4>{prod.title}</h4>
                                </div>
                                <div className="product-desc">
                                    <h6>{prod.description}</h6>
                                </div>
                                <div className="product-price">
                                    <h6>${prod.price}</h6>
                                </div>
                                <div className="btn">
                                    <button className="prod-btn"> Add to Cart</button>
                                    <button className="prod-btn"> Learn More</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="loader">
                            Loading....
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Product;
