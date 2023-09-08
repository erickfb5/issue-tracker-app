const setupMainPage = () => { // index.html
    const submitForm = document.getElementById("submitForm");
    const updateForm = document.getElementById("updateForm");
    const deleteForm = document.getElementById("deleteForm");
  
    handleFormRequest(submitForm, "POST");
    handleFormRequest(updateForm, "PUT");
    handleFormRequest(deleteForm, "DELETE");
  }
  
  document.addEventListener("DOMContentLoaded", setupMainPage);