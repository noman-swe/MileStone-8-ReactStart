import React from 'react';

const Cosmetic = props => {
    const {name, price} = props.cosmetic;
    return (
        <div>
            <h3>Buy this Cosmetic : {name} </h3>
            <p>Price :  {price} </p>
        </div>
    );
};

export default Cosmetic;