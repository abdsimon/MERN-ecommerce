// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




  

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
