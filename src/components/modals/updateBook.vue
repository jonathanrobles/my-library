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
            <input v-model="updateBook.name" type="text" class="form-control" id="bookName" aria-describedby="">
          </div>
          <div class="mb-3">
            <label for="bookDesc" class="form-label">Description</label>
            <input v-model="updateBook.description" type="text" class="form-control" id="bookDesc">
          </div>
          <div class="mb-3">
            <label for="bookAuthor" class="form-label">Author</label>
            <input v-model="updateBook.author" type="text" class="form-control" id="bookAuthor">
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
// Book Data Access Object
import bookDAO from '../../database/book'

// import utils
import dateUtil from '../../utils/dateUtil'

export default {
  name: "updateBook",
  props: {
    objDetails: Object
  },
  data() {
    return {
      // set inital values to input fields of update form
      updateBook: {
        id: '',
        name: '',
        description: '',  
        author: '',
        dateCreated: dateUtil.getCurrentDate(),
        // icon: {}
      }
    }
  },
  methods: {
    async displayBookDetails() {
      this.updateBook.id = this.objDetails.id || '';
      this.updateBook.name = this.objDetails.name || '';
      this.updateBook.description = this.objDetails.description || '';
      this.updateBook.author = this.objDetails.author || '';
    },
    async updateBookDetails() {
      try {
        await bookDAO.updateBookDetails(this.updateBook);
      } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
      }
    }
  },
  beforeMount() {
    // Fetch data or perform data setup here
    this.displayBookDetails();
  },
  watch: {
    // Use a watcher to update the form data when objDetails changes
    objDetails: {
      handler: 'displayBookDetails',
      immediate: true, // Call the handler immediately when the component is created
    }
  }
}
</script>

<style>

</style>