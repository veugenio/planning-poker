import Veia from "./logo.svg";
import './Player.css';

const avatar = type => {
  const avatars = {
    'veia': Veia
  };
  return avatars[type ? type : 'veia'];
}

function Player(props) {
  const done =  props.value >= 0 ? 'Player done' : 'Player';
  console.log(done, props.value);
  return (
    <div className={done}>
      <span className="Avatar">
        <img src={avatar(props.avatar)} alt={props.name} />
      </span>
      <div>{props.name}</div>
      <small>{props.id}</small>
    </div>
  );
}

export default Player;
