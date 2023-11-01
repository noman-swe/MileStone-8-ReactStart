// use local storage to manage cart data
const addTodb = id => {

    let shoppingCart;

    // get the shopping cart //shoppingCart ta jodi localStorage e thake taile oi shoppingCart ta k JSON.parse() use kore string theke object e convert kore nicchi
    const storedItemsInCart = localStorage.getItem('shopping-cart');
    if (storedItemsInCart) {
        shoppingCart = JSON.parse(storedItemsInCart);
    }
    else {
        shoppingCart = {};
    }

    // add quantity
    const quantity = shoppingCart[id]; //ei id ta shopping cart e asy kina thakle value  + 1  koretesi, na thake er value 1 kore dicchi
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
        const shoppingCart = JSON.parse(storedCart); //string ta k object e convert kore nilam
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

export { addTodb, removeFromDB, deleteShoppingCart }