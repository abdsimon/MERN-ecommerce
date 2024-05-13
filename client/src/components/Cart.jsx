import React, { useState } from 'react';




  return (
  
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
