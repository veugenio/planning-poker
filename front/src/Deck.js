import './Deck.css';
import Card from './Card.js';
import { useState, useEffect } from 'react';
import Client from './Client.js';

function Deck () {
  const [ cards, setCards ] = useState([
    { value: '0', active: 0 },
    { value: '1', active: 0 },
    { value: '2', active: 0 },
    { value: '3', active: 0 },
    { value: '5', active: 0 },
    { value: '8', active: 0 },
    { value: '13', active: 0 },
    { value: '?', active: 0 }
  ]);
  const select = value => {
    Client.emit('select-card', value);

    setCards(cards.map(card => {
      card.active = card.value === value;
      return card;
    }));
  };

  useEffect(() => {
    Client.on('reset-game', () => {
      setCards(cards.map(card => {
        card.active = 0;
        return card;
      }));
    })
  }, ['cards']);

  return (
    <div className="Deck">
      {cards.map(card =>
        <Card key={card.value} value={card.value} active={card.active} onActivate={select} />
      )}
    </div>
  );
}

export default Deck;
