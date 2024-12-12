import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 0; // Inicialmente vacío

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      {itemCount > 0 && <span>{itemCount}</span>}
    </div>
  );
};

export default CartWidget;
