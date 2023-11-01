const addToDbPractice = id => {
    let cartObj = getShoppingCart();

    //add quantity
    const quantity = cartObj[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        cartObj[id] = newQuantity;
    } else {
        cartObj[id] = 1;
    }

    localStorage.setItem('ema-cart', JSON.stringify(cartObj));
}

// removeCart  
const removeFromCart = id => {
    const cartObj = getShoppingCart();
    if (id in cartObj) {
        delete cartObj[id];
        localStorage.setItem('ema-cart', JSON.stringify(cartObj))
    }
}


// getcart function
const getShoppingCart = () => {
    let cartObj = {};

    const storedCart = localStorage.getItem('ema-cart');
    if (storedCart) {
        cartObj = JSON.parse(storedCart);
    } 
    return cartObj;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('ema-cart');
}

export {
    addToDbPractice,
    removeFromCart,
    getShoppingCart,
    deleteShoppingCart
}