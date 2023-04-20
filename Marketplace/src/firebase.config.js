// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LBj3T4WDDOT2reEwnhWcyWjsBSKU1VE",
  authDomain: "house-marketplace-app-ad046.firebaseapp.com",
  projectId: "house-marketplace-app-ad046",
  storageBucket: "house-marketplace-app-ad046.appspot.com",
  messagingSenderId: "325733525051",
  appId: "1:325733525051:web:0ef5f1b821c4e2b604de1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
