const handleClickIssueContainer = (url, projectTitle, currentProject, issueContainer) => {
    issueContainer.addEventListener("click", (event) => {
      const { target } = event;
  
      if (target.classList.contains("toggleIssue")) {
        event.preventDefault();
        handleCloseReopenIssue(target, url, projectTitle, currentProject, issueContainer);
      } else if (target.classList.contains("deleteIssue")) {
        event.preventDefault();
        handleDeleteIssue(target, url, projectTitle, currentProject, issueContainer);
      }
    });
  };