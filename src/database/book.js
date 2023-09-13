import { db } from '../firebase/firebase'

import { collection, addDoc, doc, getDoc } from "firebase/firestore";

async function addBook(bookObj) {
  try {
    const bookCollection = collection(db, "books");
    const bookRef = await addDoc(bookCollection, bookObj);
    console.log("Document written with ID: ", bookRef.id);
    return bookRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export default {
  addBook,
  // getAllBooks,
};







