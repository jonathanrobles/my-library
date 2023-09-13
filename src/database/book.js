import { db } from '../firebase/firebase'

import { collection, addDoc, doc, getDocs } from "firebase/firestore";

async function retrieveAllBooks() {
  const bookCollection = collection(db, "books");
  let results = [];

  try {
    const querySnapshot = await getDocs(bookCollection);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      results.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return results;
  } catch(e) {
    console.error("Error adding document: ", e);
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

    // Fetch updated data
    // retrieveAllBooks();

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

async function updateBookDetails() {

}

async function deleteBook() {

}

export default {
  retrieveAllBooks,
  addBook,
  updateBookDetails,
  deleteBook
};







