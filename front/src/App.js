import './App.css';
import Deck from './Deck.js';
import Players from './Players.js';
import { useEffect, useState } from 'react';
import Client from './Client.js';

function App() {

  const [ players, setPlayers ] = useState([]);
  Client.on("FromAPI", data => {
    setPlayers(data.players);
  });
  // useEffect(() => {}, []);

  return (
    <div className="App">
      <Players players={players} />
      <Deck/>
    </div>
  );
}

export default App;
