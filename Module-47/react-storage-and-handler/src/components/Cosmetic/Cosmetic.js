import React from 'react';
import './Cosmetic.css';

const Cosmetic = props => {
    const {name, price, id} = props.cosmetic;

    const addToCart = id => {
        console.log('item added', id);
    }

    const addToCartWithPerameter = () => addToCart(id);//function wrapper

    return (
        <div className='cosmetic'>
            <h3>Buy this Cosmetic : {name} </h3>
            <p>Price :  {price} </p>
            <button onClick={addToCartWithPerameter}>Add to Cart</button>
            <button onClick={() => addToCart(id)}>Add to Cart Shortcut</button>
        </div>
    );
};

export default Cosmetic;