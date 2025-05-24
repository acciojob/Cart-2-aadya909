import React from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import CartItem from './CartItem';

const CartList = () => {
  const { state, dispatch } = useCart();

  const handleClear = () => dispatch({ type: 'CLEAR_CART' });

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {state.items.length === 0 ? (
        <p>Cart is currently empty</p>
      ) : (
        <>
          <ul id="cart-items-list">
            {state.items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <button id="clear-all-cart" onClick={handleClear}>Clear Cart</button>
          <p>Total: $<span id="cart-total-amount">{total}</span></p>
        </>
      )}

      <h3>Products</h3>
      {products.map(product => (
        <button key={product.id} onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
          Add {product.name}
        </button>
      ))}
    </div>
  );
};

export default CartList;
