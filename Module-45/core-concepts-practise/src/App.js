import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Comments></Comments>
    </div>
  );
}

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, [])

  return (
    <div className="comments">
      {
        comments.map(comment => <Comment naam={comment.name} mail={comment.email} details={comment.body}> </Comment>)
      }
    </div>
  );
}


function Comment(props) {
  const newStyle = {
    backgroundColor: 'orange',
    padding: '20px',
    margin: '20px',
    borderRadius: '20px',
  }
  return (
    <div className="comment" style={newStyle}>
      <h3>Name:{props.naam}</h3>
      <h4>Email:{props.mail}</h4>
      <p>{props.details}</p>

    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className="counter">
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
