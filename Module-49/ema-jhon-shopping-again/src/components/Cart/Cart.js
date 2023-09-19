import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    return (
        <div>
            <h3>Order Summary</h3>

            <p>Selected Items : {cart.length} </p>
            <p>Total Price : </p>
            <p>Total Shipping Charge : </p>
            <p>Tax : </p>
            <p>Grand Total : </p>
        </div>
    );
};

export default Cart;