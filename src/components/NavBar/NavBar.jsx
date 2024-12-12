import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"; // Acceder al contexto del carrito
import { cursos } from "../../data/cursos"; // Importa los cursos para obtener categorías únicas
import "./NavBar.css";

const NavBar = () => {
  const { cart } = useCart(); // Accede al carrito
  const totalItems = cart.length; // Calcula el total de ítems en el carrito

  // Extraer categorías únicas
  const categorias = [...new Set(cursos.map((curso) => curso.category))];

  return (
    <header className="header">
      <div className="netflixLogo">
        <Link to="/">
          <img
            src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
            alt="Logo"
          />
        </Link>
      </div>
      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorías
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {categorias.map((category, index) => (
              <li key={index}>
                <Link className="dropdown-item" to={`/categories/${category}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/cart" className="cart-link">
          🛒 Carrito
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>} {/* Número de ítems */}
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
