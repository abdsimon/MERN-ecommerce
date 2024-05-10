/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div>
  
      
      <p>Price: ${product.price}</p>
 
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
