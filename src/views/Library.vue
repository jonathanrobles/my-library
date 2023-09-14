<template>
  <h1 class="text-center">This is a Library</h1>

  <!-- CRUD Operation -->
  <div class="container-fluid d-grid gap-2 col-3 mx-auto">
    <button type="button" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#addModal">Add Book</button>
  </div>
  <!-- Book Card -->
  <div class="row mt-5">
  <div v-for="(book, index) in books" :key="index" class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text text-center">{{ book.name }}</h5>
        <p class="card-text">{{ book.id }}</p>
        <p class="card-text">Description: {{ book.description }}</p>
        <p class="card-text">Author: {{ book.author }}</p>
        <p class="card-text">{{ book.dateCreated }}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
            <!-- Update btn -->
            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#updateModal">Update Book</button>
            <!-- Delete btn -->
            <button @click="passIdToDelete(book.id)" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete Book</button>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Modals -->
    <AddModal />
    <UpdateModal />
    <DeleteModal :booksToDelete="docIdToDelete" />
</template>

<script>
// Book Data Access Object
import bookDAO from '../database/book'

// import modals
import AddModal from '../components/modals/addBook.vue'
import UpdateModal from '../components/modals/updateBook.vue'
import DeleteModal from '../components/modals/deleteBook.vue'

// Utils
import dateUtil from '../utils/dateUtil';

export default {
    name: 'library',
    components: {
        AddModal,
        UpdateModal,
        DeleteModal
    },
    data() {
        return {
          newBook: {
                name: '',
                description: '',
                author: '',
                dateCreated: dateUtil.getCurrentDate(),
                // icon: {}
          },
          books: [],
          docIdToDelete: null
        }
    },
    methods: {
      async getAllBooks() {
        try {
          let retrievedBooks = [];
          // retrieve data onSnapshot
          const unsubscribe = bookDAO.retrieveAllBooks((updateData) => {
            retrievedBooks = updateData;
            this.books = retrievedBooks;
          });
        } catch(e) {
          console.error("Error retreiving documents: ", e);
          throw e;
        }
      },
      async passIdToDelete(docID) {
        try {
          this.docIdToDelete = docID;
        } catch(e) {
          console.error("Error receiving document id: ", e);
          throw e;
        }
      }
    },
    // Fetch Firestore data when the component is mounted
    async mounted() {
      this.getAllBooks();
    }
}
</script>

<style>

</style>