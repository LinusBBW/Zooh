import React, { useEffect, useState } from 'react';
import './FoodSelection.css';

export default function FoodSelection() {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Starting fetch...');
    setLoading(true);
    
    fetch('http://localhost:3000/food')
      .then(response => {
        console.log('Response received:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        if (Array.isArray(data)) {
          console.log('Setting food items:', data.length, 'items');
          setFoodItems(data);
        } else {
          console.error('Data is not an array:', data);
          setError('Invalid data format received');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log('Current foodItems:', foodItems);
  console.log('Loading:', loading);
  console.log('Error:', error);

  if (error) {
    return <div>Error loading food items: {error}</div>;
  }

  if (loading) {
    return <div>Loading food items...</div>;
  }

  return (
    <div className="food-selection">
      <h2>Food</h2>
      <div className="food-list">
        {foodItems && foodItems.length > 0 ? (
          foodItems.map((item) => (
            <div className="food-item" key={item.id}>
              <img 
                src={process.env.PUBLIC_URL + item.image} 
                alt={item.name} 
                className="food-image"
                onError={(e) => console.error('Image failed to load:', e.target.src)}
              />
              <div className="food-overlay">
                <div className="food-name">{item.name}</div>
                <div className="food-description">{item.description}</div>
                <a className="food-button" href={item.link}>Find out more</a>
              </div>
            </div>
          ))
        ) : (
          <div>No food items available</div>
        )}
      </div>
    </div>
  );
}