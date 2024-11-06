import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from './Product'; 
import './CategoryPage.css';

function CategoryPage() {
  const { categoryName } = useParams();
  const products = useSelector((state) => state.product.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const categoryProducts = products.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );
    setFilteredProducts(categoryProducts);
  }, [categoryName, products]);

  return (
    <div className="category-page">
      <div className="category-page__product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className="category-page__no-products">Sorry, no products available for this category. Please check again later.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
