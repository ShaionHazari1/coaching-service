// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPTds3HvuS4fLylS5kkteKMsqmT1X2wQo",
  authDomain: "coaching-service.firebaseapp.com",
  projectId: "coaching-service",
  storageBucket: "coaching-service.appspot.com",
  messagingSenderId: "990111965837",
  appId: "1:990111965837:web:ea85a18b025ffb81b178c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;