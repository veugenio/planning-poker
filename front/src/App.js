import './App.css';
import Deck from './Deck.js';
import Players from './Players.js';
import { useEffect, useState } from 'react';
import Client from './Client.js';
import Game from './Game.js';

function App() {

  const [ players, setPlayers ] = useState([]);

  useEffect(() => {
    Client.on("players-update", data => {
      setPlayers(data.players);
    });
  }, []);

  return (
    <div className="App">
      <Game players={players} />
      <Players players={players} />
      <Deck/>
    </div>
  );
}

export default App;
