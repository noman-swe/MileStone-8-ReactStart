import React, { useEffect, useState } from 'react';
import './Dokan.css';
import Item from '../Item/Item';

const Dokan = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    // event handler for Items add to cart- [react e amra data upor theke nicher component e pathaite pari but nichy theke upore na tai item.js er addToCart button er onClick event handler ta Dokan or Shop component e boshaite hoitesy - coz Shop component e Order Summary asy, jekhane eventHandler er action korte hbe] 

    const handleAddToCart = (item) => {
        console.log(item);
    }

    return (
        <div className='dokan-container'>
            <div className="shop">
                {
                    items.map(item => <Item 
                    item = {item}
                    key = {item.id}
                    handleAddToCart = {handleAddToCart}
                    ></Item> )
                }
            </div>
            <div className="order-summary">
                <p>Order Summary</p>
            </div>
        </div>
    );
};

export default Dokan;