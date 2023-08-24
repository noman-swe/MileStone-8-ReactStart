import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    // const { handleAddToCart } = props;

    return (
        <div className='product'>
            <img src={img} alt='' />
            <div className="productInfo">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller:{seller} </small> </p>
                <p><small>Ratings: {ratings}</small>  </p>
            </div>

            <button className='btn-cart' onClick={() => props.handleAddToCart(props.product)}>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;