import React from 'react';
import './Product.css';
const Product = props => {
    // console.log(props.product);
    const { name, price, seller, ratings, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p>Price : ${price}</p>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating : {ratings}</small></p>

            
        </div>
    );
};

export default Product;