import React, { useEffect, useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/news')
      .then((response) => response.json())
      .then((data) => {
        // Sort news by date in descending order
        const sortedNews = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNewsItems(sortedNews);
      })
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">Zoo News</h1>
      {newsItems.map((item, index) => (
        <article key={index} className="news-card">
          <div className="news-image-container">
            <img
              src={item.image ? `${process.env.PUBLIC_URL}${item.image}` : null}
              alt={item.title}
              className="news-image"
            />
            <div className="news-overlay">
              <h2>{item.title}</h2>
              <p>{item.preview}</p>
            </div>
          </div>
          <div className="news-content">
            <p className="news-date">{new Date(item.date).toLocaleDateString()}</p>
            <p className="news-excerpt">{item.preview}</p>
            <a href={item.link} className="read-more-btn">Read More</a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsPage;
