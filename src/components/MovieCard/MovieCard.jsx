import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ id, title, temario, price, image }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <h3>{title}</h3>
      <p>{temario}</p>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={handleDetails} className="details-button">
        Ampliar detalle
      </button>
    </div>
  );
};

export default MovieCard;

