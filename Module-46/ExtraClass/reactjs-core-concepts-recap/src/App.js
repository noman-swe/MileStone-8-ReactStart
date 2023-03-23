import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts ></LoadPosts>
      <District name='Noakhali' special='Bivag'></District>
      <District name='Tangail' special='ChomChooom'></District>
      <District name='Sylhet' special='London'></District>
    </div>
  );
}


function LoadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="load-posts">
      <h3>Title:{posts.length}</h3>
    {
      posts.map(post=> <Post post={post}></Post>)
    }
    </div>
  );
}

function Post (props) {
  const {title, body} = props.post;
  return(
    <div className="posts" style={districtStyle}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
    );
}


const districtStyle = {
  backgroundColor: 'gray',
  margin: '20px',
  padding: '20px',
  borderRadius: '20px',
}

function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div className="district" style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Speciality:{props.special}</p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}
export default App;
