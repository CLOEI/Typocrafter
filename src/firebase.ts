// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk6Xdx-F-ZK-ZCgdVpmDP1c2e-hyhcL_w",
  authDomain: "typocrafter.firebaseapp.com",
  projectId: "typocrafter",
  storageBucket: "typocrafter.appspot.com",
  messagingSenderId: "26440868351",
  appId: "1:26440868351:web:66774dab9a85da286ac7ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }