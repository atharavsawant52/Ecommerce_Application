import React from 'react'

function Slidebar() {
    const categories = [
        "Woman's Fashion", "Men's Fashion", "Electronics", 
        "Home & Lifestyle", "Medicine", "Sports & Outdoor", 
        "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
      ];
    
      return (
        <div className="sidebar">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Slidebar