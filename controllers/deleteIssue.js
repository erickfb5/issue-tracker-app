const Issue = require("../models/Issue");

const deleteIssue = async (req, res) => {
  const { _id } = req.body;
  if (!_id) return res.send({ error: "missing _id" });

  const issueToDelete = await Issue.findOne({ _id });
  if (!issueToDelete) return res.send({ error: "could not delete", _id });

   await Issue.deleteOne({ _id });
  console.log(`❌ ⮕  Issue 🆔 "${_id}" has been deleted`);
  res.send({ result: "successfully deleted", _id });
  return;
};

module.exports = { deleteIssue };