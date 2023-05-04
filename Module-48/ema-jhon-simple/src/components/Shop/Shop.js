import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className="products-comtainer">

                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart = {handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="card-container">
                <h4>Order summary</h4>
            </div>
        </div>
    );

};

export default Shop;