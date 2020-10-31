import './Card.css';

function Card (props) {
  let className = 'Card';
  if (props.active) {
    className += ' active';
  }

  const onClick = () => {
    typeof props.onActivate == 'function' && props.onActivate(props.value);
  }

  return (
    <div className={className} onClick={onClick} >
      <p className="Value">{props.value}</p>
    </div>
  );
}

export default Card;
