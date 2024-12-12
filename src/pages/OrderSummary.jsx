import React from "react";
import { useLocation } from "react-router-dom"; // Asegúrate de importar useLocation
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderSummary = () => {
  const { state } = useLocation(); // Recibe los datos pasados desde CheckoutPage

  if (!state) {
    return (
      <div className="order-summary-page">
        <Header />
        <div className="container my-5">
          <h1>No hay datos para mostrar</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const { items, total, customer, orderCode } = state; // Agregamos orderCode para mostrarlo

  return (
    <div className="wrapper">
      <div className="order-summary-page">
        <div className="container my-5">
          <h1>Resumen de la Orden</h1>
          <h3 className="mt-4">Código de Orden</h3>
          <p><strong>{orderCode}</strong></p> {/* Mostramos el código de la orden */}
          <h3 className="mt-4">Cliente</h3>
          <p>
            <strong>Nombre:</strong> {customer.firstName} {customer.lastName}
          </p>
          <p>
            <strong>Teléfono:</strong> {customer.phone}
          </p>
          <p>
            <strong>Email:</strong> {customer.email}
          </p>

          <h3 className="mt-4">Productos</h3>
          <ul className="list-group mb-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-4">Total</h3>
          <p className="fw-bold">${total.toFixed(2)}</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OrderSummary;
