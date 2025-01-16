import React from 'react';
import MapSection from './MapSection';
import NewsSection from './NewsSection';
import './ZooMapPage.css';

export default function ZooMapPage() {
  return (
    <div className="zoo-map-page">
      <div className="grid">
        <MapSection />
        <NewsSection />
      </div>
    </div>
  );
}
