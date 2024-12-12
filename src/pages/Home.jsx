import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Asegúrate de que este archivo esté configurado correctamente
import "./Home.css";

const Home = () => {
  const { categoryId } = useParams(); // Obtén la categoría de la URL
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar los cursos desde Firebase
  const fetchCursos = async () => {
    try {
      const cursosRef = collection(db, "items");
      let q;

      // Si hay una categoría seleccionada, filtra los cursos
      if (categoryId) {
        q = query(cursosRef, where("category", "==", categoryId));
      } else {
        q = cursosRef;
      }

      const querySnapshot = await getDocs(q);
      const cursosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCursos(cursosData);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, [categoryId]);

  if (loading) {
    return <p>Cargando cursos...</p>;
  }

  // Organizar cursos por categoría
  const categorias = cursos.reduce((acc, curso) => {
    const { category } = curso;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(curso);
    return acc;
  }, {});

  return (
    <div className="wrapper">
      <header className="header">
        <div className="text-center mb-4">
          <h1 className="display-4">Explora Nuestros Cursos</h1>
        </div>
      </header>
      <main className="main-container">
        {Object.entries(categorias).map(([category, courses], index) => (
          <section key={index} className="location">
            <h1>{category}</h1>
            <div className="box">
              {courses.map((course) => (
                <a key={course.id} href={`/item/${course.id}`}>
                  <img src={course.image} alt={course.title} />
                  <div className="course-info">
                    <h5>{course.title}</h5>
                    <p>${course.price.toFixed(2)}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Home;
