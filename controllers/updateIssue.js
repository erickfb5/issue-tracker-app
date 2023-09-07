const Issue = require("../models/Issue");

const updateIssue = async (req, res) => {
  try {
    const { _id, ...updates } = req.body;
    if (!_id) return res.send({ error: "missing _id" });

    const editedFields = {};

    for (const key of Object.keys(updates) ){
      if(req.body[key]) editedFields[key] = req.body[key]
    }

    const fieldsToUpdate = Object.keys(editedFields);
    if (fieldsToUpdate.length === 0) return res.send({ error: "no update field(s) sent", _id });

    console.log("📝 ⮕  editedField(s) and its value(s)  ⮕  ", editedFields);
    console.log(`⏳ ⮕  ${fieldsToUpdate.length} field(s) to update  ⮕  `, fieldsToUpdate);

    const issueToUpdate = await Issue.findOne({ _id });
    if (!issueToUpdate) return res.send({ error: "could not update", _id });

    fieldsToUpdate.forEach((field) => (issueToUpdate[field] = editedFields[field]));

    issueToUpdate.updated_on = new Date();
    await issueToUpdate.save();
    console.log(`🔄 ⮕  Issue 🆔 "${_id}" has been updated on "${issueToUpdate.project.toUpperCase()}" project`);

    res.send({ result: "successfully updated", _id });
  } catch (err) {
    console.error("🔴 Error updating issue 🔴 ⮕ ", err);
    res.status(500).json({ error: "An error occurred while updating the issue" });
  }
};

module.exports = { updateIssue };