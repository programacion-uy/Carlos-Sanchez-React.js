import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cursos } from "../data/cursos";
import { useCart } from "../contexts/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const course = cursos.find((c) => c.id === parseInt(id));
  const { cart, addToCart } = useCart(); 
  const [showDemo, setShowDemo] = useState(false); // Estado para controlar el modal
  const isInCart = cart.some((item) => item.id === course.id);

  if (!course) {
    return (
      <div>
        <Header categorias={[]} />
        <div className="container">
          <h1>Curso no encontrado.</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="wrapper">
      

      <div className="container my-5">
        <div className="row align-items-center">
          {/* Carrusel de Detalles */}
          <div className="col-md-6">
            <div id="product-carousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {course.additionalImages.map((img, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={img} className="d-block w-100 rounded" alt={`Detalle ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#product-carousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#product-carousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>

          {/* Descripción */}
          <div className="col-md-6">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <p>
              <strong>Precio: </strong>${course.price.toFixed(2)}
            </p>
            <div className="btn-group">
              <button className="btn btn-primary" onClick={() => setShowDemo(true)}>
                Ver Demo
              </button>
              {!isInCart && (
                <>
                  <button className="btn btn-secondary" onClick={() => addToCart(course)}>
                    Añadir al Carrito
                  </button>
                  <button className="btn btn-success">Comprar Ahora</button>
                </>
              )}
              {isInCart && <span className="text-success">Ya está en el carrito</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Ver Demo */}
      {showDemo && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          tabIndex="-1"
          role="dialog"
          onClick={() => setShowDemo(false)}
        >
          <div className="modal-dialog modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Demo: {course.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowDemo(false)}></button>
              </div>
              <div className="modal-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="100%"
                    height="400"
                    src={course.demoVideo} // Cambia la URL por la del video real
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDemo(false)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
