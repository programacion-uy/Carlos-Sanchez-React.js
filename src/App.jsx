import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // Contexto del carrito
import NavBar from "./components/NavBar/NavBar"; // Encabezado principal
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSummary from "./pages/OrderSummary";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar /> {/* Solo este componente manejará el encabezado */}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:categoryId" element={<Home />} />
          <Route path="/item/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
