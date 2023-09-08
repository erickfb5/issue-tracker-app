const setupIssuePage = () => {
  const currentProject = window.location.pathname.replace(/\//g, "");
  const url = `/api/issues/${currentProject}`;
  const projectTitle = document.getElementById("projectTitle");
  const issueContainer = document.getElementById("issueContainer");
  const newIssueForm = document.getElementById("newIssue");

  fetchIssues(url, projectTitle, currentProject, issueContainer);
  handleClickIssueContainer(url, projectTitle, currentProject, issueContainer);
  handleSubmitNewIssue(url, currentProject, newIssueForm);
};

document.addEventListener("DOMContentLoaded", setupIssuePage);