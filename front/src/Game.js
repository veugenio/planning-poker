import './Game.css';
import Client from './Client.js';

function Game(props) {
  const done = !props.players.filter(player => player.value < 0 ).length;
  const className = done ? 'Game done' : 'Game';
  const resetGame = () => {
    Client.emit('reset-game', {});
  }
  return (
    <div className={className}>
      <p>Game done!</p>
      <button onClick={resetGame}>Play again</button>
    </div>
  );
}

export default Game;
