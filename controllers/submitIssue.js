const Issue = require("../models/Issue");

const submitIssue = async (req, res) => {
  const { project } = req.params;
  try {
    const {
      issue_text,
      created_by,
      issue_title,
      assigned_to = "",
      status_text = "",
      open = true,
    } = req.body;

    const requiredFields = issue_text && created_by && issue_title;
    if (!requiredFields) return res.json({ error: "required field(s) missing" });

    const newIssue = new Issue({
      issue_text,
      created_by,
      issue_title,
      assigned_to,
      status_text,
      open,
      project,
    });

    const submittedIssue = await newIssue.save();
    res.json(submittedIssue);
  } catch (err) {
    console.error("🔴 Error creating new issue 🔴 ⮕ ", err);
    res.status(500).json({ error: "An error occurred while creating the issue" });
  }
};

module.exports = { submitIssue };