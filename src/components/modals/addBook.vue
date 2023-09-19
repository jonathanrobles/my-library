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
          <div class="mb-3">
            <label for="bookIcon" class="form-label">Upload Icon</label>
            <input @change="uploadFile" class="form-control" type="file" id="bookIcon">
          </div>
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
// import storage
import { storage } from '../../firebase/firebase'

// Book Data Access Object
import bookDAO from '../../database/book.js'

// Utils
import dateUtil from '../../utils/dateUtil';

// Import Firebase storage and related functions
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default {
  name: "addBook",
    data() {
        return {
          newBook: {
                name: '',
                description: '',
                author: '',
                dateCreated: dateUtil.getCurrentDate(),
                icon: null
          }
        }
    },
    methods: {
      async uploadFile(event) {

        try {
          const file = event.target.files[0];

          // Create the file metadata
          const metadata = {
            contentType: 'image/jpeg'
          };

          // Upload file and metadata to the object 'images/mountains.jpg'
          const storageRef = ref(storage, 'images/' + file.name);
          const uploadTask = uploadBytesResumable(storageRef, file, metadata);
          console.log("Image upload successful with ID: ", uploadTask.id);
          
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              // Handle errors
              console.error('Error uploading file:', error);
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                console.log('File available at', downloadURL);
                this.newBook.icon = downloadURL;
              })
              .catch((error) => {
                console.error('Error getting download URL:', error);
              });
            }
          );
        } catch(e) {
          console.error("Error adding document: ", e);
          throw e;
        }
      },
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