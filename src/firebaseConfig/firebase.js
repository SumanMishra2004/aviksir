// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQhMIBZhXpGILOLjQOWvDSfBvPJw-kttg",
  authDomain: "jedc-b7995.firebaseapp.com",
  projectId: "jedc-b7995",
  storageBucket: "jedc-b7995.appspot.com",
  messagingSenderId: "789814727155",
  appId: "1:789814727155:web:3bd54f54cf8be33ad58286",
  measurementId: "G-KZ1B33JLQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app)
const auth = getAuth(app)
export {db,auth}