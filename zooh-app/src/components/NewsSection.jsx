import React, { useEffect, useState } from 'react';
import './NewsSection.css';

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/news')
      .then((response) => response.json())
      .then((data) => {
        const sortedNews = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNewsItems(sortedNews.slice(0, 3));
      })
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="news-section">
      <h2>Zoo News</h2>
      <div className="news-list">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <img
              src={item.image ? `${process.env.PUBLIC_URL}${item.image}` : null}
              alt={item.title}
              className="news-image"
            />
            <div className="news-overlay">
              <h3>{item.title}</h3>
              <p className="news-preview">{item.preview}</p>
              <a href={item.link} className="news-link">View All</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
