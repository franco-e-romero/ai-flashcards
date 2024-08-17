// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyGtu1Cnw8YGSY5q1VqzZYjobZtnBkp_g",
  authDomain: "ai-flashcards-12bac.firebaseapp.com",
  projectId: "ai-flashcards-12bac",
  storageBucket: "ai-flashcards-12bac.appspot.com",
  messagingSenderId: "567074611514",
  appId: "1:567074611514:web:c3eb55708cee46fcfcf003",
  measurementId: "G-RSZW7LSHYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}