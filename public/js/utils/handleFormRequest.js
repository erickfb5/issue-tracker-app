const handleFormRequest = (formElement, method) =>
  formElement.addEventListener("submit", (event) =>
    handleSubmit(event, method)
  );