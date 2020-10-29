import logo from './logo.svg';
import './App.css';
import Deck from './Deck.js';
import Players from './Players.js';

function App() {
  return (
    <div className="App">
      <Players />
      <Deck/>
    </div>
  );
}

export default App;
