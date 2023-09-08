const jsonResult = document.getElementById("jsonResult");
  
const handleSubmit = (event, method) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  makeAjaxRequest(method, "/api/issues/apitest", new URLSearchParams(formData), (data) => {
    jsonResult.textContent = JSON.stringify(data);
  });
};

const handleFormRequest = (formElement, method) =>
  formElement.addEventListener("submit", (event) =>
    handleSubmit(event, method)
  );