import logo from './logo.svg';
import './App.css';

const name = 'Shibly';
const singers = [
  { name: 'Robindranath Thakur', job: 'Singer' },
  { name: 'Shanto', job: 'Singer' },
  { name: 'Kazi Nazrul', job: 'Chol Chol' },
  { name: 'Mixed', job: 'sabbash Bd' }
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
}

function App() {
  const cricketers = ['Mashrafe Bin Murtaza', 'Tamim Ikbal', 'Sakib Al Hasan', 'Mushfikur Rahim', 'Mahmudullah Riyad', 'Taskin', 'Towhid Hridoy'];
  return (
    <div className="App">
      {
        /* <Person name='Mashrafe Bin Murtaza' occupation='Former Captain of Bangladesh Cricket Team'></Person>
        <Person name='Tamim Ikbal' occupation='ODI Captain of BD Cricket Team'></Person>
        <Person name='Sakib Al Hasan' occupation='T20 Captain of BD Cricket Team'></Person>
        <h5>New component</h5>
        <Friend name='Shanto' studiesIn='Social Work'></Friend>
        <Friend name='Alif' studiesIn='SWE'></Friend> */
      }
      {
        // cricketers.map(cricketer => <ol><b>Name:</b> {cricketer} </ol>)
      }
      {
        cricketers.map(cricketer => <Person name={cricketer}> </Person>)
      }

      {
        // array of object theke data niye display
        singers.map(singer => <Person name={singer.name}></Person>)
      }


    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person ">
      <h1>{props.name}</h1>
      {/* <p>{props.occupation}</p> */}
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
