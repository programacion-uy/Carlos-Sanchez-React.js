import Curso from "../models/Curso.js";

export const cursos = [
  // Principiante
  new Curso(
    1,
    "Introducción a la Programación",
    "Aprende variables, funciones y bucles.",
    15.99,
    "https://via.placeholder.com/200x300",
    "Principiante",
    [
      "https://via.placeholder.com/400x300?text=Detalle+1",
      "https://via.placeholder.com/400x300?text=Detalle+2",
      "https://via.placeholder.com/400x300?text=Detalle+3",
    ],
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  ),
  new Curso(
    2,
    "Programación con Scratch",
    "Crea juegos y animaciones con Scratch.",
    12.99,
    "https://via.placeholder.com/200x300",
    "Principiante",
    [
      "https://via.placeholder.com/400x300?text=Scratch+Detalle+1",
      "https://via.placeholder.com/400x300?text=Scratch+Detalle+2",
      "https://via.placeholder.com/400x300?text=Scratch+Detalle+3",
    ],
    "https://www.youtube.com/embed/V-_O7nl0Ii0"
  ),
  new Curso(
    3,
    "Fundamentos de Lógica",
    "Aprende lógica para resolver problemas.",
    10.99,
    "https://via.placeholder.com/200x300",
    "Principiante",
    [
      "https://via.placeholder.com/400x300?text=Lógica+Detalle+1",
      "https://via.placeholder.com/400x300?text=Lógica+Detalle+2",
      "https://via.placeholder.com/400x300?text=Lógica+Detalle+3",
    ],
    "https://www.youtube.com/embed/e-ORhEE9VVg"
  ),
  // Robótica con LEGO
  new Curso(
    11,
    "Construcción Básica con LEGO",
    "Domina los principios básicos de LEGO.",
    20.99,
    "https://via.placeholder.com/200x300",
    "Robótica con LEGO",
    [
      "https://via.placeholder.com/400x300?text=LEGO+Detalle+1",
      "https://via.placeholder.com/400x300?text=LEGO+Detalle+2",
      "https://via.placeholder.com/400x300?text=LEGO+Detalle+3",
    ],
    "https://www.youtube.com/embed/LXb3EKWsInQ"
  ),
  new Curso(
    12,
    "Programación LEGO Boost",
    "Crea movimientos avanzados con Boost.",
    22.99,
    "https://via.placeholder.com/200x300",
    "Robótica con LEGO",
    [
      "https://via.placeholder.com/400x300?text=Boost+Detalle+1",
      "https://via.placeholder.com/400x300?text=Boost+Detalle+2",
      "https://via.placeholder.com/400x300?text=Boost+Detalle+3",
    ],
    "https://www.youtube.com/embed/RgKAFK5djSk"
  ),
  // Robótica con Cartón
  new Curso(
    21,
    "Construcción con Cartón",
    "Diseña estructuras con cartón reciclado.",
    10.99,
    "https://via.placeholder.com/200x300",
    "Robótica con Cartón",
    [
      "https://via.placeholder.com/400x300?text=Cartón+Detalle+1",
      "https://via.placeholder.com/400x300?text=Cartón+Detalle+2",
      "https://via.placeholder.com/400x300?text=Cartón+Detalle+3",
    ],
    "https://www.youtube.com/embed/kJQP7kiw5Fk"
  ),
  new Curso(
    22,
    "Motores y Cartón",
    "Combina motores y cartón en tus proyectos.",
    12.99,
    "https://via.placeholder.com/200x300",
    "Robótica con Cartón",
    [
      "https://via.placeholder.com/400x300?text=Motores+Detalle+1",
      "https://via.placeholder.com/400x300?text=Motores+Detalle+2",
      "https://via.placeholder.com/400x300?text=Motores+Detalle+3",
    ],
    "https://www.youtube.com/embed/3JZ_D3ELwOQ"
  ),
  // Cursos del Mes
  new Curso(
    31,
    "Curso del Mes: Micro:bit Avanzado",
    "Domina sensores y servos con Micro:bit.",
    25.99,
    "https://via.placeholder.com/200x300",
    "Cursos del Mes",
    [
      "https://via.placeholder.com/400x300?text=Microbit+Detalle+1",
      "https://via.placeholder.com/400x300?text=Microbit+Detalle+2",
      "https://via.placeholder.com/400x300?text=Microbit+Detalle+3",
    ],
    "https://www.youtube.com/embed/TcMBFSGVi1c"
  ),
  new Curso(
    32,
    "Curso del Mes: Electrónica Básica",
    "Aprende fundamentos de electrónica.",
    22.99,
    "https://via.placeholder.com/200x300",
    "Cursos del Mes",
    [
      "https://via.placeholder.com/400x300?text=Electrónica+Detalle+1",
      "https://via.placeholder.com/400x300?text=Electrónica+Detalle+2",
      "https://via.placeholder.com/400x300?text=Electrónica+Detalle+3",
    ],
    "https://www.youtube.com/embed/Z0dKc9ChBMk"
  ),
];
