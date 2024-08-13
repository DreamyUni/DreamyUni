// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCds8QRjfrrl-oWIVaiByRKT091CzcQ6ts",
  authDomain: "dreamyuni.firebaseapp.com",
  projectId: "dreamyuni",
  storageBucket: "dreamyuni.appspot.com",
  messagingSenderId: "393593769307",
  appId: "1:393593769307:web:a825aad78511786341de7e",
  measurementId: "G-LMQ40L6VGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);