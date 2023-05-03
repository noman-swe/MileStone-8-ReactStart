import './App.css';
import Bags from './components/Bags/Bags';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Bags></Bags>
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
