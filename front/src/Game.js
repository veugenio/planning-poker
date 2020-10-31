import './Game.css';
import Client from './Client.js';
import { useEffect, useState } from 'react';

function Game(props) {

  const [ name, setName ] = useState('');
  const [ state, setState ] = useState('init');

  const resetGame = e => {
    Client.emit('reset-game');
    setState('playing');
    e.preventDefault();
  }

  const submitName = e => {
    if (name !== '') {
      Client.emit('set-name', name);
      setState('playing');
    }
    e.preventDefault();
  }

  if (state === 'playing' && name === '') {
    setState('init');
  }
  if (state === 'playing' && !props.players.filter(player => player.value < 0 ).length) {
    setState('done');
  }

  useEffect(() => {
    Client.on('reset-game', () => {
      setState('playing');
    })
  }, []);

  const screens = {
    'init': <form onSubmit={submitName}>
        <p>Enter your name</p>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={submitName}>Go</button>
      </form>,
    'done': <form>
        <p>Game done!</p>
        <button onClick={resetGame}>Play again</button>
      </form>
  }
  return (
    <div className={`Game ${state}`}>
      {screens[state]}
    </div>
  );
}

export default Game;
