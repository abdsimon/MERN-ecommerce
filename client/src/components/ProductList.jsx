// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Products </h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.name}</a>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
