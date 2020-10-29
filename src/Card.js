import './Card.css';
// import Game from './Game.js'
import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.activate = this.activate.bind(this);
  }

  activate() {
    this.props.onActivate(this.props.value);
  }

  render () {
    let className = 'Card';
    if (this.props.active) {
      className += ' active';
    }
    return (
      <div className={className} onClick={() => this.props.onActivate(this.props.value)}>
        <span className="Value">{this.props.value}</span>
      </div>
    );
  }
}
// function Card (props) {
//   let className = 'Card';
//   if (props.active) {
//     className += ' active';
//   }
//   const activate = obj => {
//     props.onActivate(obj);
//   }
//   return (
//     <div className={className} onClick={activate} >
//       <span className="Value">{props.value}</span>
//     </div>
//   );
// }

export default Card;
