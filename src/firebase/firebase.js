// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDagjY-0KcAj6pJ1l3VgfAG9u0XITDi1Ns",
  authDomain: "my-portfolio-robles.firebaseapp.com",
  projectId: "my-portfolio-robles",
  storageBucket: "my-portfolio-robles.appspot.com",
  messagingSenderId: "604908251269",
  appId: "1:604908251269:web:1d904b8db0d8ac06d621ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore
const db = getFirestore(app); 
// Initialize Cloud Storage
const storage = getStorage(app);

export { 
  db, 
  storage 
};