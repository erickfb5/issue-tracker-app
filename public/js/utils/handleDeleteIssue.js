const handleDeleteIssue = (target, url, projectTitle, currentProject, issueContainer) => {
    const itemId = target.getAttribute("data-id");
    const data = { _id: itemId };

    const deleteConfirmation = confirm("Are you sure you want to delete this issue?");
    if (deleteConfirmation) {
      makeAjaxRequest("DELETE", url, new URLSearchParams(data), (response) => 
      fetchIssues(url, projectTitle, currentProject, issueContainer));
    }
  }