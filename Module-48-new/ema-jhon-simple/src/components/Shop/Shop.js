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

    // handler ta ekhan e add korte hoisy coz amra data upor theke nichy pathate pari but nichy theke upore pathaite pari na. and chaile event handler taw pathate pari.
    const handleAddToCart = (product) => {
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>This is for products {products.length}</h3> */}
                {
                    products.map(product => <Product
                         key={product.id}
                         product = {product}
                         handleAddToCart = {handleAddToCart}         
                        ></Product>)
                }
            </div>

            <div className="card-container">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;