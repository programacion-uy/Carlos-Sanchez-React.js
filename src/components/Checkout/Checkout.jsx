import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setError("");

    if (form.email !== form.confirmEmail) {
      setError("Los emails no coinciden.");
      return;
    }

    const orderData = {
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      customer: form,
    };

    // Vaciar el carrito
    clearCart();

    // Redirigir al resumen de la orden
    navigate("/order-summary", { state: orderData });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <Header categorias={[]} />
      <div className="container my-5">
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <p>El carrito está vacío. Agrega productos antes de proceder al checkout.</p>
        ) : (
          <form onSubmit={handleConfirmOrder}>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{item.title} - ${item.price.toFixed(2)}</span>
                  <span>1x</span>
                </li>
              ))}
            </ul>
            <h3 className="mb-3">Total: ${total.toFixed(2)}</h3>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirmar Email</label>
              <input
                type="email"
                className="form-control"
                name="confirmEmail"
                value={form.confirmEmail}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-success">
              Confirmar Orden
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
