<template>
<!-- Add Modal -->
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addModalLabel">Add a Book</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="" @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="bookName" class="form-label">Book Name</label>
            <input v-model="newBook.name" type="text" class="form-control" id="bookName" aria-describedby="">
          </div>
          <div class="mb-3">
            <label for="bookDesc" class="form-label">Description</label>
            <input v-model="newBook.description" type="text" class="form-control" id="bookDesc">
          </div>
          <div class="mb-3">
            <label for="bookAuthor" class="form-label">Author</label>
            <input v-model="newBook.author" type="text" class="form-control" id="bookAuthor">
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
import bookDAO from '../../database/book.js'

// Utils
import dateUtil from '../../utils/dateUtil';

export default {
  name: "addBook",
    data() {
        return {
          newBook: {
                name: '',
                description: '',
                author: '',
                dateCreated: dateUtil.getCurrentDate(),
                // icon: {}
          }
        }
    },
    methods: {
      // Not working - I think the problem is on the function itself
      async handleSubmit() {
        try {
          await bookDAO.addBook(this.newBook);
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