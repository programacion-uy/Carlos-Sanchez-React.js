import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./CategoryCarousel.css";

const CategoryCarousel = ({ title, courses }) => {
  return (
    <div className="category-carousel">
      <h2 className="category-title">{title}</h2>
      <div className="carousel">
        {courses.map((course) => (
          <MovieCard
            key={course.id}
            id={course.id}
            title={course.title}
            temario={course.description}
            price={course.price}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
