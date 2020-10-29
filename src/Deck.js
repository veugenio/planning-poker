import './Deck.css';
import Card from './Card.js';

const cards = [{
    value: '0',
    active: 0
  }, {
    value: '1',
    active: 0
  },
  {
    value: '2',
    active: 0
  },
  {
    value: '3',
    active: 0
  },
  {
    value: '5',
    active: 0
  },
  {
    value: '8',
    active: 0
  },
  {
    value: '13',
    active: 0
  },
  {
    value: '?',
    active: 0
  }];

function Deck() {
  const select = value => {
    cards.forEach(card => {
      card.active = card.value === value;
    });
    
    console.log(value);
  };
  return (
    <div className="Deck">
      {cards.map(card =>
        <Card key={card.value} value={card.value} active={card.active} onActivate={select} />
      )}
    </div>
  );
}

export default Deck;
