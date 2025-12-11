// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyAh9QLoFTFKHd9BXp17ZP-KE9hOm69yExw",
  authDomain: "my-restaurant-d770c.firebaseapp.com",
  projectId: "my-restaurant-d770c",
  storageBucket: "my-restaurant-d770c.firebasestorage.app",
  messagingSenderId: "417249078434",
  appId: "1:417249078434:web:298812b5df3aec39843bfb",
  measurementId: "G-J1VSBZ2GQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
