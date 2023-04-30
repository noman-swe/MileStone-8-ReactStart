import React from 'react';
import './Shoe.css';
import { addToLocal } from '../../utilities/localStorage';

const Shoe = props => {
    const { name, price, id } = props.shoe;

    const addToCart = id => {
        addToLocal(id);
    }

    return (
        <div className='product'>
            <h3>Brand : {name}</h3>
            <p>Price : {price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Shoe;