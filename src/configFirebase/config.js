// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB95SdRb96fNshRTloyQkoOA-wabXwR_fo",
  authDomain: "livishop-b380b.firebaseapp.com",
  projectId: "livishop-b380b",
  storageBucket: "livishop-b380b.appspot.com",
  messagingSenderId: "95514527810",
  appId: "1:95514527810:web:270b815020afbba8b345db",
  measurementId: "G-40C35W0PFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}
