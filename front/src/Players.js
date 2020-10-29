import './Players.css';
import Player from './Player.js';
import Client from './Client.js';


function Players(props) {

  const players = props.players.filter(player => player.id !== Client.id);
  return (
    <div className="Players">
      { players.map(player =>
        <Player key={player.id} id={player.id} value={player.value} name={player.name} />
      )}
    </div>
  );
}

export default Players;

