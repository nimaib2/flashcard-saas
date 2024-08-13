// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVtwWzBTweZ2zySxjGzZJk4TLNj7dSomU",
  authDomain: "flashcard-saas-ed34b.firebaseapp.com",
  projectId: "flashcard-saas-ed34b",
  storageBucket: "flashcard-saas-ed34b.appspot.com",
  messagingSenderId: "334444038724",
  appId: "1:334444038724:web:91c09d1a5d098b340fca11",
  measurementId: "G-E8DPPXG70J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);