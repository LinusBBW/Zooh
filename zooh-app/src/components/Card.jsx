import React from 'react';
import './Card.css';
import { FaArrowRight } from 'react-icons/fa';

export default function Card({ image, title, subtitle }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
      <a className="card-button" href="/tickets">
        Get Started <FaArrowRight size={16} color="#fff" />
      </a>
    </div>
  );
}
