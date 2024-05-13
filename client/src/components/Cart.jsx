// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Cart = () => {
  // Dummy data for cart items (Replace with actual implementation)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 }
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price}</span>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
