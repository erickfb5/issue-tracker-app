const Issue = require("../models/Issue");

const getAllIssues = async (req, res) => {
  const project_name = req.params.project;

  // Initialize filters with the project_name
  const filters = { project_name };

  // Define the query fields
  const queryFields = [
    "issue_title",
    "issue_text",
    "created_by",
    "assigned_to",
    "open",
    "status_text",
    "_id"
  ];

  for (const key of queryFields) {
    if (req.query[key]) filters[key] = req.query[key]
  }

  const issues = await Issue.find(filters);
  res.send(issues);
};

module.exports = { getAllIssues };