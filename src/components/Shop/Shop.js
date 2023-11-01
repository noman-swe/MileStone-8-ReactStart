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
        // console.log('Product load Before fetch ');
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    // 49-7 (super advanced) Handle quantity from storage to cart
    useEffect(() => {
        const storedCart = getStoredShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // ekta product 1 ber e count hocchy 1 er beshi localStorage e store thaktesy na.solution bellow::
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // jodi addedProduct ta pawa jay taile cart e add korbo-- bellow:
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
     }, [products])

    /* 
        // 49-5 (advanced) Load cart from local storage, find product
        // getting existing data from localstorage-cart and show them in the ui section 
        useEffect(() => {
            const stroredCart = getStoredShoppingCart();
            for(const id in stroredCart){
                // localStorage e j product guli asy oi dula k main products er sathy match koraye find kore nilam eikhaan e, tate oi product duli er sob elements e access kora jacchy ekhn like: category, name, seller and others all.
                const addedProducts = products.find(product => product.id === id );
            }
         },
        []);
     */

    /*
      // 49-5( again done and 49-6) (advanced) Load cart from local storage, find product
     useEffect(() => {
         const getStoredCart = getStoredShoppingCart();
 
         // to store cartAddedProductFromAllProducts after update
         const savedCart = [];
 
         for (const storedId in getStoredCart) {
              //49-5- localStorage e j product guli asy oi dula k main products er sathy match koraye find kore nilam eikhaan e, tate oi product duli er sob elements e access kora jacchy ekhn like: category, name, seller and others all.
             const cartAddedProductFromAllProducts = products.find(product => product.id === storedId);
             
             //bellowpart: 49-6 (advanced) Display local storage cart to the UI
             if (cartAddedProductFromAllProducts) {
                 const quantity = getStoredCart[storedId];
                 cartAddedProductFromAllProducts.quantity = quantity;
                 savedCart.push(cartAddedProductFromAllProducts);
             }
         }
 
         setCart(savedCart);
     }, [products])
    */

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