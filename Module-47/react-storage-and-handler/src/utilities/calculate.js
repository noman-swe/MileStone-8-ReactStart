const add = (first, second) => {
    return (first + second)
}
const multiply = (first, second) => {
    return (first * second);
}

/* //array reducer
const numbers = [20, 24, 30, 66];
const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer, 0); */


const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0)
    return total;

}


export {
    add,
    multiply,
    getTotalPrice as getTotal
};