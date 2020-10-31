import './App.css';
import Deck from './Deck.js';
import Players from './Players.js';
import { useEffect, useState } from 'react';
import Client from './Client.js';

function App() {

  const [ players, setPlayers ] = useState([]);

  useEffect(() => {
    Client.on("players-update", data => {
      setPlayers(data.players);
    });
  }, []);

  return (
    <div className="App">
      <Players players={players} />
      <Deck/>
    </div>
  );
}

export default App;
