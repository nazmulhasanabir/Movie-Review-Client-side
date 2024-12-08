// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKxso3iYsGHOOZ9H9aI971BeXLApZf-Qw",
  authDomain: "assighnment-10.firebaseapp.com",
  projectId: "assighnment-10",
  storageBucket: "assighnment-10.firebasestorage.app",
  messagingSenderId: "366819789789",
  appId: "1:366819789789:web:cad546e9824c40a3750434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);