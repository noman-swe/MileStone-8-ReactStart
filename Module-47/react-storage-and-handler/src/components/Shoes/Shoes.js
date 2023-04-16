import React, { useEffect, useState } from 'react';
import { multiply } from '../../utilities/calculate';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {
    const jutaPrice = 20;
    const muja = 5;
    const totalJuta = multiply(jutaPrice, muja);

    const [shoes, setShoes] = useState([]);

    useEffect(() => { 
        fetch('data.json')
        .then(res => res.json())
        .then(data => setShoes(data))
    });

    return (
        <div>
            <h2 style={{ color: 'red' }}>This is shoes component</h2>
            <h5>Juta Price: {totalJuta}</h5>
            {
                shoes.map(shoe => <Shoe
                shoe = {shoe}
                key = {shoe.id}
                ></Shoe>)
            }
        </div>
    );
};

export default Shoes;