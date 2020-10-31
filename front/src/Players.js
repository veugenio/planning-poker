import './Players.css';
import Player from './Player.js';
import Client from './Client.js';

function Players(props) {

  const players = props.players;
  const showCard = !players.filter(player => player.value < 0).length;
  const opponents = players.filter(player => player.id !== Client.id);

  return (
    <div className="Players">
      { opponents.map(player =>
        <Player key={player.id} id={player.id} value={player.value} name={player.name} showCard={showCard} />
      )}
    </div>
  );
}

export default Players;

