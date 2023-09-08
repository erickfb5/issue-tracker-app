const handleCloseReopenIssue = (target, url, projectTitle, currentProject, issueContainer) => {
    const itemId = target.getAttribute("data-id");
    const data = { _id: itemId };
    const actionText = target.textContent.toLowerCase();
    data.open = actionText === "reopen";
  
    const confirmationMessage = `Are you sure you want to ${actionText} this issue?`;
    const userConfirmation = confirm(confirmationMessage);
  
    if (userConfirmation) {
      makeAjaxRequest("PUT", url, new URLSearchParams(data), (response) => 
      fetchIssues(url, projectTitle, currentProject, issueContainer));
    }
  }