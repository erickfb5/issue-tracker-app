document.addEventListener("DOMContentLoaded", () => {
  const testForm = document.getElementById("testForm");
  const testForm2 = document.getElementById("testForm2");
  const testForm3 = document.getElementById("testForm3");
  const jsonResult = document.getElementById("jsonResult");

  testForm.addEventListener("submit", (e) => {
    e.preventDefault();
    makeAjaxRequest("/api/issues/apitest", "POST",
      new URLSearchParams(new FormData(testForm)),
      (data) => jsonResult.textContent = JSON.stringify(data)
    );
  });

  testForm2.addEventListener("submit", (e) => {
    e.preventDefault();
    makeAjaxRequest("/api/issues/apitest", "PUT",
    new URLSearchParams(new FormData(testForm2)),
      (data) => jsonResult.textContent = JSON.stringify(data)
    );
  });

  testForm3.addEventListener("submit", (e) => {
    e.preventDefault();
    makeAjaxRequest("/api/issues/apitest", "DELETE",
      new URLSearchParams(new FormData(testForm3)),
      (data) => jsonResult.textContent = JSON.stringify(data)
    );
  });
});