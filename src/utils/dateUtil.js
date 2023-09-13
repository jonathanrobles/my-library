// dateUtil.js

// Function to get the current date in the format "YYYY-MM-DD"
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  // Function to format a date as "YYYY-MM-DD"
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  // Function to get the current timestamp in milliseconds
  function getCurrentTimestamp() {
    return new Date().getTime();
  }
  
  // Export the utility functions
  export default {
    getCurrentDate,
    formatDate,
    getCurrentTimestamp,
  };
  