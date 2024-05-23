// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Check</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
