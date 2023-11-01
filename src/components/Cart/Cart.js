import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    console.log(cart);

    let total = 0;
    let shipping = 0;

    // to calculate and show in ui quantity of shopping
    let quantity = 1;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        // console.log(product.shipping);
    }

    // const taxCal = total * 0.1;  //10% tax added
    const tax = Number((total * 0.1).toFixed(2)); //also can use parseFloat() besides Number;

    // grand total calculation
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>

            {/* //cart length hisheb na kore quantity hisheb korte hobe; <p>Selected Items : {cart.length} </p> */}
            <p>Selected Items : {quantity} </p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : {shipping}</p>
            <p>Tax : {tax} </p>
            <h5>Grand Total : {grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;