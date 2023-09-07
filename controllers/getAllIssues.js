const Issue = require("../models/Issue");

const getAllIssues = async (req, res) => {
  const { project } = req.params;
  try {
  const filters = { project };
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
  res.status(500).json({ error: `An error occurred while fetching ${project && `"${project}" project`} issues` });
}
};

module.exports = { getAllIssues };