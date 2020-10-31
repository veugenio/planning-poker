import Card from "./Card";
import Veia from "./avatars/veia.svg";
import './Player.css';

const avatar = type => {
  const avatars = {
    'veia': Veia
  };
  return avatars[type ? type : 'veia'];
}

function Player(props) {
  const done =  !props.showCard && props.value >= 0 ? 'Player done' : 'Player';

  return (
    <div className={done}>
      <span className="Avatar">
        <img src={avatar(props.avatar)} alt={props.name} />
      </span>
      <div>{props.name}</div>
      <small>{props.id}</small>
      { props.showCard ? <Card value={props.value} active={true} /> : '' }
    </div>
  );
}

export default Player;
