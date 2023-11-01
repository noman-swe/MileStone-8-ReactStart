// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart(); //shoppingCart variable e getShoppingCart function theke return e pawa object ta k rakhlam

    // add quantity
    const quantity = shoppingCart[id];//oi object er id gulo k dhorlam quantity diye
    if (!quantity) {
        shoppingCart[id] = 1; //jodi kono id er existing quantity na thake taile oi id ta te value 1 set kora hoilo ;; ar thakle else er vitor oitar value update er process kora holo.
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity; 
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart)); // localStorage e set kora hoilo
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart); //jodi shoppingCart ta localStorage e thake taile seta k object e convert kore nilam. 
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
