import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartTest = () => {
  const { cart, addItem, cartTotal } = useContext(CartContext);

  const handleAddItem = () => {
    const newItem = { id: 1, name: 'Video de Programación', price: 10 }; // Ítem de prueba
    addItem(newItem, 1);
  };

  return (
    <div>
      <h2>Prueba del Carrito</h2>
      <button onClick={handleAddItem}>Añadir ítem al carrito</button>
      <p>Total de ítems en el carrito: {cartTotal}</p>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartTest;
