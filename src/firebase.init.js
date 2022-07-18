// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLzywybd0vG0ULgufpVJjrhzBixOAXJw",
  authDomain: "genius-car-project-61c85.firebaseapp.com",
  projectId: "genius-car-project-61c85",
  storageBucket: "genius-car-project-61c85.appspot.com",
  messagingSenderId: "715064124909",
  appId: "1:715064124909:web:b745530f5a736f15ea73e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;