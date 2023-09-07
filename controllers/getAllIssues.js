const Issue = require("../models/Issue");

const getAllIssues = async (req, res) => {
  try {
  const project_name = req.params.project;
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
} catch (err) {
  console.error("🔴 Error fetching issues 🔴 ⮕ ", err);
}
};

module.exports = { getAllIssues };