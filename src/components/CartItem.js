import React from 'react';

const CartItem = ({ item, dispatch }) => {
  const { id, name, price, quantity } = item;

  return (
    <div>
      <h3>{name}</h3>
      <p id={`cart-item-price-${id}`}>${price}</p>

      <div>
        <button
          id={`decrement-btn-${id}`}
          onClick={() => dispatch({ type: 'DECREMENT', payload: id })}
        >
          -
        </button>

        <span id={`cart-amount-${id}`}>{quantity}</span>

        <button
          id={`increment-btn-${id}`}
          onClick={() => dispatch({ type: 'INCREMENT', payload: id })}
        >
          +
        </button>
      </div>

      <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;

