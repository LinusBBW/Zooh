import React from 'react';
import FoodSelection from './FoodSelection';
import NewsSection from './NewsSection';

export default function FoodPage() {
  return (
    <div className="zoo-map-page">
      <div className="grid">
        <FoodSelection />
        <NewsSection />
      </div>
    </div>
  );
}
