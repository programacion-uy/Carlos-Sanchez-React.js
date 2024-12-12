import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
const CartContext = createContext();

// Proveedor del Contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Recuperar el carrito desde la sesión (si existe)
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Función para agregar un curso al carrito
  const addToCart = (course) => {
    const isAlreadyInCart = cart.some((item) => item.id === course.id);
    if (!isAlreadyInCart) {
      const updatedCart = [...cart, course];
      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Producto añadido!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      
    } else {
      toast.info(`${course.title} ya está en el carrito.`);
    }
  };


  // Función para eliminar un curso del carrito
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
