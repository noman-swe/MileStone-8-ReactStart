import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Count></Count>
      <Comments></Comments>
    </div>
  );
}

function Comments() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  return (
    <div className="comments">
      <h2>Comments: {comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  );
}


function Comment(props) {
  return (
    <div className="comment">
      <h3>Email: {props.email} </h3>
      <p>{props.body}</p>
    </div>
  );
}


function Count() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count + 1);
  const handelDecrease = () => setCount(count - 1);
  return (
    <div className="count">
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  );
}

export default App;
