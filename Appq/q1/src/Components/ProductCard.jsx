// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
      <img src={product.img} alt={product.brand} style={{ width: '100%' }} />
      <h3>{product.brand}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.details}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductCard;
