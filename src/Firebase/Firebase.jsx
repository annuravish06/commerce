// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_AgTDv3qMSeGS9hR2W4HqA24I6JJhGmM",
  authDomain: "myecom-e81eb.firebaseapp.com",
  projectId: "myecom-e81eb",
  storageBucket: "myecom-e81eb.firebasestorage.app",
  messagingSenderId: "245110825416",
  appId: "1:245110825416:web:9e70f451a709eee2e120fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }