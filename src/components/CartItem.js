import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <li>
      {item.name} - $
      <span id={`cart-item-price-${item.id}`}>{item.price}</span> x
      <span id={`cart-amount-${item.id}`}> {item.quantity} </span>
      <button id={`increment-btn-${item.id}`} onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })}>+</button>
      <button id={`decrement-btn-${item.id}`} onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })}>-</button>
      <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>Remove</button>
    </li>
  );
};

export default CartItem;
