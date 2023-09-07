const Issue = require("../models/Issue");

const submitIssue = async (req, res) => {
  const project_name = req.params.project;

  const {
    issue_text,
    created_by,
    issue_title,
    assigned_to = "",
    status_text = "",
    open = true,
  } = req.body;

  if (issue_text && created_by && issue_title) {
    const issueToSave = new Issue({
      issue_text,
      created_by,
      issue_title,
      assigned_to,
      status_text,
      open,
      project_name,
    });
    let issue = await issueToSave.save();

    const issueToSend = {
      issue_title: issue.issue_title,
      issue_text: issue.issue_text,
      created_by: issue.created_by,
      created_on: issue.created_on,
      assigned_to: issue.assigned_to,
      open: issue.open,
      status_text: issue.status_text,
      updated_on: issue.updated_on,
      _id: issue._id.toString(),
    };
    res.json(issueToSend);
  } else {
    res.json({ error: "required field(s) missing" });
  }
};

module.exports = { submitIssue };