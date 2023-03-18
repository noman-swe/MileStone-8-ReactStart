import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: 53000 },
    { name: 'phone', price: 93000 },
    { name: 'watch', price: 33000 },
    { name: 'tablet', price: 5200 },
  ];
  return (
    <div className="App">
      {/* <Product title='Gun' price='5000'></Product>
      <Product title='Glue' price='15154'></Product>
      <Product title='Chair' price='9854'></Product> */}

      {products.map(product => <Product name={product.name} price={product.price} > </Product>)}

    </div>
  );
}

// another component
function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}$</p>
    </div>
  );
}

export default App;
