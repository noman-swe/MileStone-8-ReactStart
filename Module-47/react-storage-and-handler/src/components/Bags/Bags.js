import React, { useEffect, useState } from 'react';
import './Bags.css';
import Bag from '../Bag/Bag';

const Bags = () => {
    const [bags, setBags] = useState([]);
    useEffect(() => {
        fetch('bags_data.json')
            .then(res => res.json())
            .then(data => setBags(data))
    })
    return (
        <div className='bags-container'>
            <h2>This is bags Section</h2>
            {
                bags.map(bag => <Bag
                bag = {bag}
                key={bag.id}
                > </Bag>)
            }
        </div>
    );
};

export default Bags;