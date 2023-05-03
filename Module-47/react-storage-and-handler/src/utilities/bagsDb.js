const bagsDb = id => {
    let bagsCart = {};

    const storedBags = localStorage.getItem('bags-cart');
    if(storedBags){
        bagsCart = JSON.parse(storedBags);
    }

    const quantity = bagsCart[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        bagsCart[id] = newQuantity;
    }
    else {
        bagsCart[id] = 1; 
    }

    localStorage.setItem('bags-cart', JSON.stringify(bagsCart));
}

export { bagsDb }