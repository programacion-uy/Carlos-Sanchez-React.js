import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1mDjACVGCHEfEYPBuJUL3TECr7jHmFMI",
  authDomain: "microbit-store.firebaseapp.com",
  databaseURL: "https://microbit-store-default-rtdb.firebaseio.com",
  projectId: "microbit-store",
  storageBucket: "microbit-store.firebasestorage.app",
  messagingSenderId: "938860485658",
  appId: "1:938860485658:web:d6d74b8fae9677ef5945a3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

