import React from 'react';
import './Shoe.css';

const Shoe = props => {
    const {name, price} = props.shoe;
    return (
        <div className='product'>
            <h3>Brand : {name}</h3>
            <p>Price : {price}</p>
        </div>
    );
};

export default Shoe;