<template>
    <div>
      <!-- Button to trigger the modal -->
      <button @click="showModal = true"  class="btn btn-primary">Open Modal</button>
  
      <!-- The Modal -->
      <div class="modal" :class="{ 'show': showModal }">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Modal Title</h4>
              <button type="button" class="close" @click="showModal = false">&times;</button>
            </div>
  
            <!-- Modal body -->
            <div class="modal-body">
              <p>This is the modal content.</p>
            </div>
  
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
              <button type="button" class="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
      };
    },
  };
  </script>
  