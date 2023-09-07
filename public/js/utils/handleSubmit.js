const jsonResult = document.getElementById("jsonResult");
  
const handleSubmit = (event, method) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  makeAjaxRequest("/api/issues/apitest", method, new URLSearchParams(formData), (data) => {
    jsonResult.textContent = JSON.stringify(data);
  });
};