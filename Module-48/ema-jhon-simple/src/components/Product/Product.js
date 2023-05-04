import React from 'react';
import './Product.css';
const Product = props => {
    // console.log(props.product);
    const { name, price, seller, ratings, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
                <button className='button-cart'>
                    <p>Add to cart</p>
                </button>

        </div>
    );
};

export default Product;