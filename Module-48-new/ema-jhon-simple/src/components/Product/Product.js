import React from 'react';
import './Product.css';

const Product = (props) => {
     const {img, name, price, quanity, seller, shipping, stock, rattings} = props.product;
    console.log(props);
    return (
        <div className='product'>
            {/* <h2>This is product Component</h2> */}
            <img src={img} alt=''/>
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;