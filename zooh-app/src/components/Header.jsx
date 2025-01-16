import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [links, setLinks] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching links from an API or a database
    const availableLinks = [
      '/',
      '/map',
      '/news',
      '/food',
      '/tickets',
      '/articles/new-otters',
      '/articles/welcome-arang',
      '/articles/new-habitat',
      '/food/sushi',
      '/food/tacos',
      '/food/streetfood',
      '/profile',
    ];
    setLinks(availableLinks);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const matchedLink = links.find((link) => link.includes(searchTerm.toLowerCase()));
      if (matchedLink) {
        navigate(matchedLink);
      } else {
        alert('No matching link found.');
      }
    } else {
      const filteredSuggestions = links.filter((link) => link.includes(searchTerm.toLowerCase()));
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(suggestion);
  };

  return (
    <div className="header">
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search animals..."
      className="search-input"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={handleSearch}
    />
    <FaSearch size={20} color="#555" />
    {suggestions.length > 0 && (
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    )}
  </div>
  <div className="icons">
    {/* Shopping Cart Icon */}
    <Link to="/tickets" className="icon-link">
      <FaShoppingCart size={24} color="white" />
    </Link>
    {/* User Icon */}
    <Link to="/profile" className="icon-link">
      <FaUser size={24} color="white" />
    </Link>
  </div>
</div>
  );
}
