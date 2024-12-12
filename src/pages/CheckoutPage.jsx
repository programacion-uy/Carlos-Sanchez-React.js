import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebaseConfig";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

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

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    setError("");

    if (form.email !== form.confirmEmail) {
      setError("Los emails no coinciden.");
      return;
    }

    // Generar el código único para la orden
    const orderCode = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Serializar los items del carrito
    const serializedCart = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity || 1, // Si usas cantidades
    }));

    const orderData = {
      orderCode,
      items: serializedCart,
      total: serializedCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      customer: {
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
      },
      date: new Date().toISOString(),
      status: "Pendiente",
    };

    try {
      // Guardar la orden en Firestore
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, orderData);

      // Limpiar el carrito y redirigir al resumen
      clearCart();
      navigate("/order-summary", { state: { ...orderData } });
    } catch (err) {
      console.error("Error al guardar la orden:", err);
      setError("Hubo un error al guardar la orden. Por favor, inténtelo de nuevo.");
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="checkout-page">
      <div className="container my-5">
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <form onSubmit={handleConfirmOrder}>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  <span>{item.title}</span>
                  <span>
                    ${item.price.toFixed(2)} x {item.quantity || 1}
                  </span>
                </li>
              ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <div className="mb-3">
              <label>Nombre</label>
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
              <label>Apellido</label>
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
              <label>Teléfono</label>
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
              <label>Email</label>
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
              <label>Confirmar Email</label>
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
