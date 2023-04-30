// use local storage to manage cart data

const addTodb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        // console.log('Already exists');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    } else {
        console.log('new Item')
        localStorage.setItem(id, 1);
    }
}

export { addTodb }