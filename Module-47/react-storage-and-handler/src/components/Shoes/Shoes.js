import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const jutaPrice = 20;
    const muja = 5;
    const totalJuta = multiply(jutaPrice, muja);

    return (
        <div>
            <h3>This is shoes compo</h3>
            <h5>Juta: {totalJuta}</h5>
        </div> 
    );
};

export default Shoes;