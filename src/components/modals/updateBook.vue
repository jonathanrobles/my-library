<template>
<!-- Update Modal -->
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateModal">Add a Book</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="" @submit.prevent="updateBookDetails">
          <div class="mb-3">
            <label for="bookName" class="form-label">Book Name</label>
            <input v-model="updateForm.name" type="text" class="form-control" id="bookName" aria-describedby="">
          </div>
          <div class="mb-3">
            <label for="bookDesc" class="form-label">Description</label>
            <input v-model="updateForm.description" type="text" class="form-control" id="bookDesc">
          </div>
          <div class="mb-3">
            <label for="bookAuthor" class="form-label">Author</label>
            <input v-model="updateForm.author" type="text" class="form-control" id="bookAuthor">
          </div>
          <!-- <div class="mb-3">
            <label for="bookIcon" class="form-label">Upload Icon</label>
            <input class="form-control" type="file" id="bookIcon">
          </div> -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import book database
import { db } from '../../firebase/firebase'
import { doc, updateDoc } from 'firebase/firestore'

// import utils
import dateUtil from '../../utils/dateUtil'

export default {
  name: "updateBook",
  data() {
    return {
      updateForm: {
        name: '',
        description: '',
        author: '',
        dateCreated: dateUtil.getCurrentDate(),
        // icon: {}
      }
    }
  },
  methods: {
    async updateBookDetails() {
      try {
        // Reference to books document
        const bookCollection = doc(db, "books", this.updateForm.id);
        // Add bookObj as docs in book collection
        const bookRef = await updateDoc(bookCollection, this.updateForm);
        console.log("Document written with ID: ", bookRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
      }
    } 
  }
}
</script>

<style>

</style>