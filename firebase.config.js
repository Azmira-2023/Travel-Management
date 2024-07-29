// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDbpBTP4iAyP6jrHCoFHNmwBb8pscdoEQ",
  authDomain: "travel-dc14c.firebaseapp.com",
  projectId: "travel-dc14c",
  storageBucket: "travel-dc14c.appspot.com",
  messagingSenderId: "798356039910",
  appId: "1:798356039910:web:0b4d14f3c0ac3482e27327"
};

const app = initializeApp(firebaseConfig);

export default app