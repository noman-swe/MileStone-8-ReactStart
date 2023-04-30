import React from 'react';
import './Cosmetic.css';
import { addTodb, removeFromDB } from '../../utilities/fakedb';

const Cosmetic = props => {
    const {name, price, id} = props.cosmetic;

    const addToCart = id => {
        addTodb(id);
    }

    const removeFromCart = id => {
        removeFromDB(id);
    }

    // const addToCartWithPerameter = () => addToCart(id);//-->function wrapper

    return (
        <div className='cosmetic'>
            <h3>Buy this Cosmetic : {name} </h3>
            <p>Price :  {price} </p>
            <small>Id : {id} </small> <br />
            {/* <button onClick={addToCartWithPerameter}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => {removeFromCart(id)}}>Remove Cart</button>
        </div>
    );
};

export default Cosmetic;