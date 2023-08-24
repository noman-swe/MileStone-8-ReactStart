import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, quanity, seller, shipping, stock, ratings } = props.product;
    console.log(props);
    return (
        <div className='product'>
            {/* <h2>This is product Component</h2> */}
            <img src={img} alt='' />
            <div className="productInfo">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller:{seller} </small> </p>
                <p><small>Ratings: {ratings}</small>  </p>
            </div>

            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;