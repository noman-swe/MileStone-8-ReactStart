import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller:{seller} </small> </p>
                <p><small>Ratings: {ratings}</small>  </p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(product)}>
                <p>Add To Cart</p> <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;