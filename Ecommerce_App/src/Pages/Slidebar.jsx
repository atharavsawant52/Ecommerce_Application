import React from 'react';
import { Link } from 'react-router-dom';

function Slidebar({ setSelectedCategory }) {
  const categories = [
    "Women's Fashion", "Men's Fashion", "Electronics", 
    "Home & Lifestyle", "Medicine", "Sports & Outdoor", 
    "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
  ];

  return (
    <div className="sidebar">
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setSelectedCategory(category.toLowerCase())}>
            <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slidebar;
