import './App.css';

function App() {
  return (
    <div className="App">
      <District name='Noakhali' special='Bivag'></District>
      <District name='Tangail' special='ChomChooom'></District>
      <District name='Sylhet' special='London'></District>
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
  return (
    <div className="district" style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Speciality:{props.special}</p>
    </div>
  );
}
export default App;
