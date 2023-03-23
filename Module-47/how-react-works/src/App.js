import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Device name='IPhone' price='13000'></Device>
      </header>
    </div>
  );
}

export default App;
