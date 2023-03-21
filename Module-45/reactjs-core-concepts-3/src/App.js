import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}


function LoadComments() {
  const [comments, setComments] = useState([]);
  
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])
  
  return (
    <div className="comments">
      <h2>{comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  );
}


function Comment (props) {
  return(
    <div className="comment">
      <h2>Email: {props.email}</h2>
      <p>{props.body}</p>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handaleDecrease = () => setCount(count - 1);
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handaleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
