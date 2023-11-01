import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDbPractice, getStoredShoppingCart } from '../../utilities/fakeDbPractice';
// import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    /* // getting existing data from localstorage-cart and show them in the ui section 
        useEffect(() => {
            const stroredCart = getStoredShoppingCart();
            for(const id in stroredCart){
                // console.log(id);*--
                // localStorage e j product guli asy oi dula k main products er sathy match koraye find kore nilam eikhaan e, tate oi product duli er sob attributes e access kora jacchy ekhn like: category, name, seller and others all.
                const addedProducts = products.find(product => product.id === id );
    
                console.log(addedProducts);
            }
         },
            [products]); */

    // 49-5 (advanced) Load cart from local storage, find product
    useEffect(() => {
        const getStoredCart = getStoredShoppingCart();
        for(const cartedId in getStoredCart){
            // console.log(cartedId);
            const cartAddedProductFromAllProducts = products.find(product => product.id === cartedId);

            console.log(cartAddedProductFromAllProducts);
        }
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // addToDb(product.id);
        addToDbPractice(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>Product container</h3> */}
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                >
                </Cart>
            </div>
        </div>
    );
};

export default Shop;