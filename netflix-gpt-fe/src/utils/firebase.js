// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSYr42T6EYtQeUsO02QczIlMiqxSzdqog",
  authDomain: "netflixgpt-4c82b.firebaseapp.com",
  projectId: "netflixgpt-4c82b",
  storageBucket: "netflixgpt-4c82b.firebasestorage.app",
  messagingSenderId: "974231307095",
  appId: "1:974231307095:web:f004b5ece248530fc77412",
  measurementId: "G-69CQL4YHWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);