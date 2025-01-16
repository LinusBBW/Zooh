import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ZooApp.css';

export default function ZooApp() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching cards:', error));
  }, []);

  return (
    <div className="zoo-app">
      <div className="grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle || 'Learn more about this exciting attraction!'}
            image={card.image ? `${process.env.PUBLIC_URL}${card.image}` : null}
            className={card.large ? 'large' : ''}
          />
        ))}
      </div>
    </div>
  );
}
