import React from 'react';
import './Item.css';

const Item = (props) => {
    // console.log(props);
    const {handleAddToCart} = props;
    const { img, name, price, seller, ratings } = props.item;
    return (
        <div className='item-container'>
            <img src={img} alt="" />

            <div className="item-info">
                <p className='item-name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p><small>Menufacturer : {seller} </small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>
            <button className='add-to-cart-btn' onClick={() => handleAddToCart(props.item)}>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Item;