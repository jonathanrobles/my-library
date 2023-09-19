// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYiYLoj1R6SvCfspf2amM5Ng_1PPOQjX8",
  authDomain: "robles-portfolio.firebaseapp.com",
  projectId: "robles-portfolio",
  storageBucket: "robles-portfolio.appspot.com",
  messagingSenderId: "619730414268",
  appId: "1:619730414268:web:b11ef79007ee73effafeb9"
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