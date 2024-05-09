/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add functionality to add this product to cart */}
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
