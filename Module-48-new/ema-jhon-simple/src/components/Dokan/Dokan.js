import React, { useEffect, useState } from 'react';
import './Dokan.css';
import '../Product/Product'
import Product from '../Product/Product';

const Dokan = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => { console.log(product) };

    return (
        <div className='dokan-container'>
            <div className="product-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                >
                </Product>)}

            </div>

            <div className="card-container">
                <h3>Order Summary</h3>
                <p>Selected Items : </p>
                <p>Total Price : </p>
                <p>Total Shipping Charge : </p>
                <p>Tax : </p>
                <p>Grand Total : </p>
            </div>
        </div>
    );
};

export default Dokan;