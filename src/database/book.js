import { db } from '../firebase/firebase'

import { collection, addDoc, doc, getDoc } from "firebase/firestore";

async function addBook(bookObj) {
  try {
    const bookCollection = collection(db, "books");
    const bookRef = await addDoc(bookCollection, bookObj);
    console.log("Document written with ID: ", bookRef.id);

    // Clear form fields
    clearFields(bookObj);


  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

async function clearFields(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = ''; // You can also set it to null or undefined
    }
  }
}

export default {
  addBook,
  // getAllBooks,
};







