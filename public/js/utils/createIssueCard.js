const createIssueCard = (openstatus, actionText, issue) =>
  `<div class="card">
    <div class="issue ${openstatus}">
    <p class="id">id: ${issue._id}</p>
    <h3>${issue.issue_title} - (${openstatus})</h3>
    <br>
    <p>${issue.issue_text}</p>
    <p>${issue.status_text}</p>
    <br>
    <p class="id"><b>Created by:</b> ${issue.created_by}  <b>Assigned to:</b> ${issue.assigned_to}</p>
    <p class="id"><b>Created on:</b> ${issue.created_on}  <b>Last updated:</b> ${issue.updated_on}</p>
    <br>

    <button class="toggleIssue" data-id="${issue._id}">${actionText}</button>
    <button class="deleteIssue" data-id="${issue._id}">delete</button>
    </div>
  </div>
  `;