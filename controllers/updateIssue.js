const Issue = require("../models/Issue");

const updateIssue = async (req, res) => {
  const {
    _id,
    issue_title,
    issue_text,
    created_by,
    assigned_to,
    status_text,
    open,
  } = req.body;

  if (!_id) return res.send({ error: "missing _id" });

  const editedFields = {};

  // Check each field and add it to editedFields if it exists in the request body
  if (issue_title !== undefined) editedFields.issue_title = issue_title;
  if (issue_text !== undefined) editedFields.issue_text = issue_text;
  if (created_by !== undefined) editedFields.created_by = created_by;
  if (assigned_to !== undefined) editedFields.assigned_to = assigned_to;
  if (status_text !== undefined) editedFields.status_text = status_text;
  if (open !== undefined) editedFields.open = open;
  
  const fieldsToUpdate = Object.keys(editedFields);
  if (fieldsToUpdate.length === 0) return res.send({ error: "no update field(s) sent", _id })
  
  console.log("📝 ⮕  editedField(s) and its value(s)  ⮕  ", editedFields);
  console.log(`⏳ ⮕  ${fieldsToUpdate.length} field(s) to update  ⮕  `, fieldsToUpdate);

  const issueToUpdate = await Issue.findOne({ _id });
  if (!issueToUpdate) return res.send({ error: "could not update", _id });

  fieldsToUpdate.forEach((field) => issueToUpdate[field] = editedFields[field]);

  issueToUpdate.updated_on = new Date();
  await issueToUpdate.save();
  console.log(`🔄 ⮕  Issue 🆔 "${_id}" has been updated`);

  res.send({ result: "successfully updated", _id });
};

module.exports = { updateIssue };