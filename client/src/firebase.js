// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-185d4.firebaseapp.com",
  projectId: "mern-blog-185d4",
  storageBucket: "mern-blog-185d4.appspot.com",
  messagingSenderId: "405117214720",
  appId: "1:405117214720:web:4d3e24ecb8bb6ee770b8e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
