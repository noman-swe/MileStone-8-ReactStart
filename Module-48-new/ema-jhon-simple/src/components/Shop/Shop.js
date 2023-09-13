import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    // state declaration coz of adding new things 
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // handler ta ekhan e add korte hoisy coz amra data upor theke nichy pathate pari but nichy theke upore pathaite pari na. and chaile event handler taw pathate pari.
    const handleAddToCart = (product) => {
        console.log(product);
        // ei handleAddToCart e press korar por new state update hocchy tai ei-khane update korte hbe tarpor seta product.js er cart section e show korte hobe. 
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>This is for products {products.length}</h3> */}
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h3>Order Summary</h3>
                
                <p>Selected Items : {cart.length}</p>
                <p>Total Price : </p>
                <p>Total Shipping Charge : </p>
                <p>Tax : </p>
                <p>Grand Total : </p>
            </div>
        </div>
    );
};

export default Shop;