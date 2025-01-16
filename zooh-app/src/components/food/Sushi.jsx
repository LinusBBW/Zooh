import React from 'react';
import './FoodArticle.css';

export default function Sushi() {
  return (
    <div className="food-article">
      <h1>Sushi</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/sushi.jpg`}
        alt="Sushi"
        className="food-article-image"
      />
      <p>
        Sushi, a cornerstone of Japanese cuisine, has gained international acclaim for its exquisite flavors, artistic presentation, and cultural significance. Rooted in centuries of tradition, sushi has evolved into a global culinary phenomenon.
      </p>
      <h2>The Origins of Sushi</h2>
      <p>
        The word "sushi" originally referred to a method of preserving fish in fermented rice. This practice began in Southeast Asia and spread to Japan over 1,000 years ago. By the Edo period (1603–1868), sushi had transformed into a fast food enjoyed by locals in bustling markets.
      </p>
      <h2>Types of Sushi</h2>
      <ul>
        <li>
          <b>Nigiri:</b> Hand-pressed rice topped with fresh fish or seafood.
        </li>
        <li>
          <b>Maki:</b> Roll-shaped sushi with rice and fillings wrapped in seaweed (nori).
        </li>
        <li>
          <b>Temaki:</b> Cone-shaped sushi, perfect for eating on the go.
        </li>
      </ul>
      <h2>Modern Sushi Culture</h2>
      <p>
        Today, sushi is enjoyed around the world in diverse forms, from high-end omakase dining to quick supermarket options. Sushi chefs undergo years of rigorous training to master the craft, focusing on precision, balance, and respect for ingredients.
      </p>
      <p>
        Sushi's global appeal lies in its versatility, simplicity, and emphasis on fresh, high-quality ingredients. It’s not just a meal—it’s an experience.
      </p>
    </div>
  );
}
