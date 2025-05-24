import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const CartList = () => {
  const { state, dispatch } = useCart();

  if (state.items.length === 0) {
    return <p>Cart is currently empty</p>;
  }

  return (
    <>
      <div id="cart-items-list"> {/* ✅ REQUIRED for Cypress */}
        {state.items.map(item => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
      <button id="clear-all-cart" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Clear Cart
      </button>
      <p>Total: $<span id="cart-total-amount">{state.items.reduce((total, item) => total + item.price * item.quantity, 0)}</span></p>
    </>
  );
};

export default CartList;

