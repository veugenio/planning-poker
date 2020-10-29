import './Deck.css';
import Card from './Card.js';
import React from 'react';

class Deck extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { value: '0', active: 0 },
        { value: '1', active: 0 },
        { value: '2', active: 0 },
        { value: '3', active: 0 },
        { value: '5', active: 0 },
        { value: '8', active: 0 },
        { value: '13', active: 0 },
        { value: '?', active: 0 }
      ]
    };
 
    this.select = this.select.bind(this);
  }

  select (value) {
    const cards = this.state.cards.map(card => {
      card.active = card.value === value;
      return card;
    });
    this.setState({cards: cards});
  }

  render () {
    return (
      <div className="Deck">
        {this.state.cards.map(card =>
          <Card key={card.value} value={card.value} active={card.active} onActivate={this.select} />
        )}
      </div>
    );
  }
}

export default Deck;
