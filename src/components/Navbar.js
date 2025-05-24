import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      🛒 Cart (<span id="nav-cart-item-count">{totalCount}</span>)
    </nav>
  );
};

export default Navbar;
