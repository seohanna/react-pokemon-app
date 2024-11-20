// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDolEXDjolG6gNwl7NKR8mum8kN18aDQlE",
  authDomain: "react-poke-app-2a964.firebaseapp.com",
  projectId: "react-poke-app-2a964",
  storageBucket: "react-poke-app-2a964.firebasestorage.app",
  messagingSenderId: "485072606565",
  appId: "1:485072606565:web:3bb4282f828800e58ffd8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;