import './Players.css';
import Player from './Player.js';
import Client from './Client.js';


function Players(props) {

  console.log(props.players)
  const players = props.players.filter(player => { 
    return player.id !== Client.id
  });
  return (
    <div className="Players">
      { players.map(player =>
        <Player key={player.id} id={player.id} name={player.name} />
      )}
    </div>
  );
}

export default Players;

