import React from "react";
import ReactDOM from "react-dom/client"; // Importa createRoot para React 18
import App from "./App.jsx"; // Asegúrate de usar la extensión correcta

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const root = ReactDOM.createRoot(document.getElementById("root")); // Usa createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
