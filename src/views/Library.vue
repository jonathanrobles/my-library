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
        <h5 class="card-title text-center">Book {{ book.id }}</h5>
        <p class="card-text">Name: {{ book.name }}</p>
        <p class="card-text">{{ book.description }}</p>
        <p class="card-text">Author: {{ book.author }}</p>
        <p class="card-text">{{ book.dateCreated }}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
            <!-- Update btn -->
            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#updateModal">Update Book</button>
            <!-- Delete btn -->
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete Book</button>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Modals -->
    <AddModal />
    <UpdateModal />
    <DeleteModal />
</template>

<script>
// import modals
import AddModal from '../components/modals/addBook.vue'
import UpdateModal from '../components/modals/updateBook.vue'
import DeleteModal from '../components/modals/deleteBook.vue'

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
                id: '',
                name: '',
                description: '',
                author: '',
                dateCreated: '',
                icon: ''
            },
            books: [
                {
                    id: '1',
                    name: 'Book Name1',
                    description: 'A book description1',
                    author: 'Jonathan Robles',
                    dateCreated: '2023/19/10',
                    icon: '../assets/logo.svg'
                },
                {
                    id: '2',
                    name: 'Book Name2',
                    description: 'A book description2',
                    author: 'Jonathan Robles',
                    dateCreated: '2023/19/10',
                    icon: '../assets/logo.svg'
                }
            ]
        }
    }
}
</script>

<style>

</style>