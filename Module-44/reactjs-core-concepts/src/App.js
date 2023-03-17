import logo from './logo.svg';
import './App.css';

const name = 'Shibly';
const singer = { name: 'Robindranath Thakur', job: 'Singer' }
const singer2 = { name: 'Shanto', job: 'Singer' }

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <h5>New component</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>

    </div>
  );
}

function Person() {
  return (
    <div className="person ">
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricketer</p>
    </div>
  );
}

function Friend() {
  return (
    <div className="myFriend container">
      <h3>Name: Ajoy</h3>
      <p>Job: Maramari</p>
    </div>
  )
}


export default App;
