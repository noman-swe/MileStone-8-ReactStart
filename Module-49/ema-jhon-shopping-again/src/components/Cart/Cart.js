import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        // console.log(product);
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const taxCal = total * 0.1;
    const tax = Number(taxCal.toFixed(2));
    console.log(tax);

    return (
        <div className='cart'>
            <h3>Order Summary</h3>

            <p>Selected Items : {cart.length} </p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : {shipping}</p>
            <p>Tax : {taxCal.toFixed(2)} </p>
            <h5>Grand Total : </h5>
        </div>
    );
};

export default Cart;