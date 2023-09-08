const handleSubmitNewIssue = (url, currentProject, form) => 
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.action = `/api/issues/${currentProject}`;
    makeAjaxRequest("POST", url, new URLSearchParams(new FormData(form)),
      (data) => window.location.reload(true)
    );
  });

