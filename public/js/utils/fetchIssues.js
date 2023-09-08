const fetchIssues = async (url, projectTitle, currentProject, issueContainer) => {
  makeAjaxRequest("GET", url, null, (data) => {
    projectTitle.textContent = `All issues for: ${currentProject}`;

    const issues = data.map((issue) => {
      const openstatus = issue.open ? "open" : "closed";
      const actionText = issue.open ? "close" : "reopen";
      return createIssueCard(openstatus, actionText, issue)
    });

    issueContainer.innerHTML = issues.join("");
});
};
