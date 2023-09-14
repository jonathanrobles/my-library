<template>
  <!-- Add Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteModalLabel">Delete Book</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Are you sure to delete the book?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="deleteBookByID" type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// book DAO
import bookDAO from '../../database/book'

export default {
  name: "deleteModal",
  props: {
    booksToDelete: String
  },
  methods: {
    async deleteBookByID() {
      try {
        await bookDAO.deleteBook(this.booksToDelete);
      } catch(e) {
        console.log("Error deleting book");
        throw e;
      }
    }
  }
}
</script>

<style>

</style>