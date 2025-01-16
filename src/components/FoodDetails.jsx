import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetails.css';

export default function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/food/${id}`)
      .then((response) => response.json())
      .then((data) => setFood(data))
      .catch((error) => console.error('Error fetching food details:', error));
  }, [id]);

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-details">
      <h1>{food.name}</h1>
      <img src={food.image} alt={food.name} className="food-details-image" />
      <p className="food-description">{food.description}</p>
      <div className="food-details-text">{food.details}</div>
    </div>
  );
}
