import React from 'react';
import './FoodArticle.css';

export default function StreetFood() {
  return (
    <div className="food-article">
      <h1>Street Food</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/streetfood.jpg`}
        alt="Street Food"
        className="food-article-image"
      />
      <p>
        Street food is the heartbeat of many cultures, offering an authentic taste of local life. It’s affordable, flavorful, and carries the essence of the places it comes from.
      </p>
      <h2>The Roots of Street Food</h2>
      <p>
        Street food has existed for centuries, with origins in ancient Greece and Rome, where vendors sold bread, olives, and wine in bustling marketplaces. Today, it’s a global phenomenon, with every region offering its own unique specialties.
      </p>
      <h2>Iconic Street Foods Around the World</h2>
      <ul>
        <li>
          <b>Thailand:</b> Pad Thai and mango sticky rice.
        </li>
        <li>
          <b>India:</b> Chaat and samosas.
        </li>
        <li>
          <b>Mexico:</b> Tacos and tamales.
        </li>
      </ul>
      <h2>Why Street Food Matters</h2>
      <p>
        Street food connects people through shared experiences, offering a platform for culinary creativity. It’s a reflection of community, tradition, and innovation, making it a vital part of our food culture.
      </p>
    </div>
  );
}
