// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3BVHq96tHDKus323xZkyLZuQHR4YgbFY",
  authDomain: "starwars-login.firebaseapp.com",
  projectId: "starwars-login",
  storageBucket: "starwars-login.appspot.com",
  messagingSenderId: "980221542548",
  appId: "1:980221542548:web:07a8f8bd3f50b6df633481",
  measurementId: "G-B6CZSDF5BJ"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase
export const auth = getAuth(appFirebase);

