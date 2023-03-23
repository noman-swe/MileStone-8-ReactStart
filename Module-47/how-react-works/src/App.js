import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Device name='IPhone' price='13000'></Device>
        <Watch></Watch>
      </header>
    </div>
  );
}

export default App;
