// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBra3QfnfTkStfw5ej7C8HzjTAO-T2PJaY",
  authDomain: "portfolio-lucas-perez.firebaseapp.com",
  projectId: "portfolio-lucas-perez",
  storageBucket: "portfolio-lucas-perez.appspot.com",
  messagingSenderId: "604580821248",
  appId: "1:604580821248:web:b470dbd638c65d2c995be5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
