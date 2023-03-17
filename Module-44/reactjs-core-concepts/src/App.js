import logo from './logo.svg';
import './App.css';

const name = 'Shibly';
const singer= {name: 'Robindranath Thakur', job: 'Singer'}
const singer2= {name: 'Shanto', job: 'Singer'}

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude react! how are you?</h3>
        </div>

        <div className="music">
          <p>Name: {'Noman ' + name}</p>
          <p>Name: {singer.name}</p>
          <p style={singerStyle}>Name: {singer2.name}</p>
          <p style={{color:'yellow', backgroundColor: 'tomato'}}>Job: {singer2.job}</p>
          
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Earn React App
        </a>
      </header>
    </div>
  );
}

export default App;
