import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      
      <div className="container my-5">
        <h1>Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div>
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.title}</h5>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <button className="btn btn-warning" onClick={clearCart}>
                Vaciar Carrito
              </button>
              <button className="btn btn-success ms-3" onClick={() => navigate("/checkout")}>
                Proceder al Pago
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
