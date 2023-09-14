import { db } from '../firebase/firebase'

import { collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc} from "firebase/firestore";

async function retrieveAllBooks(callback) {
  const bookCollection = collection(db, "books");
  let results = [];

  try {
    // Realtime retrieval of updates - onSnapshot
    const unsubscribe = onSnapshot(bookCollection, (querySnapshot) => {
      results = [];
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      callback(results);
    });
    return unsubscribe;
  } catch(e) {
    console.error("Error retreiving documents: ", e);
    throw e;
  }
}

async function addBook(bookObj) {
  try {
    // Reference to books collection
    const bookCollection = collection(db, "books");
    // Add bookObj as docs in book collection
    const bookRef = await addDoc(bookCollection, bookObj);
    console.log("Document written with ID: ", bookRef.id);

    // Clear form fields after submitted
    clearFormFields(bookObj);

  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

async function clearFormFields(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = ''; // You can also set it to null or undefined
    }
  }
}

async function updateBookDetails(updatedObjBook) {
  try {
    console.log(updatedObjBook)
    // Reference to books document
    const bookCollection = doc(db, "books", updatedObjBook.id);
    // Update bookObj as docs in book collection
    const bookRef = await updateDoc(bookCollection, updatedObjBook);
    console.log("Document updated with ID: ", updatedObjBook.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  } 
} 

async function deleteBook(bookID) {
  try {
    // Reference to books documents
    const bookRef = doc(db, "books", bookID);
    // Delete Document
    await deleteDoc(bookRef);
    console.log("Book deleted successfully with ID: ", bookID);
  } catch(e) {
    console.error("Error deleting document: ", e);
    throw e;
  }
}


export default {
  retrieveAllBooks,
  addBook,
  updateBookDetails,
  deleteBook
};







