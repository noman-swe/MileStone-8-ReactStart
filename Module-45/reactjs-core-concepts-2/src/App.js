import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers> </ExternalUsers>

    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));

    }, []
  );

  return (
    <div className="user">
      <h2>Externam Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

// 

function User (props){
return(
  <div className="user" style={{border: '3px solid red', margin:'20px'}} >
    <h3>Name: {props.name}</h3>
    <p>Email: {props.email}</p>
  </div>
)
}

// 

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  // Shorter the format
  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="count">
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;

// 
/* const products = [
  { name: 'laptop', price: 53000 },
  { name: 'phone', price: 93000 },
  { name: 'watch', price: 33000 },
  { name: 'tablet', price: 5200 },
]; 

{/* <Product title='Gun' price='5000'></Product>
      <Product title='Glue' price='15154'></Product>
      <Product title='Chair' price='9854'></Product> }

      {products.map(product => <Product name={product.name} price={product.price} > </Product>)}

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

*/
