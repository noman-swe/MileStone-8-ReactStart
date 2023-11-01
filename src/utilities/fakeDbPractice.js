const addToDbPractice = id => {
    let cartObj = getStoredShoppingCart();

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
    const cartObj = getStoredShoppingCart();
    if (id in cartObj) {
        delete cartObj[id];
        localStorage.setItem('ema-cart', JSON.stringify(cartObj))
    }
}

// 49-5 (advanced) Load cart from local storage, find product
/* objective is : 
    *
*/

// getcart function
const getStoredShoppingCart = () => {
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
    getStoredShoppingCart,
    deleteShoppingCart
}