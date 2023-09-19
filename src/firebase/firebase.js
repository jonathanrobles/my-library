// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUxTLgBba1PFsASrvKcPtweOLgy_1iwEc",
  authDomain: "my-portfolio-athan.firebaseapp.com",
  projectId: "my-portfolio-athan",
  storageBucket: "my-portfolio-athan.appspot.com",
  messagingSenderId: "794865509015",
  appId: "1:794865509015:web:8b357106c7d3e2d73a7fd2"
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