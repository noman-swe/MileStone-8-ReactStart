import React from 'react';
import './Bag.css';
import { bagsDb } from '../../utilities/bagsDb';

const Bag = props => {
    const { name, price, id } = props.bag;

    const addToCart = id => {
        bagsDb(id);
    }

    return (
        <div className='container'>
            <div className="child">
                <h4>Bag Name: <span>{name}</span> </h4>
                <p>Bag Price: <b>{price}</b> </p>
                <p>Id: <small> {id} </small></p>
                <button onClick={() => { addToCart(id) }}>Add to cart</button>
            </div>
        </div>
    );
};

export default Bag;