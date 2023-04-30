// use local storage to manage cart data

const addTodb = id => {

    let shoppingCart;

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

// remove from cart
const removeFromDB = id => {
    // console.log('remove', id);
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            // console.log('exists in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

        }

    }
}


// to delete all shopping cart 
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { addTodb, removeFromDB, deleteShoppingCart}