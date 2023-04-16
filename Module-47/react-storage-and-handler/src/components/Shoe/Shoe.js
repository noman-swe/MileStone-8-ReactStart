import React from 'react';

const Shoe = props => {
    const {name, price} = props.shoe;
    return (
        <div>
            <h3>Brand : {name}</h3>
            <p>Price : {price}</p>
        </div>
    );
};

export default Shoe;