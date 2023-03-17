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
      <Person name='Mashrafe Bin Murtaza' occupation='Former Captain of Bangladesh Cricket Team'></Person>
      <Person name='Tamim Ikbal' occupation='ODI Captain of BD Cricket Team'></Person>
      <Person name='Sakib Al Hasan' occupation='T20 Captain of BD Cricket Team'></Person>
      <h5>New component</h5>
      <Friend name='Shanto' studiesIn='Social Work'></Friend>
      <Friend name='Alif' studiesIn='SWE'></Friend>

    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person ">
      <h1>{props.name}</h1>
      <p>Profession: {props.occupation}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="myFriend container">
      <h3>Name: {props.name}</h3>
      <p>Studies in: {props.studiesIn}</p>
    </div>
  )
}


export default App;
