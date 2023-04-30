// local storage saves
const addToLocal = id => {
    let shoeCart = {};
    const storedShoes = localStorage.getItem('shoe-cart');
    if (storedShoes) {
        shoeCart = JSON.parse(storedShoes);
    }

    const quantity = shoeCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoeCart[id] = newQuantity;
    }
    else {
        shoeCart[id] = 1;
    }
    localStorage.setItem('shoe-cart', JSON.stringify(shoeCart));
}

export { addToLocal }