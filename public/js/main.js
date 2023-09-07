const setupFormHandlers = () => {
    const testForm = document.getElementById("testForm");
    const testForm2 = document.getElementById("testForm2");
    const testForm3 = document.getElementById("testForm3");
  
    handleFormRequest(testForm, "POST");
    handleFormRequest(testForm2, "PUT");
    handleFormRequest(testForm3, "DELETE");
  }
  
  document.addEventListener("DOMContentLoaded", setupFormHandlers);