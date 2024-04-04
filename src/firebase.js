// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy3ee2JJGxaGIXFVIeamqKm2YluwWDb5I",
  authDomain: "avengineering-8b399.firebaseapp.com",
  projectId: "avengineering-8b399",
  storageBucket: "avengineering-8b399.appspot.com",
  messagingSenderId: "916001428597",
  appId: "1:916001428597:web:5e906689ba16abb067543c",
  measurementId: "G-HQ6ZX5CWPL"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebase);
// // const analytics = getAnalytics(firebase);
// const auth = getAuth(firebase);

export default firebase;

