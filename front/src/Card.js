import './Card.css';

function Card (props) {
  let className = 'Card';
  if (props.active) {
    className += ' active';
  }
  return (
    <div className={className} onClick={() => props.onActivate(props.value)} >
      <span className="Value">{props.value}</span>
    </div>
  );
}

export default Card;
