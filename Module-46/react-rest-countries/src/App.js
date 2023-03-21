import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div className="loadCountries">
      <h1>Visiting Every country of the world</h1>
      <p>CountriesTotal : {countries.length}</p>
      {
        countries.map(country => <Country name={country.name.common}></Country>)
      }
    </div>
  );
}


function Country(props) {
  return (
    <div className="country">
      <h3> Name: {props.name}</h3>
    </div>
  );
}

export default App;
