import React from 'react';
import './FoodArticle.css';

export default function Tacos() {
  return (
    <div className="food-article">
      <h1>Tacos</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/tacos.jpg`}
        alt="Tacos"
        className="food-article-image"
      />
      <p>
        Tacos are more than just food—they are a symbol of Mexican heritage and culture. Simple yet bursting with flavor, tacos have won hearts across the globe with their endless variety and bold taste.
      </p>
      <h2>A Brief History of Tacos</h2>
      <p>
        The origins of tacos can be traced back to the indigenous people of Mexico, who used soft corn tortillas as edible spoons for scooping food. The word "taco" itself comes from the Nahuatl word "tlahco," meaning "half" or "in the middle."
      </p>
      <h2>Famous Taco Styles</h2>
      <ul>
        <li>
          <b>Al Pastor:</b> Marinated pork cooked on a spit, inspired by Middle Eastern shawarma.
        </li>
        <li>
          <b>Carne Asada:</b> Grilled beef seasoned with lime, garlic, and spices.
        </li>
        <li>
          <b>Fish Tacos:</b> A Baja California specialty featuring crispy fish and fresh toppings.
        </li>
      </ul>
      <h2>Tacos Today</h2>
      <p>
        Whether served on street corners or in gourmet restaurants, tacos have become a culinary canvas for chefs to showcase their creativity. The beauty of tacos lies in their simplicity and ability to adapt to new flavors and trends.
      </p>
    </div>
  );
}
