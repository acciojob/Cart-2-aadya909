import React from 'react';
import { CartProvider } from '../context/CartContext';
import Navbar from './Navbar';
import CartList from './CartList';

const App = () => {
  return (
    <CartProvider>
      <div id="main">
        <Navbar />
        <CartList />
      </div>
    </CartProvider>
  );
};

export default App;


